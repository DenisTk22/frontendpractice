import { makeObservable, observable, action, computed, makeAutoObservable } from "mobx";

class CounterStore {
    count = 0;

    //computer свойства(в виде геттера) - автоматически высчитывамые
    get total() {
        return this.count * 2;
    }
    //конструтор класса
    constructor() {
        // makeObservable(this, { // определение наблюдаемого стэйта
        //     count: observable,
        //     increment: action,
        //     decrement: action,
        //     total: computed,
        // })
        makeAutoObservable(this); // автоматическое определение
    }

    //actions (Это просто методы класса)
    increment = (value) => {
        this.count += value;
    }

    decrement = (value) => {
        this.count -= value;
    }
}

export default CounterStore; // объект созданный в единственном экзампляре