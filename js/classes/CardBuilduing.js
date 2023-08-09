class Card {
    constructor(cost, mark, score, name){
        this.cost = cost; //стоимость по ресурсам [{id:1, count: 5}]
        this.mark = mark; //значок
        this.score = score; //победные очки 
        this.name = name;
    }
    canBuy(indPlayer){
        for (let i=0;i<this.cost.length;i++){
            let resource = players[indPlayer].resources.find(x=> x.id===this.cost[i].id) //если у игрока меньше, то false
            if (resource.count<this.cost[i].count){
                return false;
            }
        }
        return true;
    }
    buy(indPlayer){
        for (let i=0;i<this.cost.length;i++){
            let resource = players[indPlayer].resources.findIndex(x=> x.id===this.cost[i].id) //если у игрока меньше, то false
            players[indPlayer].resources[resource].count-=this.cost[i].count;
        }
        players[indPlayer].cards.push(this);
    }
}

class CardBuilding extends Card{
    constructor(cost, mark, score, name){
        super(cost, mark, score, name);
        this.close = false;
        this.canComeIn = false; //открыто ли здания для других
    }

    anotherGuestVisit(){ //другой чел пытается зайти в наше здание
        if (this.canComeIn){ //если есть возможность зайти другому
            //я еще хз как это реализовать

        }
    }



}

class CardAnimal extends Card{

}