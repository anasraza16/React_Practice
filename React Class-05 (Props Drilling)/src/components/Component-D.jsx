
import CompoC from "./Component-C"

const CompoD = ({name}) => {

    return (
        <div className="p-4 bg-black rounded-2xl text-white w-3/12">
            <h2>Component D: Great Grand parent</h2>
            <CompoC name={name} />
        </div>
    )
}

export default CompoD