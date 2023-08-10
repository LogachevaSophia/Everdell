class Card {
  constructor(cost, mark, score, name, id) {
    this.cost = cost; //стоимость по ресурсам [{id:1, count: 5}]
    this.mark = mark; //значок {id, name, svg}
    this.score = score; //победные очки
    this.name = name;
    this.id = id;
  }
  canBuy(indPlayer) {
    for (let i = 0; i < this.cost.length; i++) {
      let resource = nowGame.players[indPlayer].resources.find(
        (x) => x.id === this.cost[i].id
      ); //если у игрока меньше, то false
      if (resource.count < this.cost[i].count) {
        return false;
      }
    }
    return true;
  }
  buy(indPlayer) {
    for (let i = 0; i < this.cost.length; i++) {
      let resource = nowGame.players[indPlayer].resources.findIndex(
        (x) => x.id === this.cost[i].id
      ); //если у игрока меньше, то false
      nowGame.players[indPlayer].resources[resource].count -= this.cost[i].count;
    }
    nowGame.players[indPlayer].cards.push(this);
  }
  drawcard() {
    let s = `<div class="cards__item" numberId='${this.id}'>
                <div class="item__title">${this.name}</div>
                <div class="item__mark">${this.mark.svg}</div>`;
    let top = 60;

    for (let i = 0; i < this.cost.length; i++) {
      s += `<div class="item__cost" style='top:${top}px'>`;
      s += resources.find((x) => x.id === this.cost[i].id).svg;
      s += `<span>${this.cost[i].count}</span>`;
      s += `</div>`;
      top += 20;
    }
    s += `</div>`;

    return s;
  }
}

class CardBuilding extends Card {
  constructor(cost, mark, score, name, id) {
    super(cost, mark, score, name, id);
    this.close = false;
    this.canComeIn = false; //открыто ли здания для других
  }

  anotherGuestVisit() {
    //другой чел пытается зайти в наше здание
    if (this.canComeIn) {
      //если есть возможность зайти другому
      //я еще хз как это реализовать
    }
  }
}

class CardAnimal extends Card {}
