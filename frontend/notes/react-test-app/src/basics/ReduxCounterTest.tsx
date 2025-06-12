import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, increment, decrement } from '../state/store';

const ReduxCounterTest = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <p>카운트: {count}</p>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
    );
}

// npm install @reduxjs/toolkit react-redux
export default ReduxCounterTest