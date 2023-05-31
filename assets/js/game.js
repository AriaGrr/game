let cards;
let totalTime = 0;
const batata = document.getElementById('batata');

function setCartas() {
  const difficulty = event.target.dataset.dificuldade;
  if (difficulty == "facil") {
    cards = [{
        suit: 'https://media.discordapp.net/attachments/1110747285035429998/1110747364551049286/tower.jpg?width=414&height=675',
        flipped: false,
        found: false
      },
      {
        suit: 'https://media.discordapp.net/attachments/1110747285035429998/1110747364551049286/tower.jpg?width=414&height=675',
        flipped: false,
        found: false
      },
      {
        suit: 'https://media.discordapp.net/attachments/1110747285035429998/1110747364840460319/stregth.jpg?width=414&height=675',
        flipped: false,
        found: false
      },
      {
        suit: 'https://media.discordapp.net/attachments/1110747285035429998/1110747364840460319/stregth.jpg?width=414&height=675',
        flipped: false,
        found: false
      },
      {
        suit: 'https://media.discordapp.net/attachments/1110747285035429998/1110747365134041108/sun.jpg?width=415&height=676',
        flipped: false,
        found: false
      },
      {
        suit: 'https://media.discordapp.net/attachments/1110747285035429998/1110747365134041108/sun.jpg?width=415&height=676',
        flipped: false,
        found: false
      },
      {
        suit: 'https://media.discordapp.net/attachments/1110747285035429998/1110747524400164975/devil.jpg?width=414&height=675',
        flipped: false,
        found: false
      },
      {
        suit: 'https://media.discordapp.net/attachments/1110747285035429998/1110747524400164975/devil.jpg?width=414&height=675',
        flipped: false,
        found: false
      },
      {
        suit: 'https://media.discordapp.net/attachments/1110747285035429998/1110747494868078693/priestess.jpg?width=414&height=675',
        flipped: false,
        found: false
      },
      {
        suit: 'https://media.discordapp.net/attachments/1110747285035429998/1110747494868078693/priestess.jpg?width=414&height=675',
        flipped: false,
        found: false
      },
    ];
  }
  if (difficulty == "medio") {
    cards = [{
        suit: 'https://media.discordapp.net/attachments/1110747285035429998/1110747364551049286/tower.jpg?width=414&height=675',
        flipped: false,
        found: false
      },
      {
        suit: 'https://media.discordapp.net/attachments/1110747285035429998/1110747364551049286/tower.jpg?width=414&height=675',
        flipped: false,
        found: false
      },
      {
        suit: 'https://media.discordapp.net/attachments/1110747285035429998/1110747364840460319/stregth.jpg?width=414&height=675',
        flipped: false,
        found: false
      },
      {
        suit: 'https://media.discordapp.net/attachments/1110747285035429998/1110747364840460319/stregth.jpg?width=414&height=675',
        flipped: false,
        found: false
      },
      {
        suit: 'https://media.discordapp.net/attachments/1110747285035429998/1110747365134041108/sun.jpg?width=415&height=676',
        flipped: false,
        found: false
      },
      {
        suit: 'https://media.discordapp.net/attachments/1110747285035429998/1110747365134041108/sun.jpg?width=415&height=676',
        flipped: false,
        found: false
      },
      {
        suit: 'https://media.discordapp.net/attachments/1110747285035429998/1110747524400164975/devil.jpg?width=414&height=675',
        flipped: false,
        found: false
      },
      {
        suit: 'https://media.discordapp.net/attachments/1110747285035429998/1110747524400164975/devil.jpg?width=414&height=675',
        flipped: false,
        found: false
      },
      {
        suit: 'https://media.discordapp.net/attachments/1110747285035429998/1110747494868078693/priestess.jpg?width=414&height=675',
        flipped: false,
        found: false
      },
      {
        suit: 'https://media.discordapp.net/attachments/1110747285035429998/1110747494868078693/priestess.jpg?width=414&height=675',
        flipped: false,
        found: false
      },
      {
        suit: 'https://media.discordapp.net/attachments/1110747285035429998/1110747522793746442/hermit.jpg?width=415&height=676',
        flipped: false,
        found: false
      },
      {
        suit: 'https://media.discordapp.net/attachments/1110747285035429998/1110747522793746442/hermit.jpg?width=415&height=676',
        flipped: false,
        found: false
      },
      {
        suit: 'https://media.discordapp.net/attachments/1110747285035429998/1110747495237161020/hierophant.jpg?width=420&height=686',
        flipped: false,
        found: false
      },
      {
        suit: 'https://media.discordapp.net/attachments/1110747285035429998/1110747495237161020/hierophant.jpg?width=420&height=686',
        flipped: false,
        found: false
      },
      {
        suit: 'https://media.discordapp.net/attachments/1110747285035429998/1110747451117273149/star.jpg?width=420&height=686',
        flipped: false,
        found: false
      },
      {
        suit: 'https://media.discordapp.net/attachments/1110747285035429998/1110747451117273149/star.jpg?width=420&height=686',
        flipped: false,
        found: false
      },
      {
        suit: 'https://media.discordapp.net/attachments/1110747285035429998/1110747452060991538/justice.jpg?width=420&height=686',
        flipped: false,
        found: false
      },
      {
        suit: 'https://media.discordapp.net/attachments/1110747285035429998/1110747452060991538/justice.jpg?width=420&height=686',
        flipped: false,
        found: false
      },
      {
        suit: 'https://media.discordapp.net/attachments/1110747285035429998/1110747494167630005/temperance.jpg?width=420&height=686',
        flipped: false,
        found: false
      },
      {
        suit: 'https://media.discordapp.net/attachments/1110747285035429998/1110747494167630005/temperance.jpg?width=420&height=686',
        flipped: false,
        found: false
      },
    ]
  }
  if (difficulty == "dificil") {
    cards = [{
        suit: 'https://media.discordapp.net/attachments/1110747285035429998/1110747364551049286/tower.jpg?width=414&height=675',
        flipped: false,
        found: false
      },
      {
        suit: 'https://media.discordapp.net/attachments/1110747285035429998/1110747364551049286/tower.jpg?width=414&height=675',
        flipped: false,
        found: false
      },
      {
        suit: 'https://media.discordapp.net/attachments/1110747285035429998/1110747364840460319/stregth.jpg?width=414&height=675',
        flipped: false,
        found: false
      },
      {
        suit: 'https://media.discordapp.net/attachments/1110747285035429998/1110747364840460319/stregth.jpg?width=414&height=675',
        flipped: false,
        found: false
      },
      {
        suit: 'https://media.discordapp.net/attachments/1110747285035429998/1110747365134041108/sun.jpg?width=415&height=676',
        flipped: false,
        found: false
      },
      {
        suit: 'https://media.discordapp.net/attachments/1110747285035429998/1110747365134041108/sun.jpg?width=415&height=676',
        flipped: false,
        found: false
      },
      {
        suit: 'https://media.discordapp.net/attachments/1110747285035429998/1110747524400164975/devil.jpg?width=414&height=675',
        flipped: false,
        found: false
      },
      {
        suit: 'https://media.discordapp.net/attachments/1110747285035429998/1110747524400164975/devil.jpg?width=414&height=675',
        flipped: false,
        found: false
      },
      {
        suit: 'https://media.discordapp.net/attachments/1110747285035429998/1110747494868078693/priestess.jpg?width=414&height=675',
        flipped: false,
        found: false
      },
      {
        suit: 'https://media.discordapp.net/attachments/1110747285035429998/1110747494868078693/priestess.jpg?width=414&height=675',
        flipped: false,
        found: false
      },
      {
        suit: 'https://media.discordapp.net/attachments/1110747285035429998/1110747522793746442/hermit.jpg?width=415&height=676',
        flipped: false,
        found: false
      },
      {
        suit: 'https://media.discordapp.net/attachments/1110747285035429998/1110747522793746442/hermit.jpg?width=415&height=676',
        flipped: false,
        found: false
      },
      {
        suit: 'https://media.discordapp.net/attachments/1110747285035429998/1110747495237161020/hierophant.jpg?width=420&height=686',
        flipped: false,
        found: false
      },
      {
        suit: 'https://media.discordapp.net/attachments/1110747285035429998/1110747495237161020/hierophant.jpg?width=420&height=686',
        flipped: false,
        found: false
      },
      {
        suit: 'https://media.discordapp.net/attachments/1110747285035429998/1110747451117273149/star.jpg?width=420&height=686',
        flipped: false,
        found: false
      },
      {
        suit: 'https://media.discordapp.net/attachments/1110747285035429998/1110747451117273149/star.jpg?width=420&height=686',
        flipped: false,
        found: false
      },
      {
        suit: 'https://media.discordapp.net/attachments/1110747285035429998/1110747452060991538/justice.jpg?width=420&height=686',
        flipped: false,
        found: false
      },
      {
        suit: 'https://media.discordapp.net/attachments/1110747285035429998/1110747452060991538/justice.jpg?width=420&height=686',
        flipped: false,
        found: false
      },
      {
        suit: 'https://media.discordapp.net/attachments/1110747285035429998/1110747494167630005/temperance.jpg?width=420&height=686',
        flipped: false,
        found: false
      },
      {
        suit: 'https://media.discordapp.net/attachments/1110747285035429998/1110747494167630005/temperance.jpg?width=420&height=686',
        flipped: false,
        found: false
      },
      {
        suit: 'https://media.discordapp.net/attachments/1110747285035429998/1110747451528323072/chariot.jpg?width=420&height=686',
        flipped: false,
        found: false
      },
      {
        suit: 'https://media.discordapp.net/attachments/1110747285035429998/1110747451528323072/chariot.jpg?width=420&height=686',
        flipped: false,
        found: false
      },
      {
        suit: 'https://media.discordapp.net/attachments/1110747285035429998/1110747494536712212/empress.jpg?width=420&height=686',
        flipped: false,
        found: false
      },
      {
        suit: 'https://media.discordapp.net/attachments/1110747285035429998/1110747494536712212/empress.jpg?width=420&height=686',
        flipped: false,
        found: false
      },
      {
        suit: 'https://media.discordapp.net/attachments/1110747285035429998/1110747523104116786/fortune.jpg?width=419&height=686',
        flipped: false,
        found: false
      },
      {
        suit: 'https://media.discordapp.net/attachments/1110747285035429998/1110747523104116786/fortune.jpg?width=419&height=686',
        flipped: false,
        found: false
      },
      {
        suit: 'https://media.discordapp.net/attachments/1110747285035429998/1110747524114948157/world.jpg?width=429&height=686',
        flipped: false,
        found: false
      },
      {
        suit: 'https://media.discordapp.net/attachments/1110747285035429998/1110747524114948157/world.jpg?width=429&height=686',
        flipped: false,
        found: false
      },
      {
        suit: 'https://media.discordapp.net/attachments/1110747285035429998/1110747523640995900/fool.jpg?width=420&height=686',
        flipped: false,
        found: false
      },
      {
        suit: 'https://media.discordapp.net/attachments/1110747285035429998/1110747523640995900/fool.jpg?width=420&height=686',
        flipped: false,
        found: false
      },
    ];
  }
  gameStart();
}

