import { getCheapestPrice } from './request'

export default class PriceButtonController {
    constructor(priceButtonView) {
      this.priceButtonView = null;
      this.mountedOn = null;
      this.priceButtonView = priceButtonView;
    }
  
    mount(element) {
      this.mountedOn = element;
      this.mountedOn.appendChild(this.priceButtonView.getElement());
  
      setTimeout(async() => {
        this.priceButtonView.renderLoadedState({
          bestPrice: await getCheapestPrice(),
          onPriceButtonClick: () => this.onPriceButtonClick()
        });
      }, 5000);
    }
  
    onPriceButtonClick() {
      this.priceButtonView.renderAdditionalPricesState({
        additionalPrices: [2, 5, 7]
      });
    }
  }
  