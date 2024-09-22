function iconMapper(description) {
  const pathOfIcons = './src/assets/icons'

  switch(description) {
    case 'clear sky':
      return `${pathOfIcons}/clear_sky.png`
    // Clouds
    case 'few clouds':
    case 'few clouds: 11-25%':
      return `${pathOfIcons}/few_cloud.png`
    case 'broken clouds':
    case 'broken clouds: 51-84%':
      return `${pathOfIcons}/broken_clouds.png`
    case 'scattered clouds':
    case 'scattered clouds: 25-50%':
      return `${pathOfIcons}/scattered_clouds.png`
    case 'overcast clouds':
    case 'overcast clouds: 85-100%':
      return `${pathOfIcons}/overcast_clouds.png`
    // Snow
    case 'snow':
    case 'sleet':
    case 'light snow':
    case 'heavy snow':
    case 'shower snow':
    case 'shower sleet':
    case 'rain and snow':
    case 'heavy shower snow':
    case 'light shower snow':
    case 'light shower sleet':
    case 'light rain and snow':
      return `${pathOfIcons}/snow.png`
    // Drizzle
    case 'drizzle':
    case 'drizzle rain':
    case 'shower drizzle':
    case 'shower rain and drizzle':
    case 'light intensity drizzle':
    case 'heavy intensity drizzle':
    case 'light intensity drizzle rain':
    case 'heavy intensity drizzle rain':
    case 'heavy shower rain and drizzle':
      return `${pathOfIcons}/drizzle.png`
    // Rain
    case 'rain':
    case 'squalls':
    case 'light rain':
    case 'shower rain':
    case 'extreme rain':
    case 'moderate rain':
    case 'freezing rain ':
    case 'very heavy rain':
    case 'ragged shower rain':
    case 'heavy intensity rain':
    case 'light intensity shower rain':
    case 'heavy intensity shower rain':
      return `${pathOfIcons}/rain.png`
    // Thunderstorm
    case 'thunderstorm':
    case 'heavy thunderstorm':
    case 'ragged thunderstorm':
    case 'thunderstorm with rain':
    case 'thunderstorm with drizzle':
    case 'thunderstorm with light rain':
    case 'thunderstorm with heavy rain':
    case 'thunderstorm with light drizzle':
    case 'thunderstorm with heavy drizzle':
      return `${pathOfIcons}/thunderstorm.png`
    // Atmosphere
    case 'mist':
      return `${pathOfIcons}/mist.png`
    case 'fog':
      return `${pathOfIcons}/fog.png`
    case 'tornado':
      return `${pathOfIcons}/tornado.png`
    case 'smoke':
      return `${pathOfIcons}/smoke.png`
    case 'volcanic ash':
      return `${pathOfIcons}/volcano.png`
    case 'haze':
    case 'dust':
    case 'sand':
    case 'sand/dust whirls':
      return `${pathOfIcons}/dust.png`
    default:
      return `${pathOfIcons}/sun.png`
  }
}

export { iconMapper }
