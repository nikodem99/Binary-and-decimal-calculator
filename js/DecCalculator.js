import Calculator from "./Calculator";

class DecCalculator extends Calculator {
  constructor(selector) {
    super(selector);
    this.$tooltip = this.$calculatorDOMElement.querySelector(".popover");
  }

  changeNumber(parentElement) {
    const input = parentElement.firstElementChild;
    input.contentEditable = true;
    input.focus();
    this.showTooltip("Naciśnij aby dodać wartości");
  }

  showTooltip(text) {
    this.$tooltip.children[1].innerText = text;
    this.$tooltip.classList.add("show");
  }

  hideTooltip() {
    this.$tooltip.classList.remove("show");
  }

  add(numbersX, numbersY) {
    const sumNumbers = [];
    for (let i = numbersX.length - 1; i >= 0; i--) {
      const sumRows = numbersX[i] + numbersY[i];
      const sum = typeof sumNumbers[i] === "undefined" ? sumRows : sumRows + sumNumbers[i];

      if (sum > 9) {
        sumNumbers[i] = sum % 10;
        sumNumbers[i - 1] = 1;
      } else {
        sumNumbers[i] = sum;
      }
    }

    return sumNumbers;
  }

  checkNumber() {
    super.checkNumber();
    return [...this.firstNumberArray, ...this.secondNumberArray].every((el) => {
      console.log(el, typeof el === "number" && el < 10 && el >= 0);
      return typeof el === "number" && el < 10 && el >= 0;
    });
  }

  initEvents() {
    super.initEvents();

    this.$calculatorDOMElement.querySelector(".operator-bar").addEventListener("click", () => {
      this.hideTooltip();

      const checkNumbers = this.checkNumber();
      if (checkNumbers) {
        this.updateResult();
      } else {
        this.showTooltip("Wartości muszą być cyframi (0-9)");
      }
    });
  }
}

export default DecCalculator;
