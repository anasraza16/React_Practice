import Button from "./Button";
import Input from "./input";

const Contact = ({type, placeholder, message}) => {

    return (

        <>
            <h2>Contact</h2>

            <form action="">
                <Input type="text" placeholder="Enter your Name"/>
                <Input type="email" placeholder="Enter your Email"/>
                <Input type="password" placeholder="Enter your Passwrod"/>

                <Button type="submit" message="Enter" />
                <Button type="submit" message="Exit" />

            </form>
        </>

    )
}

export default Contact;