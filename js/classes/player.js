class Player {
  constructor(name, id) {
    this.name = name;
    this.id = id;
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
    this.buildedcard = []; //построенные карты
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

    //навешиваем события на карты в руке
    for (let i = 0; i < this.cards.length; i++) {
      let elem = document.getElementsByClassName("cards__item")[i]; //получаем новый созданный элемент
      elem.addEventListener("click", (elem) => {
        //alert(elem.target.attributes[1].value);

        let ind = this.cards.findIndex(
          (x) => x.id == elem.target.attributes[1].value
        ); //индекс карты в руках у игрока
        let canbuy = this.cards[ind].canBuy(this.id);
        if (canbuy) {
          this.cards[ind].buy(this.id);
          this.addBuildedCard(this.cards[ind]); //добавляем карту 
          this.cards.splice(ind, 1);
          // this.redrawBuildedCard();
          
          nowGame.nextStep(); //ход у игрока заканчивается и начинается лсдеюущий у другого
        } else {
          alert("Недостаточно ресурсов");
        }
      });
    }
  }

  addBuildedCard(card) {
    this.buildedcard.push(card);
  }

  redrawBuildedCard() {
    let el = document.getElementsByClassName("BuildedCards")[0];
    el.innerHTML = "";
    let s = '';

    for (let i = 0; i < this.buildedcard.length; i++) {
      s += this.buildedcard[i].drawcard();
    }

    el.innerHTML=s;

  }
}
