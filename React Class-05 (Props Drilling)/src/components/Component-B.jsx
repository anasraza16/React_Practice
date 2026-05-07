import CompoA from "./Component-A"

const CompoB = ({userB}) => {

    return (
        <div>
            <h2>dusra Component B</h2>
            <CompoA userA={userB}/>
        </div>
    )
}

export default CompoB