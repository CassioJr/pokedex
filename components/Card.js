import Link from "next/link";

export default function Card({ pokemon }) {
    return (
        <div className="flex flex-col justify-center items-center border-2 border-indigo-500 rounded-md bg-gray-100 p-5 mt-5">
            <img src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`} className="w-120 h-120" alt={pokemon.name} />
            <p className="bg-red-700 rounded w-8 text-slate-100 p-2">#{pokemon.id}</p>
            <h3>{pokemon.name}</h3>
            <Link href={`/pokemon/${pokemon.id}`}>
                <a>Detalhes</a>
            </Link>
        </div>
    )
}