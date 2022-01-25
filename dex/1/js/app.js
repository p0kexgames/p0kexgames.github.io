let warning
let pokedexChilds
let pokedexValuesf
let pokemonTypes = []
let pokemonClans = []
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

function pokemonCard(pokemon) {
  const types = pokemon.type
    .map(t => `<span class="pokemon-type background-${t}">${t}</span>`)
    .join('')
  const clans = pokemon.clan
    .map(t => `<span class="pokemon-clan background-${t}">${t}</span>`)
    .join('')
  const img = pokemon.name.replace(/['\.]/g, '').replace(/\s/g, '-')
  pokemonTypes = pokemonTypes.concat(pokemon.type)
  pokemonClans = pokemonClans.concat(pokemon.clan)
  return `<div class="pokemon" data-name="${pokemon.name}" data-type="${pokemon.type}" data-clan="${pokemon.clan}" tabindex="${pokemon.id}">
      <figure class="pokemon-figure">
        <img src="img/${img.toLowerCase()}.png" alt="${pokemon.name}">
      </figure>
      <section class="pokemon-description">
        <span class="pokemon-id">#${Number(pokemon.id).toString().padStart(3, '0')}</span>
        <h1 class="pokemon-name">${pokemon.name}</h1>
        <h1 class="pokemon-level">Level: ${pokemon.level}</h1>
        <div class="pokemon-types">${types}</div>
        <div class="pokemon-clans">${clans}</div>
      </section>
      <section class="pokemon-stats">${loadStats(pokemon.stats)}</section>
      <section class="pokemon-description2">
        <span class="pokemon-price">Price: $${Number(pokemon.price).toString().padStart(3, '0')}</span>
        <span class="pokemon-xp">XP: ${Number(pokemon.xp).toString().padStart(3, '0')}</span>
        <div class="container dificulty">
          <div class="dif-lvl-out">
            <div class="dif-lvl lvl${pokemon.dificulty}">Dificulty ${pokemon.dificulty}</div>
          </div>
        </div>
		
		 <div class="container generation">
            <div class="generation${pokemon.generation}">Generation ${pokemon.generation}</div>
         </div>
		 <div class="container region">
            <div class="region${pokemon.region}">Region ${pokemon.region}</div>
         </div>
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

function loadDificulty(dificulty) {
  return 
      `<div class="stat-row">
        <div class="stat-bar">
          <div class="stat-bar-bg" style="width: ${100*value/250}%">${value}</div>
        </div>
      </div>`
    
} 


Array.prototype.uniq = function () {
  return this.filter(function (value, index, self) {
    return self.indexOf(value) === index
  })
}