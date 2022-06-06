import Image from "next/dist/client/image";

export default function About() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="text-center">
            <Image src={`https://cdn.traction.one/pokedex/pokemon/25.png`} width="500" height="500" />        
            <p className="text-xl font-serif">Pokedex criada com Nextjs e tailwindcss para consultar pokemons! </p>
            </div>
        </div>  
    );
}