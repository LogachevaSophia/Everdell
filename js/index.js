function startgame() {
  players = [new Player("player1"), new Player("player2")];
  players.forEach((element) => {
    element.startgame();
  });
  //добавляем информацию о игроках на страницу
  players[0].redrawstatistic();

  const coutCardInDeck = 20;
  //создаем колоду карт
  var cards = [];
  for (let i = 0; i < coutCardInDeck; i++) {
    let ind = Math.floor(Math.random() * (UnicCardDeck.length - 0) + 0);
    cards.push(UnicCardDeck[ind]);
  }
  

  //нужно раздать карты игрокам
//   for (let i=0;i<)


}

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
    StaticLocationarray[indlocation].putWorkeronStatic("player1");
    let str = '[number="';
    str += indlocation;
    str += '"]';
    let d = document.querySelector(str);
    d.style.backgroundColor = "red";
    if (
      StaticLocationarray[indlocation].capacity ===
      StaticLocationarray[indlocation].occupiedPlaces.length
    ) {
      console.log(this);
    }
  });
}

var players = [];
startgame();
