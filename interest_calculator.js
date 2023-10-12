const $ = (id) => {
  return document.getElementById(id);
};

const createElement = (tag) => {
  return document.createElement(tag);
};

const calculateInterest = () => {
  const loanAmount = parseFloat($("loanAmount").value);
  const interestRate = parseFloat($("interestRate").value);
  if (isValidNumber(loanAmount, interestRate)) {
    clearErrors();
    const interest = getInterest(loanAmount, interestRate);
    if (isFirstRowEmpty()) {
      $("amountResult").textContent = loanAmount.toFixed(2);
      $("rateResult").textContent = interestRate.toFixed(3);
      $("interestResult").textContent = interest;
    } else {
      addNewRow(loanAmount, interestRate, interest);
    }
  }
};

const isValidNumber = (loanAmount, interestRate) => {
  if (isNaN(loanAmount) || isNaN(interestRate)) {
    $("error").textContent = "Please enter valid numeric values.";
    return false;
  }
  return true;
};

const getInterest = (loanAmount, interestRate) => {
  return (loanAmount * (interestRate / 100)).toFixed(2);
};

const clearErrors = () => {
  $("error").textContent = "";
};

const isFirstRowEmpty = () => {
  return $("amountResult").textContent === '';
};

const addNewRow = (loanAmount, interestRate, interest) => {
  const table = $('table');
  const newRow = createElement("tr");
  const amountResultTd = createElement("td");
  const rateResultTd = createElement("td");
  const interestResultTd = createElement("td");
  amountResultTd.textContent = loanAmount.toFixed(2);
  rateResultTd.textContent = interestRate.toFixed(3);
  interestResultTd.textContent = interest;
  newRow.appendChild(amountResultTd);
  newRow.appendChild(rateResultTd);
  newRow.appendChild(interestResultTd);
  table.appendChild(newRow)
};

window.addEventListener('DOMContentLoaded', () => {

  $('calculate').addEventListener('click', calculateInterest);
});