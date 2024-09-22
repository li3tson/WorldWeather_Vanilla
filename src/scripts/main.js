import { renderCard, renderDateCard } from './card.js'
import { countriesAPI, weatherAPI } from './services.js'
import { paginationControls, state, update } from './pagination.js'

const cardWrapperElement = document.getElementById('content__list')

const validCountriesList = [
  'France', 'Spain', 'United States', 'China', 'Italy', 'Mexico', 'United Kingdom',
  'Germany', 'Thailand', 'Turkey', 'Russia', 'Japan', 'Austria', 'Greece', 'Indonesia',
  'Croatia', 'Portugal', 'Israel', 'South Africa', 'Angola', 'Canada', 'Switzerland',
  'Brazil', 'India'
]

const countriesApiData   = await countriesAPI()
const countryData        = countriesApiData.filter(item => validCountriesList.includes(item.name.common))

state.totalPages = Math.ceil(countryData.length / state.perPage)

const renderPageItems = {
  async create(item) {
    let capital = item.capital[0]
    let latlng  = item.capitalInfo.latlng

    let weatherApiData = await weatherAPI(latlng)

    renderDateCard(cardWrapperElement)

    if (weatherApiData.cod !== '404') {
      let temperature         = Math.ceil(weatherApiData.main.temp)
      let weatherDescription  = weatherApiData.weather[0].description

      renderCard(cardWrapperElement, capital, temperature, weatherDescription)
    }
  },

  update() {
    cardWrapperElement.innerHTML = ''

    let page              = state.currentPage - 1
    let start             = page * state.perPage
    let end               = start + state.perPage
    const paginatedItems  = countryData.slice(start, end)

    paginatedItems.forEach(renderPageItems.create)
  }
}

function init() {
  update()
  paginationControls.createListeners()
}

init()

export { renderPageItems }

// nstl s<0-0>s
console.log('To Infinity and Beyond 💫')
