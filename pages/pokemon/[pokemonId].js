import Image from "next/image"

export const getStaticPaths = async () => {
    const maxPokemons = 255
    const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/'
    const res = await fetch(`${BASE_URL}/?limit=${maxPokemons}`)
    const data = await res.json()
    const paths = data.results.map((pokemon, index) => {
        return {
            params: { pokemonId: (index + 1).toString() }
        }
    })

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.pokemonId
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await res.json()
    return {
        props: { pokemon: data },
    }
}

export default function Pokemon({ pokemon }) {
    return (
        <div className="h-screen">
            <div className="text-center">
                <h1 className="font-bold text-3xl mb-5 capitalize">{pokemon.name}</h1>
                <Image src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`} width="200"
                    height="200" alt={pokemon.name} />
                <div className="text-xl">
                    <h2 className="font-bold mb-2 mt-2">ID:</h2>
                    <span className="text-white p-1 border-2 rounded-lg border-rose-900 bg-rose-900 mb-2">#{pokemon.id}</span>
                </div>
                <div className="text-xl">
                    <h2 className="font-bold mt-2 mb-2">Tipo:</h2>
                    {pokemon.types.map((item, index) => (
                        <span className="border-2 text-white uppercase antialiased rounded border-cyan-800 mr-2 p-1 bg-cyan-800" key={index}>{item.type.name}</span>
                    ))}
                </div>
                <div className="flex flex-col items-center justify-center p-1 text-xl">
                    <h2 className="font-bold mt-2">Altura:</h2>
                    <p> {pokemon.height * 10} cm</p>
                    <h2 className="font-bold mt-2">Peso:</h2>
                    <p>{pokemon.weight / 10} kg</p>
                </div>
            </div>
        </div>
    )
}