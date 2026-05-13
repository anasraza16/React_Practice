import { useState } from "react"


const CounterApp = () => {

    let [count, setCount] = useState(0);

    let Increase = () => {
        setCount(count + 1)
    }

    let Decrease = () => {
        setCount(count - 1)
    }

    let Reset = () => {
        setCount(count = 0)
    }

    return (
        <>
            <h1>{count}</h1>
            <button onClick={Increase}>Plus</button>
            <br />
            <button onClick={Decrease}>Minus</button>
            <br />
            <button onClick={Reset}>Reset</button>

        </>
    )
}

// export default CounterApp