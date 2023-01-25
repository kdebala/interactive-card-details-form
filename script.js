const button = document.querySelector(".button");
const continueButton = document.querySelector(".continue");
const cardholderName = document.querySelector(".cardholderNameInput");
const cardholderNumber = document.querySelector(".cardholderNumberInput");
const month = document.querySelector(".month");
const year = document.querySelector(".year");
const cvc = document.querySelector(".cvc");
const backNumber = document.querySelector(".backNumber");
const cardNumber = document.querySelector(".frontNumber");
const cardName = document.querySelector(".name");
const monthCard = document.querySelector(".mm");
const yearCard = document.querySelector(".yy");

const inputs = document.querySelectorAll("input");

const form = document.querySelector(".form");
const thankyou = document.querySelector(".center");
const numberError = document.querySelector(".numberError");
const monthYearError = document.querySelector(".monthYearError");
const cvcError = document.querySelector(".cvcError");

button.addEventListener("click", function () {
  if (
    cardNameFun() === true &&
    cardNumberFun() === true &&
    monthFun() === true &&
    yearFun() === true &&
    cvcFun() === true
  ) {
    cardNameFun();
    cardNumberFun();
    monthFun();
    yearFun();
    cvcFun();
    form.style.display = "none";
    thankyou.style.display = "block";
  } else {
    cardNameFun();
    cardNumberFun();
    monthFun();
    yearFun();
    cvcFun();
  }
});

continueButton.addEventListener("click", function () {
  form.style.display = "flex";
  thankyou.style.display = "none";
  cardholderName.value = "";
  cardholderNumber.value = "";
  month.value = "";
  year.value = "";
  cvc.value = "";
  cardName.innerHTML = "Jane Appleseed";
  cardNumber.innerHTML = "0000 0000 0000 0000";
  monthCard.innerHTML = "0";
  yearCard.innerHTML = "00";
  backNumber.innerHTML = "000";
  numberError.style.display = "none";
});

let cardNameFun = function () {
  if (inputs[0].value.match(/^[A-Za-z]+[ ]+[A-Za-z]+$/)) {
    cardName.innerHTML = cardholderName.value;
    inputs[0].style.borderColor = "hsl(270,3%,87%";

    return true;
  } else {
    cardName.innerHTML;
    inputs[0].style.borderColor = "red";
    return false;
  }
};

let cardNumberFun = function () {
  if (inputs[1].value.match(/^\d+/) && cardholderNumber.value.length === 16) {
    cardNumber.innerHTML = cardholderNumber.value.match(/.{1,4}/g).join(" ");
    inputs[1].style.borderColor = "hsl(270,3%,87%";
    numberError.style.display = "none";

    return true;
  } else {
    cardNumber.innerHTML;
    inputs[1].style.borderColor = "red";
    numberError.style.display = "flex";
    return false;
  }
};

let monthFun = function () {
  if (inputs[2].value.match(/^\d+/) && month.value.length === 2) {
    monthCard.innerHTML = month.value;
    inputs[2].style.borderColor = "hsl(270,3%,87%";
    monthYearError.style.display = "none";
    return true;
  } else {
    month.innerHTML;
    inputs[2].style.borderColor = "red";
    monthYearError.style.display = "block";
    return false;
  }
};

let yearFun = function () {
  if (inputs[3].value.match(/^\d+/) && year.value.length === 2) {
    yearCard.innerHTML = year.value;
    inputs[3].style.borderColor = "hsl(270,3%,87%";
    monthYearError.style.display = "none";
    return true;
  } else {
    year.innerHTML;
    inputs[3].style.borderColor = "red";
    monthYearError.style.display = "block";
    return false;
  }
};

let cvcFun = function () {
  if (inputs[4].value.match(/^\d+/) && cvc.value.length === 3) {
    backNumber.innerHTML = cvc.value;
    inputs[4].style.borderColor = "hsl(270,3%,87%";
    cvcError.style.display = "none";
    return true;
  } else {
    backNumber.innerHTML;
    inputs[4].style.borderColor = "red";
    cvcError.style.display = "block";
    return false;
  }
};
