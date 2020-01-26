export default class PriceButtonView {
    constructor() {
      this.button = null;
      this.prices = null;
      this.el = this.renderInitialState();
    }
  
    getElement() {
      return this.el;
    }
  
    renderInitialState() {
      const element = document.createElement("div");
      element.className = "PriceButtonContainer";
  
      element.innerHTML = `
        <button class="PriceButton" disabled>...</button>
        <div class="PriceButtonPrices"></div>
      `;
  
      this.button = element.querySelector(".PriceButton");
      this.prices = element.querySelector(".PriceButtonPrices");
      this.button.classList.add('button')
  
      return element;
    }
  
    renderLoadedState(props) {
      const { bestPrice = 0, onPriceButtonClick } = props;
      this.button.removeAttribute("disabled");
      this.button.innerHTML = `<strong>£${bestPrice}.00</strong>`;
  
      this.button.addEventListener("click", () => onPriceButtonClick());
      this.button.classList.add('button')
    }

    renderAdditionalPricesState(props) {
      const { additionalPrices = [] } = props;
      const bulletedPrices = '<ul><li>' + `${additionalPrices.map(x => '£' + x).join('</li><li>')}` + '</li></ul>';
      this.prices.innerHTML = `${bulletedPrices}`
      this.prices.classList.add('priceList')
    }
  }
  