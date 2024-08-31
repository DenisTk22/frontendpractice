import { makeAutoObservable } from 'mobx';

class Counter {
    count = 0;
    constructor() {
        makeAutoObservable(this) //автоматическая настройка, делает класс автоматически отслеживаемым
    }

    //Функции состояния, экшены
    increment = () => {
        this.count++
    }

    decrement = () => {
        this.count--
    }

}

export default new Counter() // экспорт объекта данного класса