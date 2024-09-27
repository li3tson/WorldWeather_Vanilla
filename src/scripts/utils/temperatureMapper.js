function temperatureMapper(temperature) {
  if ( temperature >= -20 && temperature <= 14 ) {
    return '--gradient-veryCold'
  } else if ( temperature >= 15 && temperature <= 18 )  {
    return '--gradient-cold'
  } else if ( temperature >= 20 && temperature <= 34)  {
    return '--gradient-hot'
  } else if ( temperature >= 35 && temperature <= 40) {
    return '--gradient-veryHot'
  } else {
    return '--gradient-hot'
  }
}

export { temperatureMapper }
