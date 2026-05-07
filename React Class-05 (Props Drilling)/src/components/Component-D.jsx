
import CompoC from "./Component-C"

const CompoD = ({userD}) => {

    return (
        <div>
            <h2>chhonta Component D</h2>
            <CompoC userC={userD} />
        </div>
    )
}

export default CompoD