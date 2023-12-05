import React from 'react'

export default function CounterTwo(props) {
  return (
    <>
        <h1>Counter Two</h1>
        <p>{props.count}</p>
        { props.handleIncrement && (
            <button onClick={props.handleIncrement}>Increment</button>
        )}
        { props.handleDecrement && (
            <button onClick={props.handleDecrement}>Decrement</button>
        )}
    </>
  )
}
