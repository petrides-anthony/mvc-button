import { getCheapestPrice, getFivePrices } from './request'
import PriceButtonView from "./PriceButtonView";

export default class PriceButtonController {
  constructor() {
      this.priceButtonView = new PriceButtonView()
      this.mountedOn = null;
    }
  
    mount(element) {
      this.mountedOn = element;
      this.mountedOn.appendChild(this.priceButtonView.getElement());
  
      setTimeout(async() => {
        this.priceButtonView.renderLoadedState({
          bestPrice: await getCheapestPrice(),
          onPriceButtonClick: () => this.onPriceButtonClick()
        });
      }, 1000);
    }
  
    async onPriceButtonClick() {
      this.priceButtonView.renderAdditionalPricesState({
        additionalPrices: await getFivePrices()
      });
    }
}