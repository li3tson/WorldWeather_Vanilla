import { renderPageItems } from './main.js'

const nextButtonElement           = document.getElementById('pagination__btn--next')
const prevButtonElement           = document.getElementById('pagination__btn--prev')
const paginationBtnWrapperElement = document.getElementById('pagination__btnPageList')

const state = {
  perPage: 8,
  currentPage: 1,
  totalVisibleButtons: 3
}

const paginationControls = {
  next() {
    if (state.currentPage < state.totalPages) state.currentPage++
  },

  prev() {
    if (state.currentPage > 1) state.currentPage--
  },

  goToPage(page) {
    state.currentPage = Number(page)

    if (page < 1) page = 1
    if (page > state.totalPages) state.currentPage = state.totalPages
  },

  createListeners() {
    nextButtonElement.addEventListener('click', () => {
      paginationControls.next()
      update()
    })

    prevButtonElement.addEventListener('click', () => {
      paginationControls.prev()
      update()
    })
  }
}

const renderPaginationButtons = {
  create(number) {
    const li = document.createElement('li')
    li.classList.add('btnPageList__item')

    const button = document.createElement('button')
    button.classList.add('item__btn')
    button.classList.add('pagination__btn')

    button.innerHTML = number
    button.title     = `Page ${number}`

    if (state.currentPage === number) button.setAttribute('id', 'activated')

    button.addEventListener('click', (e) => {
      const page = e.target.innerText

      paginationControls.goToPage(page)
      update()
    })

    li.appendChild(button)

    paginationBtnWrapperElement.appendChild(li)
  },

  update() {
    paginationBtnWrapperElement.innerHTML = ''

    const { maxLeft, maxRight } = renderPaginationButtons.calculateTotalVisibleButtons()

    for (let i = maxLeft; i <= maxRight; i++) {
      renderPaginationButtons.create(i)
    }
  },

  calculateTotalVisibleButtons() {
    const { totalVisibleButtons } = state
    let maxLeft   = (state.currentPage - Math.floor(totalVisibleButtons / 2))
    let maxRight  = (state.currentPage + Math.floor(totalVisibleButtons / 2))

    if (maxLeft < 1) {
      maxLeft   = 1
      maxRight  = totalVisibleButtons
    }

    if (maxRight > state.totalPages) {
      maxLeft   = state.totalPages - ( totalVisibleButtons - 1 )
      maxRight  = state.totalPages

      if (maxLeft < 1) maxLeft = 1
    }

    return { maxLeft, maxRight }
  }
}

function update() {
  renderPageItems.update()
  renderPaginationButtons.update()
}

export { paginationControls, state, update }
