import { getCheapestPrice, getFivePrices } from './request'

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
      }, 1000);
    }
  
    async onPriceButtonClick() {
      this.priceButtonView.renderAdditionalPricesState({
        additionalPrices: await getFivePrices()
      });
    }    
  }