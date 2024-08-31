import React, { Component } from 'react';

import counter from './store/counter';
import { observer } from 'mobx-react-lite';

const Counter = observer(() => { // observer() - наблюдатель для перерендеринга
    return (
        <div className='counter'>
            {'Count = ' + counter.count}
            <div className='btns'>
                <button className='btn' onClick={() => counter.increment()}>+</button>
                <button className='btn' onClick={() => counter.decrement()}>-</button>
            </div>
        </div>
    );
})

export default Counter;