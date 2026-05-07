import CompoB from "./Component-B"

const CompoC = ({name}) => {

    return (

        <div>
            <h2>Component C: Grand Parent</h2>
            <CompoB name={name}/>
        </div>
    )
}

export default CompoC