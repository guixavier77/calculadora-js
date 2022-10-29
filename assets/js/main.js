function Calculator() {
  this.display = document.querySelector('.display');
  this.start = () => {
    this.captureClicks();
    this.captureEnter();
  };
  this.captureEnter = () => {
    document.addEventListener('keyup', (e) => {
      if (e.keyCode !== 13) return;
      this.runOperation();
    });
  };
  this.captureClicks = () => {
    document.addEventListener('click', (event) => {
      const el = event.target;
      if (el.classList.contains('btn-num')) this.addNumberDisplay(el);
      if (el.classList.contains('btn-clear')) this.clearDisplay();
      if (el.classList.contains('btn-del')) this.deleteLastNumber();
      if (el.classList.contains('btn-eq')) this.runOperation();
    });
  };

  this.addNumberDisplay = (el) => {
    this.display.value += el.innerText;
    this.display.focus();
  };
  this.clearDisplay = () => (this.display.value = '');
  this.deleteLastNumber = () =>
    (this.display.value = this.display.value.slice(0, -1));

  this.runOperation = () => {
    try {
      const conta = eval(this.display.value);
      if (!conta) {
        alert('Conta invalida');
        return;
      }
      this.display.value = conta;
    } catch (e) {
      alert('Conta invalida');
      return;
    }
  };
}

const calculator = new Calculator();
calculator.start();
