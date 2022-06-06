import Image from "next/image"
export default function NavBar() {
    return (
        <nav>
            <div className="flex items-center justify-between h-16 text-white bg-cyan-900">
                <div className="flex items-center justify-center ml-5">
                    <Image src="/images/logo.jpg" width="40" height="40"/>
                    <a href="/" className="ml-2 text-xl">Pokedex</a>
                </div>
                <ul className="flex list-none sm:mr-5">
                    <li className="sm:mr-5 p-5"><a className="hover:border-b-2 hover:delay-75 border-teal-400 sm:text-xl sm:p-2" href="/">Home</a></li>
                    <li className="p-5"><a className=" hover:border-b-2 transition hover:delay-75 border-teal-400 sm:text-xl    sm:p-2" href="/about">Sobre</a></li>
                </ul>
            </div>
        </nav>
    )
}