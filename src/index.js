import PriceButtonController from "./PriceButtonController";
import PriceButtonView from "./PriceButtonView";

new PriceButtonController(new PriceButtonView()).mount(
  document.getElementById("app")
);
