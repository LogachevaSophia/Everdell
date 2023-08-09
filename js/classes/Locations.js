class Location{
    constructor(capacity){
        this.capacity = capacity;
        this.occupiedPlaces = []; //места, который занята. Необходимо помнить, где и какой игрок поставил своего рабочего, поэтому это будет массив: ["player1", "player2"]
    }
    putWorker(namePlayer){
        //надо проверить, что есть есть места в данной локации, если они есть, тогда можно запоминать рабочего
        
        if (this.capacity > this.occupiedPlaces.length){
            //если вместимость > занятых мест
            //тогда может ставить рабочего
            this.occupiedPlaces.push(namePlayer);

            //если мест не осталось, то перекрашиваем
            return true;
        }
        else{
            alert("Все места заняты");
            return false;
        }
    }
    RemoveWorker(namePlayer){
        //если игрок стоит на локации, то убираем его
        let ind = this.occupiedPlaces.indexOf(namePlayer); //находим индекс в массиве
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
    putWorkeronStatic(namePlayer){
        if (super.putWorker(namePlayer)){
            //если получилось поставить рабочего, то игроку полагаются ресурсы за него

            let ind = players.findIndex(x=> x.name===namePlayer)
            if (ind!=-1){
                this.resources.forEach(element => {
                    let findRecourseInd = players[ind].resources.findIndex(x => x.id === element.id); //находм индекс в массиве ресурсов у игрока
                    players[ind].resources[findRecourseInd].count += element.count; //добавляем в его копилку новые ресурсы
                });
                players[ind].redrawstatistic();
            }
        }
    }
}