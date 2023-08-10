class Game {
  constructor() {
    this.coutCardInDeck = 20; // количество карт в колоде
    this.countCardInHand = 8; // количество карт на руке
  }
  createPlayers(arrPlayers) {
    // создаем массив игроков, у каждого игрока имя и уникальный айди arrPlayers= [name, name]
    this.players = [];
    for (let i = 0; i < arrPlayers.length; i++) {
      this.players.push(new Player(arrPlayers[i], i));
      this.players[i].startgame();
    }
  }
  startGame() {
    //тут по-хорошмеу надо инициадизировать карты/колоды и тп и тд
    this.nowStep = 0;
    this.players[this.nowStep].redrawstatistic();
    this.cards = [];

    //создаем колоду
    for (let i = 0; i < this.coutCardInDeck; i++) {
      let ind = Math.floor(Math.random() * (UnicCardDeck.length - 0) + 0);
      this.cards.push(UnicCardDeck[ind]);
    }

    //раздаем игрокам на руки карты
    for (let i = 0; i < this.players.length; i++) {
      for (let j = 0; j < this.countCardInHand; j++) {
        let ind = Math.floor(Math.random() * (this.cards.length - 0) + 0);
        this.players[i].cards.push(this.cards[ind]); //на руки отдаем игроку
        this.cards.slice(ind, 1); // убираем из колоды выбранную карту
      }
    }

    this.players[this.nowStep].redrawCardInHand();
  }
  nextStep() {
    this.nowStep =
      this.nowStep + 1 >= this.players.length ? 0 : this.nowStep + 1; //у меня массиво игроков [1,2,3] я иду по индексам
    this.players[this.nowStep].redrawstatistic();
    this.players[this.nowStep].redrawCardInHand();
  }
}
