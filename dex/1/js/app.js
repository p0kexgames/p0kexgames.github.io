let warning
let pokedexChilds
let pokedexValuesf
let pokemonTypes = []
let pokemonClans = []
let pokemonEvolveStone = []
let pokemonBoostStone = []
let pokemonMoves = []
const pokedexElement = document.querySelector('.pokedex')
const filterName = document.querySelector('#filter-name')
const filterType = document.querySelector('#filter-type')
const sortType = document.querySelector('#sort-type')

fetch('data/pokedex.json')
  .then(res => res.json())
  .then(json => loadPokedex(json, sortType.value))

document.addEventListener('keyup', e => {
  if (e.key === 'Escape') {
    filterType.options[0].selected = 'selected'
    sortType.options[0].selected = 'selected'
    filterName.value = ''
    filterName.blur()
    loadPokedex(pokedexValues, sortType.value)
    loadFilters()
  }
})

filterName.addEventListener('keyup', e => {
  loadFilters()
})

filterType.addEventListener('change', e => {
  e.preventDefault()
  loadFilters()
  filterType.blur()
})

sortType.addEventListener('change', e => {
  e.preventDefault()
  loadPokedex(pokedexValues, sortType.value)
  loadFilters()
  sortType.blur()
})

function loadFilters() {
  warning.classList.remove('hidden')
  const name = filterName.value
  const type = filterType.value
  pokedexChilds.forEach(pokemon => {
    if (validPokemon(pokemon, name, type)) {
      pokemon.style.display = 'block'
      warning.classList.add('hidden')
    } else {
      pokemon.style.display = 'none'
    }
  })
}

function validPokemon(pokemon, name, type) {
  const search = new RegExp(name, 'i')
  const checkName = search.test(pokemon.dataset.name)
  const checkType = pokemon.dataset.type.includes(type)
  return checkName && checkType
}

function loadPokedex(pokedex, sort) {
  const view = sortPokedex(pokedex, sort)
    .map(p => pokemonCard(p))
    .join('')
  pokedexElement.innerHTML = view + '<div class="warning hidden">Nenhum pokemon foi encontrado.</div>'
  pokedexChilds = Array.from(pokedexElement.querySelectorAll('.pokemon'))
  warning = pokedexElement.querySelector('.warning')
  loadTypeFilter(pokemonTypes.uniq().sort())
  pokedexValues = pokedex
}

