import React, { Component } from 'react';
import ReactDOM from "react-dom"
import { observer } from 'mobx-react-lite';
import myTimer from '../store/timer'
import timer from '../store/timer'

// A function component wrapped with `observer` will react to any future change in an observable it used before.
const TimerView = observer(() =>
     <span>Seconds passed: {timer.secondsPassed}</span>)

setInterval(() => {
    timer.increaseTimer()
}, 1000)

export default TimerView;