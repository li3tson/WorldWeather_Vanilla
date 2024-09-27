import { renderCard, renderDateCard } from './card.js'
import { countriesAPI, weatherAPI } from './services.js'
import { paginationControls, state, update } from './pagination.js'

const cardWrapperElement = document.getElementById('content__list')
const continentSelectorElement = document.getElementById('continent')

const continents = {
  africa: [
    'Algeria', 'Angola', 'Benin', 'Botswana', 'Burkina Faso', 'Burundi', 'Cameroon',
    'Cape Verde', 'Central African Republic', 'Chad', 'Comoros', 'Djibouti', 'DR Congo',
    'Egypt', 'Equatorial Guinea', 'Eritrea', 'Eswatini', 'Ethiopia', 'Gabon', 'Gambia',
    'Ghana', 'Guinea', 'Guinea-Bissau', 'Ivory Coast', 'Kenya', 'Lesotho', 'Liberia',
    'Libya', 'Madagascar', 'Malawi', 'Mali', 'Mauritania', 'Mauritius', 'Morocco',
    'Mozambique', 'Namibia', 'Niger', 'Nigeria', 'Rwanda', 'São Tomé and Príncipe',
    'Senegal', 'Seychelles', 'Sierra Leone', 'Somalia', 'South Africa', 'South Sudan',
    'Sudan', 'Tanzania', 'Togo', 'Tunisia', 'Uganda', 'Zambia', 'Zimbabwe'
  ],
  asia: ['China', 'Thailand', 'Japan', 'Indonesia', 'India'],
  europe: [
    'France', 'Spain', 'Italy', 'United Kingdom', 'Germany', 'Turkey', 'Russia',
    'Austria', 'Greece', 'Croatia', 'Portugal', 'Israel', 'Switzerland'
  ],
  northAmerica: ['United States', 'Mexico', 'Canada'],
  southAmerica: ['Brazil', 'Peru'],
  oceania: ['Australia', 'New Zealand'],
}

const countriesApiData   = await countriesAPI()
let countries            = countriesApiData.filter(item => continents.africa.includes(item.name.common))

state.totalPages = Math.ceil(countries.length / state.perPage)

const renderPageItems = {
  async create(country) {
    let capital = country.capital[0]
    let latlng  = country.capitalInfo.latlng

    let weatherApiData = await weatherAPI(latlng)

    renderDateCard(cardWrapperElement)

    if (weatherApiData.cod !== '404') {
      let temperature         = Math.ceil(weatherApiData.main.temp)
      let weatherDescription  = weatherApiData.weather[0].description

      renderCard(capital, temperature, weatherDescription)
    }
  },

  update() {
    cardWrapperElement.innerHTML = ''

    let page              = state.currentPage - 1
    let start             = page * state.perPage
    let end               = start + state.perPage
    const paginatedItems  = countries.slice(start, end)

    paginatedItems.forEach(renderPageItems.create)
  }
}

function init() {
  update()
  paginationControls.createListeners()
}

continentSelectorElement.addEventListener('change', () => {
  const currentContinent = continentSelectorElement.value

  countries = countriesApiData.filter(item => continents[currentContinent].includes(item.name.common))
  state.totalPages = Math.ceil(countries.length / state.perPage)

  init()
})

init()

export { renderPageItems }

// nstl s<0-0>s
console.log('To Infinity and Beyond 💫')