function sortPokedex(pokedex, sort) {
  switch(sort) {
    case 'Lowest Number (First)':
      return pokedex.sort((a, b) => a.id > b.id ? 1 : a.id < b.id ? -1 : 0)
    case 'Highest Number (First)':
      return pokedex.sort((a, b) => a.id > b.id ? -1 : a.id < b.id ? 1 : 0)
    case 'A-Z':
      return pokedex.sort((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0)
    case 'Z-A':
      return pokedex.sort((a, b) => a.name > b.name ? -1 : a.name < b.name ? 1 : 0)
  }
}
//books.map((book) => book.shelves.map((shelf) => shelf.category));
function pokemonCard(pokemon) {
  const types = pokemon.type
    .map(t => `<span class="pokemon-type background-${t}">${t}</span>`)
    .join('')
  const clans = pokemon.clan
    .map(t => `<span class="pokemon-clan background-${t}">${t}</span>`)
    .join('')
  const boostStones = pokemon.boostStone
    .map(t => `<span class="pokemon-boost-stone background-${t}">${t}</span>`)
    .join(' or ')
	const moves = pokemon.moves
  //const pokemonMoves = pokemon.moves
  //  .map(t => `<span class="pokemon-moves background-${t}">${t}</span>`)
  //  .join('')
 // const alertmoves = pokemon['moves'][0]['move'];
 // alert(alertmoves);
  const evolveStones = pokemon.evolveStone
    .map(t => `<span class="pokemon-evolve-stone background-${t}">${t}</span>`)
    .join(' + ')
  const img = pokemon.name.replace(/['\.]/g, '').replace(/\s/g, '-')
  pokemonTypes = pokemonTypes.concat(pokemon.type)
  pokemonClans = pokemonClans.concat(pokemon.clan)
  pokemonBoostStone = pokemonBoostStone.concat(pokemon.boostStone)
  pokemonEvolveStone = pokemonEvolveStone.concat(pokemon.evolveStone)
  return `<div class="pokemon" data-name="${pokemon.name}" data-type="${pokemon.type}" data-clan="${pokemon.clan}" tabindex="${pokemon.id}">
      <figure class="pokemon-figure">
        <img src="img/${img.toLowerCase()}.png" alt="${pokemon.name}">
      </figure>
      <section class="pokemon-description">
        <h2 class="pokemon-name"><span class="pokemon-id">#${Number(pokemon.id).toString().padStart(3, '0')}</span> ${pokemon.name}</h2>
        <span class="pokemon-price">Price: $${Number(pokemon.price).toString().padStart(3, '0')}</span>
        <span class="pokemon-xp">XP: ${Number(pokemon.xp).toString().padStart(3, '0')}</span>
        <h3 class="pokemon-level">Level: ${pokemon.level}</h3>
        <div class="pokemon-clans">${clans}</div>
        <div class="pokemon-types">${types}</div>
      </section>
      <section class="pokemon-stats">${loadStats(pokemon.stats)}</section>
      <section class="pokemon-description2">
        <div class="container dificulty">
          <div class="dif-lvl-out">
            <div class="dif-lvl lvl${pokemon.dificulty}">Dificulty ${pokemon.dificulty}</div>
          </div>
        </div>
		
		 <div class="container generation region">
            <div class="generation${pokemon.generation}">Generation ${pokemon.generation} (${pokemon.region})</div>
         </div>
		 
        <div class="pokemon-boost-stones">Boost: ${boostStones} (x${pokemon.boostIncrease})</div>
        <div class="pokemon-evolve-stones">Evolve ${evolveStones}</div>
		
        <div class="pokemon-variation">Variation ${pokemon.variation}</div>
        <div class="pokemon-fast">fast ${pokemon.fast}</div>
        <div class="pokemon-heavy">heavy ${pokemon.heavy}</div>
        <div class="pokemon-vip">vip ${pokemon.vip}</div>
        <div class="pokemon-preEvo">pre evolution ${pokemon.preEvo}</div>
        <div class="pokemon-Evo">Evolution ${pokemon.evo}</div>
      </section>
	  
      <section class="pokemon-moves">
		<div class="pokemon-move">${pokemonMoves}</div>
		<div class="pokemon-move">${loadMoves(pokemon.moves)}</div>
      </section>
    </div>`
} 

function loadTypeFilter(types) {
  types.map(t => filterType.insertAdjacentHTML('beforeend', `<option>${t}</option>`))
}
 
function loadStats(stats) {
  return Object.entries(stats)
    .filter(([name, value]) => !['total'].includes(name))
    .map(([name, value]) =>
      `<div class="stat-row">
        <div>${name}</div>
        <div class="stat-bar">
          <div class="stat-bar-bg" style="width: ${100*value/250}%">${value}</div>
        </div>
      </div>`
    )
    .join('')
} 


function loadMoves(move) {
	for( var i=0; i<move.length; i++) {
	return Object.entries(move)
	.map(([name, value]) =>
	 `<div class="move-row">
			<div>NAME : ${name}</div>
			<div>VALUE ${value}</div>
			
			<div>pokemon['moves'][0]['move']</div>
			<div>pokemon['moves'][1]['move']</div>
			
			<div>pokemon['moves'][0]['level']</div>
			<div>pokemon['moves'][1]['level']</div>
			
			
			
	 </div>`
    )
    .join('')
    
	} 
}


Array.prototype.uniq = function () {
  return this.filter(function (value, index, self) {
    return self.indexOf(value) === index
  })
}