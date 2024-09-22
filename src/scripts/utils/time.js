function currentDate() {
  const date = new Date()

  const dateFormatted = new Intl.DateTimeFormat('en-GB', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  }).format(date)

  return { commonFormat: dateFormatted, isoFormat: date.toISOString() }
}

export { currentDate }
