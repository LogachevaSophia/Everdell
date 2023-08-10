class Player {
  constructor(name, id) {
    this.name = name;
    this.id=id;
  }
  startgame() {
    this.season = seasons[0];
    this.buildeduildings = 0; // карты зданий !!не уверена, что пригодится
    this.animalForBuilings = 0; //карты животных !!не увверена, что пригодится
    this.totalScore = 0; //победные очки
    this.totalcountWorker = 0; //общее число работников
    this.conutWorkerFree = 0; // свободные работники
    this.resources = [
      { id: 1, count: 0 },
      { id: 2, count: 0 },
      { id: 3, count: 0 },
      { id: 4, count: 0 },
    ]; //будет в виде массива ресурсов: [{id: 1, count: 25}]
    this.cards = []; //массив всех карт
  }
  redrawstatistic() {
    let statisticplayers = document.getElementById("statistic");
    //let players = JSON.parse(localStorage.getItem('players'));

    statisticplayers.innerHTML = "";
    for (let i = 0; i < nowGame.players.length; i++) {
      statisticplayers.innerHTML += nowGame.players[i].name;
      statisticplayers.innerHTML += "</br>";
      for (let j = 0; j < nowGame.players[i].resources.length; j++) {
        statisticplayers.innerHTML += resources.find(
          (x) => x.id === nowGame.players[i].resources[j].id
        ).name;
        statisticplayers.innerHTML += ": ";
        statisticplayers.innerHTML += nowGame.players[i].resources[j].count;
        statisticplayers.innerHTML += "</br>";
      }
      statisticplayers.innerHTML += "------------------------------</br>";
    }
  }

  redrawCardInHand() {
    let doccards = document.getElementsByClassName("cards-in-hand")[0];
    doccards.innerHTML = "";

    for (let i = 0; i < this.cards.length; i++) {
      doccards.innerHTML += `${this.cards[i].drawcard()}`;
    }
    for (let i = 0; i < this.cards.length; i++) {
      let elem = document.getElementsByClassName("cards__item")[i]; //получаем новый созданный элемент
      elem.addEventListener("click", (elem) => {
        
        console.log(elem);
        alert(elem.target.attributes[1].value);
      });
    }
  }
}
