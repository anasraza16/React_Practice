

const NavBar = () => {

    return (
        <div className="bg-gray-200 mb-4 border-b w-full h-18 px-4 py-2 flex justify-between items-center">
            <h1>LOGO</h1>

            <ul className="flex gap-2 text-black">
                <li>Blog</li>
                <li>Contact</li>
                <li>Abou Us</li>
                <li>Search</li>
            </ul>

        <button className="bg-green-400 p-1.5 rounded-2xl text-white w-20">Sign Up</button>

        </div>
    )
}

export default NavBar