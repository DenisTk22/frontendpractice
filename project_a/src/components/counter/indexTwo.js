import React from 'react'
import { observer } from "mobx-react-lite";
import counterStore from "../../store/counterTwo-store";

const Counter = 
// observer(
    ({ count, total, increment, decrement }) => {
    // const {count, total, increment, decrement} = counterStore; 
    return (
        <>
            <button onClick={() => increment(1)}>+</button>
            <span>{count}</span>
            <button onClick={() => decrement(1)}>-</button>
            <span>{total}</span>
        </>
    );
}
// );

export default Counter;