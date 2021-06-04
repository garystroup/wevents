import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { increment, decrement } from './testReducer';

export default function Sandbox() {
    const dispatch = useDispatch();

    //a hook to access the redux store's state. Takes a selector function as an argument. The selector is called with the store state
    const data = useSelector(state => state.test.data)

    return (
        <>
            <h1>Testing 123</h1>
            <h3>The data is: {data} </h3>
            <Button onClick={() => dispatch(increment(20))} content='Increment' color='blue' />
            <Button onClick={() => dispatch(decrement(10))} content='Decrement' color='red' />
        </>
    )
}