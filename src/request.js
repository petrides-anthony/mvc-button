const fetch = require("node-fetch");
const priceApi = "https://5e17a1c9505bb50014720dc6.mockapi.io/pricetestapi/prices"

const fetchPrices = () => {
    fetch(priceApi)
      .then(response => {
        if (response.status !== 200) {
          throw new Error("Error");
        }
  
        return response.json();
      })
      .then(data => console.log("useFetch", data))
      .catch(e => console.log(e));
  };

  fetchPrices();