function loadImages() {
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    card.image = new Image();
    card.image.src = card.suit;
  }
  shuffleCards();
}

const canvas = document.getElementById('jogo');
const context = canvas.getContext('2d');

const cardWidth = 100;
const cardHeight = 140;

let selectedCard = null;
let foundPairs = 0;

let timerInterval = null;

function updateTimer() {
  const minutes = Math.floor(totalTime / 60);
  const seconds = totalTime % 60;
  const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  document.getElementById('timer').innerText = formattedTime;
  totalTime++;
}

function startTimer() {
  totalTime = 0;
  timerInterval = setInterval(updateTimer, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function drawCards() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    const column = i % 10;
    const row = Math.floor(i / 10);
    const x = column * (cardWidth + 10) + 10;
    const y = row * (cardHeight + 10) + 10;

    if (!card.flipped && !card.found) {
      context.fillStyle = 'black';
      context.fillRect(x, y, cardWidth, cardHeight);
    } else {
      context.fillStyle = 'white';
      context.fillRect(x, y, cardWidth, cardHeight);
      context.drawImage(card.image, x, y, cardWidth, cardHeight);
    }
  }
}

function flipCard(index) {
  const card = cards[index];

  if (card.flipped || card.found) {
    return;
  }

  card.flipped = true;

  if (selectedCard !== null) {
    const selectedCardIndex = selectedCard;
    const selectedCardCurrent = cards[selectedCardIndex];

    if (card.suit === selectedCardCurrent.suit) {
      card.found = true;
      selectedCardCurrent.found = true;
      foundPairs += 2;

      if (foundPairs === cards.length) {
        stopTimer();
        alert('Você ganhou! Parabéns');
        restartGame();
      }
    } else {
      setTimeout(() => {
        card.flipped = false;
        selectedCardCurrent.flipped = false;
        drawCards();
      }, 500);
    }

    selectedCard = null;
  } else {
    selectedCard = index;
  }

  drawCards();
}

function clickCard(event) {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  for (let i = 0; i < cards.length; i++) {
    const column = i % 10;
    const row = Math.floor(i / 10);
    const cardX = column * (cardWidth + 10) + 10;
    const cardY = row * (cardHeight + 10) + 10;

    if (x >= cardX && x <= cardX + cardWidth && y >= cardY && y <= cardY + cardHeight) {
      flipCard(i);
      break;
    }
  }
}

function restartGame() {
  window.location.reload(true);

  // for (let i = 0; i < cards.length; i++) {
  //   cards[i].flipped = false;
  //   cards[i].found = false;
  // }

  // shuffleCards();
  // drawCards();

  // selectedCard = null;
  // foundPairs = 0;

  // stopTimer();
  // startTimer();
}

function shuffleCards() {
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
}

function gameStart() {

  loadImages();
  shuffleCards();
  drawCards();

  canvas.addEventListener('click', clickCard);

  startTimer();

  batata.style.visibility = 'hidden';

}