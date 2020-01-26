const fetch = require("node-fetch");
const priceApi = "https://5e17a1c9505bb50014720dc6.mockapi.io/pricetestapi/prices"

  const getPriceData = async () => {
  const response = await fetch(priceApi)
  
    if (response.status === 200) {
        const data = await response.json()
        return data
    } else {
        throw new Error('Unable to get prices')
    }
  }

  const getCheapestPrice =  async () => {
    const priceList = await getPriceData()
    const pricesOnly = priceList.map(({ price }) => price)
    const cheapestPrice = Math.min(...pricesOnly)
    return cheapestPrice
}

export { getCheapestPrice }