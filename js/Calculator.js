/* abstract */
class Calculator {
  constructor(selectorName) {
    this.name = selectorName;
    this.$calculatorDOMElement = document.querySelector(selectorName);

    this.firstNumberArray = [];
    this.secondNumberArray = [];
    this.resultNumberArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.initEvents();
  }

  /* Abstract method add numbers in two array
   *  @param {array} numberX First number
   *  @param {array} numberY Second number
   *  @return {array}
   */
  add(numberX, numberY) {
    console.error(
      "Powinieneś zaimplementować tą metodę w klasie dziedziczącej."
    );
    return [0, 0, 0, 0, 0, 0, 0, 0];
  }

  /* Abstract method changing number
   *  @param {jQuery element} root Parent element
   */
  changeNumber(root) {
    console.error(
      "Powinieneś zaimplementować tą metodę w klasie dziedziczącej."
    );
  }

  /* Method changing Result
   */
  updateResult() {
    const results = this.$calculatorDOMElement.querySelectorAll(
      ".result-bit span"
    );
    this.resultNumberArray.reverse().forEach((number, i) => {
      results[i].innerText = number;
    });
  }

  /* Get the name of calculator selector
   *  @return {string}
   */
  getName() {
    return `Hello I am ${this.name}`;
  }

  /* Check what number is set in both numbers and add
   *  @return {string}
   */
  checkNumber() {
    let root = this.$calculatorDOMElement;
    let $firstNumber = root.querySelectorAll(".group-number label:first-child");
    let $secondNumber = root.querySelectorAll(
      ".group-number label:nth-child(2)"
    );
    let $resultNumber = root.querySelectorAll(".group-number .result-bit");

    for (let i = $firstNumber.length - 1, j = 0; i >= 0; i--, j++) {
      this.firstNumberArray[i] = parseInt(
        $firstNumber[j].firstElementChild.innerText
      );
      this.secondNumberArray[i] = parseInt(
        $secondNumber[j].firstElementChild.innerText
      );
      this.resultNumberArray[i] = parseInt(
        $resultNumber[j].firstElementChild.innerText
      );
    }

    console.log(this.firstNumberArray, this.secondNumberArray);
    this.resultNumberArray = this.add(
      this.firstNumberArray,
      this.secondNumberArray
    );
  }

  /* Set event click on number
   */
  initEvents() {
    this.$calculatorDOMElement.addEventListener("click", event => {
      if (event.target.parentElement.classList.contains("display-number")) {
        const parentLabel = event.target.parentElement;
        this.changeNumber(parentLabel);
      }
    });
  }
}

export default Calculator;
