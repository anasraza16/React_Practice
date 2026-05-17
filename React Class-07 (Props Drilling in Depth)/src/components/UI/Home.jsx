import Contact from "./Contact"

const Home = ({name}) => {

    return (

        <>
            <div>
                <p>This is Home Component</p>
                <Contact />
                <h1>{name}</h1>
            </div>
        </>

    )
}

export default Home