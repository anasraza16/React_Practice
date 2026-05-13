import { useState } from "react"

const SimpleCounter = () => {

    let [count, setCount] = useState(0);

    return (

        <>
        <div className="flex justify-center items-center gap-4 flex-col w-full h-screen
        bg-gradient-to-r from-cyan-500 to-blue-500  text-white">

            <p className="font-medium text-5xl p-2">{count}</p>

            <div className="flex gap-2">

                <button onClick={() => setCount(count + 1)} 
                className="p-4 border rounded-2xl bg-green-400 h-14 w-18">
                Add</button>
                <button onClick={() => setCount(count - 1)} 
                className="p-4 border rounded-2xl bg-amber-400 h-14 w-18">
                Minus</button>
                <button onClick={() => setCount(count = 0)} 
                className="p-4 border rounded-2xl bg-red-600 h-14 w-18">
                Reset</button>

            </div>

            </div>
        </>

    )
}

export default SimpleCounter