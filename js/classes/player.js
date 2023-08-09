class Player {
  constructor(name) {
    this.name = name;
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
    this.cards = [];//массив всех карт
  }
  redrawstatistic() {
    let statisticplayers = document.getElementById("statistic");
    //let players = JSON.parse(localStorage.getItem('players'));
    
    statisticplayers.innerHTML = "";
    for (let i = 0; i < players.length; i++) {
      statisticplayers.innerHTML += players[i].name;
      statisticplayers.innerHTML += "</br>";
      for (let j = 0; j < players[i].resources.length; j++) {
        statisticplayers.innerHTML += resources.find(
          (x) => x.id === players[i].resources[j].id
        ).name;
        statisticplayers.innerHTML += ": ";
        statisticplayers.innerHTML += players[i].resources[j].count;
        statisticplayers.innerHTML += "</br>";
      }
      statisticplayers.innerHTML += "------------------------------</br>";
    }
  }
}
