import Link from "next/link";

export default function Card({ pokemon }) {
    return (
        <div className="flex flex-col justify-center items-center border-2 border-indigo-500 rounded-md bg-gray-100 p-5 mt-4 mb-4">
            <img src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`} className="w-120 h-120" alt={pokemon.name} />
            <p className="bg-red-700 rounded text-slate-100 p-2 text-center mt-2">#{pokemon.id}</p>
            <div className="text-xl text-center">
            <h3 className="capitalize mb-4">{pokemon.name}</h3>
                <Link href={`/pokemon/${pokemon.id}`}>
                    <a className="bg-neutral-700 hover:bg-rose-700 rounded-lg text-slate-100 p-2 text-center">Detalhes</a>
                </Link>
            </div>
        </div>
    )
}