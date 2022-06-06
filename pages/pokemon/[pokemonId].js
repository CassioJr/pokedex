import Footer from "../../components/Footer"
import NavBar from "../../components/NavBar"

export const getStaticPaths = async () => {
    const maxPokemons = 251
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
            <div className="text-center">
                <h1 className="font-bold text-3xl mb-5">{pokemon.name}</h1>
                <img src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`} className="w-200 h-200" alt={pokemon.name} />
                <h2 className="font-bold">ID:</h2>
                <p className="border-2 text-white rounded border-red-900 mt-2 p-1 bg-red-900 p-2">#{pokemon.id}</p>
                <h2 className="font-bold">Tipo:</h2>
                {pokemon.types.map((item, index) => (
                    <span className="border-2 text-white uppercase antialiased rounded border-cyan-800 mt-2 mr-2 p-1 bg-cyan-800" key={index}>{item.type.name}</span>
                ))}
                <h2 className="font-bold">Altura:</h2>
                <p> {pokemon.height * 10}</p>
                <h2 className="font-bold">Peso:</h2>
                <p>{pokemon.weight / 10}</p>
            </div>
    )
}