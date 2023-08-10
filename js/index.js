function startgame() {
  // players = [new Player("player1", 1), new Player("player2",2)];
  // players.forEach((element) => {
  //   element.startgame();
  // });
  // players[0].redrawstatistic(); //добавляем информацию о игроках на страницу
  // const coutCardInDeck = 20; // количество карт в колоде
  // const countCardInHand = 8; // количество карт на руке
  // //создаем колоду карт
  // var cards = [];
  // for (let i = 0; i < coutCardInDeck; i++) {
  //   let ind = Math.floor(Math.random() * (UnicCardDeck.length - 0) + 0);
  //   cards.push(UnicCardDeck[ind]);
  // }
  //нужно раздать карты игрокам
  // for (let i=0;i<players.length;i++){
  //   for (let j=0;j<countCardInHand;j++){
  //     let ind = Math.floor(Math.random() * (cards.length - 0) + 0);
  //     players[i].cards.push(cards[ind]); //на руки отдаем игроку
  //     cards.slice(ind, 1); // убираем из колоды выбранную карту
  //   }
  // }
  // players[idIndStep].redrawCardInHand();
}

// function drawCardInHand(indPlayer){
//   //отрисовка видимых карт с руки, на вход подается индекс игрока
//   let doccards = document.getElementsByClassName('cards-in-hand')[0];
//   doccards.innerHTML='';

//   for (let i=0;i<players[indPlayer].cards.length;i++){

//     doccards.innerHTML+=`${players[indPlayer].cards[i].drawcard()}`

//   }

// }

//инициализирование локаций статичных
var StaticLocationarray = [];
for (let i = 0; i < 8; i++) {
  let location = new StaticLocation(1, LocationResource[i]);
  StaticLocationarray.push(location);
}

//навешаиваем события на локации
statelocationItems = document.getElementsByClassName("state-location__item");
for (let i = 0; i < statelocationItems.length; i++) {
  statelocationItems[i].addEventListener("click", () => {
    indlocation = statelocationItems[i].getAttribute("number");
    //ставим рабочего

    StaticLocationarray[indlocation].putWorkeronStatic(
      nowGame.players[nowGame.nowStep].id
    );

    if (
      StaticLocationarray[indlocation].capacity ===
      StaticLocationarray[indlocation].occupiedPlaces.length
    ) {
      let str = '[number="'; //эта шняга нужна для поиска элемента в дом дереве, типа ищу создают строку, по котором буду искать (основывается на индексе локации)
      str += indlocation;
      str += '"]';
      let d = document.querySelector(str);
      d.style.backgroundColor = "red";
    }
    //меняем ход игры
    nowGame.nextStep();
  });
}

var nowGame = new Game();
nowGame.createPlayers(["name1", "name2"]);
// startgame();
nowGame.startGame();
