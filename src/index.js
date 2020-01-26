import PriceButtonController from "./PriceButtonController";
import PriceButtonView from "./PriceButtonView";

// import "./public/styles/styles.css";

/*
API data https://5e17a1c9505bb50014720dc6.mockapi.io/pricetestapi/prices

- mount the button in screen with initial state
- fetch data and calculate the best price
- render the best price and make the button clickable
- onclick: show other prices options below
*/

new PriceButtonController(new PriceButtonView()).mount(
  document.getElementById("app")
);
