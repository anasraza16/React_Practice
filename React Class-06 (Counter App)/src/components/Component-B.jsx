import CompoA from "./Component-A"

const CompoB = ({name}) => {

    return (
        <div>
            <h2>Component B: Parent</h2>
            <CompoA name={name}/>
        </div>
    )
}

export default CompoB