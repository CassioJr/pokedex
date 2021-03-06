import Card from '../components/Card'

export async function getStaticProps() {
  const maxPokemons = 255
  const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/'
  const res = await fetch(`${BASE_URL}/?limit=${maxPokemons}`)
  const data = await res.json()

  data.results.forEach((item, index) => {
    item.id = index + 1
  })
  return {
    props: { pokemons: data.results, },
  };
}
export default function Home({ pokemons }) {
  return (
    <>
      <div className='bg-slate-800 h-auto'>
        <div className='ml-5 mr-5 grid grid-cols-1 gap-1 flex content-center justify-items-center items-center sm:grid-cols-5 sm:grid-rows-5 sm:gap-4'>
          {pokemons.map((pokemon) => (
            <Card key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      </div>
    </>
  );
}
