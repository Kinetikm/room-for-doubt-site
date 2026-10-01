// A small, local preview of questions from the app's three decks.
(() => {
  const decks = {
  "warmup": {
    "name": {
      "ru": "Разминка",
      "en": "Warm-up"
    },
    "questions": [
      {
        "ru": "Расскажи о самом странном сне, который ты запомнил.",
        "en": "Tell us about the strangest dream you can remember."
      },
      {
        "ru": "Какой самый неожиданный талант у тебя есть?",
        "en": "What's the most surprising talent you have?"
      },
      {
        "ru": "Какой самый странный подарок ты когда-либо дарил?",
        "en": "What's the strangest gift you've ever given someone?"
      },
      {
        "ru": "Какая у тебя самая необычная семейная традиция?",
        "en": "What's the most unusual tradition in your family?"
      }
    ]
  },
  "together": {
    "name": {
      "ru": "Для компании",
      "en": "Together"
    },
    "questions": [
      {
        "ru": "Если бы у вашей компании был талисман, что бы это было?",
        "en": "If this group had a mascot, what would it be?"
      },
      {
        "ru": "Какому навыку ты мог бы научить эту компанию за десять минут?",
        "en": "What skill could you teach this group in ten minutes?"
      },
      {
        "ru": "Какая твоя маленькая победа заслуживает общего тоста?",
        "en": "What small win of yours deserves a group toast?"
      },
      {
        "ru": "Какой безобидный спор мог бы разделить эту компанию на две команды?",
        "en": "What harmless debate could split this group into two teams?"
      }
    ]
  },
  "deeper": {
    "name": {
      "ru": "Глубже",
      "en": "A little deeper"
    },
    "questions": [
      {
        "ru": "Что люди чаще всего понимают о тебе неправильно при первой встрече?",
        "en": "What do people most often get wrong about you when they first meet you?"
      },
      {
        "ru": "Расскажи о том, чего ты раньше стеснялся, а теперь совсем не стесняешься.",
        "en": "Tell us about something you used to be embarrassed about but aren't anymore."
      },
      {
        "ru": "Расскажи о решении, которое удивило даже тех, кто хорошо тебя знает.",
        "en": "Tell us about a decision you made that surprised the people who know you best."
      },
      {
        "ru": "Расскажи о совете, который ты проигнорировал, а потом пожалел об этом.",
        "en": "Tell us about advice you ignored and later wished you'd taken."
      }
    ]
  }
};
  const choices = document.querySelector('.deck-choices');
  const next = document.querySelector('.next-question');
  if (!choices || !next) return;
  const locale = document.documentElement.lang === 'en' ? 'en' : 'ru';
  const deckName = document.getElementById('sample-deck');
  const question = document.getElementById('sample-question');
  const count = document.getElementById('sample-count');
  let selected = 'warmup';
  let index = 0;
  const update = () => {
    const deck = decks[selected];
    deckName.textContent = deck.name[locale];
    question.textContent = deck.questions[index][locale];
    count.textContent = `${String(index + 1).padStart(2, '0')} / ${String(deck.questions.length).padStart(2, '0')}`;
    choices.querySelectorAll('button').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.deck === selected));
    });
  };
  choices.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
      selected = button.dataset.deck;
      index = 0;
      update();
    });
  });
  next.addEventListener('click', () => {
    index = (index + 1) % decks[selected].questions.length;
    update();
  });
  choices.hidden = false;
  next.hidden = false;
  update();
})();
