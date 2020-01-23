const getPriceData = async () => {
    const response = await fetch('https://5e17a1c9505bb50014720dc6.mockapi.io/pricetestapi/prices')
    
    if (response.status === 200) {
        const data = await response.json()
        return data
    } else {
        throw new Error('Unable to get price data from API')
    }
}

const priceInfo = await getPriceData()