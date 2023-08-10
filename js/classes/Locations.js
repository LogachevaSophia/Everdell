class Location{
    constructor(capacity){
        this.capacity = capacity;
        this.occupiedPlaces = []; //места, который занята. Необходимо помнить, где и какой игрок поставил своего рабочего, поэтому это будет массив: ["player1", "player2"]
    }
    putWorker(idPlayer){
        //надо проверить, что есть есть места в данной локации, если они есть, тогда можно запоминать рабочего
        
        if (this.capacity > this.occupiedPlaces.length){
            //если вместимость > занятых мест
            //тогда может ставить рабочего
            this.occupiedPlaces.push(idPlayer);

            //если мест не осталось, то перекрашиваем
            return true;
        }
        else{
            alert("Все места заняты");
            return false;
        }
    }
    RemoveWorker(idPlayer){
        //если игрок стоит на локации, то убираем его
        let ind = this.occupiedPlaces.indexOf(idPlayer); //находим индекс в массиве
        if (ind!=-1){
            //такой игрок тут стоит, тогда удаляем его
            this.occupiedPlaces.slice(ind,1);
        }
    }
}

class StaticLocation extends Location{
    constructor(capacity, resources){ //resources должен приходить в виде массива ресурсов в виде структуры: [{id: 1, count:2}, {id: 2, count 5}]
        super(capacity);
        this.resources = resources; //то, что получается игрок, когда становится на локациюы
    }
    putWorkeronStatic(idPlayer){
        if (super.putWorker(idPlayer)){
            //если получилось поставить рабочего, то игроку полагаются ресурсы за него

            let ind = nowGame.players.findIndex(x=> x.id===idPlayer)
            if (ind!=-1){
                this.resources.forEach(element => {
                    let findRecourseInd = nowGame.players[ind].resources.findIndex(x => x.id === element.id); //находм индекс в массиве ресурсов у игрока
                    nowGame.players[ind].resources[findRecourseInd].count += element.count; //добавляем в его копилку новые ресурсы
                });
                nowGame.players[ind].redrawstatistic();
            }
        }
    }
}