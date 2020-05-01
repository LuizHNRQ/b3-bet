const stockCode = document.querySelector("#stockCode");
const btnSubmit = document.querySelector("#btn");
const showSixMonths = document.querySelector("#sixMonths");

//Global Variables
const predefinedInvest = 1000;
//let lastSixMonths; //Array of the Last six month of data


//criar 5 fetchs com cada um usando uma Key diferente
async function requestB3(stockCode) {
  const stocksLabelDate = [];
  const stockPrice = [];

  const res = await fetch(
    `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=${stockCode}.SA&outputsize=compact&apikey=WTPIMEDHPNGBKRF5`
  );
  const data = await res.json();
  console.log(data);

  //console.log('Resultado da requisição =', data);

  let arrayKeys = Object.keys(data["Monthly Adjusted Time Series"]);
  arrayKeys.reverse(); //Reverse the array to show in cronological order

  maxNumArray = arrayKeys.length; //get the number of months of the stocks in B3
  let lastSixMonths = arrayKeys.slice(maxNumArray - 6); //selelct last 6 months

  //Insert Date to the Chart
  lastSixMonths.map((e) => {
    stocksLabelDate.push(e);
  });

  //Insert Price to the Chart
  lastSixMonths.map((e) => {
    stockPrice.push(data["Monthly Adjusted Time Series"][`${e}`]["1. open"]);
  });

  createChart(stocksLabelDate, stockPrice); //Exib new Chart filled with the request data
  calcSixMonths(lastSixMonths, stockPrice);
}

// -----> FUNCTIONS <-----

// generate a random stock
function randomStockNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//calculate the Result of Six Months of Investment
function calcSixMonths(lastSixMonths, stockPrice) {
  let initialDate = lastSixMonths.slice(0, 1); //selelct ONLY the first month

  let initialInvest = predefinedInvest;
  let stocksBuyedInitialInvest = initialInvest / stockPrice[0];
  let resultInvest = stocksBuyedInitialInvest * stockPrice[5];
  let difInvest = resultInvest - initialInvest;

  showSixMonths.innerHTML =
    `6 Meses atrás(${initialDate}) em ${randomStock},
     teria rendido = ${resultInvest}(${difInvest})`;

  // DEBUG
  /*
  console.log(stocksBuyedInitialInvest);
  console.log(stockPrice[5]);
  console.log(stockPrice[0]);
  */
}


// -----> EVENT LISTNER <-----
btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(stockCode.value);
  requestB3(stockCode.value);
});

//stockObj[randomStockNum(0, 417)][0]); <---- Generate a random stock CODE

let randomStock = stockObj[randomStockNum(0, 417)][0];
console.log("AÇAO PASSADA POR PARAMTRO:", randomStock);
const resultado = requestB3(randomStock);