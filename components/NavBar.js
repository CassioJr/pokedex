export default function NavBar() {
    return (
        <nav>
            <div className="flex items-center justify-between h-12 text-white bg-red-800">
                <div className="flex items-center justify-center">
                    <img src="./public/favicon.ico" />
                    <h1>Pokedex</h1>
                </div>
                <ul className="flex list-none mr-5">
                    <li className="mr-5 "><a className="p-5" href="/">Home</a></li>
                    <li><a className="p-5">Sobre</a></li>
                </ul>
            </div>
        </nav>
    )
}