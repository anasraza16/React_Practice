import CompoB from "./Component-B"

const CompoC = ({userC}) => {

    return (

        <div>
            <h2> teesra Component C</h2>
            <CompoB userB={userC}/>
        </div>
    )
}

export default CompoC