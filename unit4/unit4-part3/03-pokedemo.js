
const BASEURL = 'https://pokeapi.co/api/v2'


async function getPokemon(name) {
  const response = await fetch(`${BASEURL}/pokemon/${name}`)
  const json = await response.json()
  return json
}

const choice = await getPokemon('seel')


async function getPokemonMoves(name) {
  const pokemon = await getPokemon(name)
  return pokemon.moves
}
