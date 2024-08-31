import { makeAutoObservable } from "mobx"

class Todo {
    todos = []

    constructor() {
        makeAutoObservable(this)
    }

}

export default new Todo()