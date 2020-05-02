const stockCode = document.querySelector("#stockCode");
const btnSubmit = document.querySelector("#btn");
const showSixMonths = document.querySelector("#sixMonths");

//Global Variables
const predefinedInvest = 1000; //number of money invest in each stock
const num_stocks = 2; //number of stocks displayed
const randomStockArray = []; //Create an array of random stocks
const apiKeysArray = ['WTPIMEDHPNGBKRF5', '1147VI6WERT7B62C', 'TUH5W35OW6WPADXO', 'EZBDRRFVQNR2B6PM', 'Q51Q6EX0QC4L56YY'];

//num_stocks = 5
for (let i = 0; i < num_stocks; i++) {
  randomStockArray[i] = stockObj[randomStockNum(0, 417)];
};
//LOG all arrays
randomStockArray.forEach(e => {
  console.log(e);
});

function fillMultipleData() {

}
/*randomStockArray.forEach(stockCodeName => {
  requestB3(stockCodeName, apiKeysArray[2]);
});*/

for (let i = 0; i < num_stocks; i++) {
  requestB3(randomStockArray[i], apiKeysArray[i]); // for each stock user different apiKey
}


//criar 5 fetchs com cada um usando uma Key diferente
async function requestB3(randomStock, apiKey) {
  //console.log(randomStock); DATA
  const stockCode = randomStock[0]; //Get ONLY the stock CODE
  const stocksLabelDate = [];
  const stockPrice = [];

  //Request the Alpha Vantege API
  const res = await fetch(
    `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=${stockCode}.SA&outputsize=compact&apikey=${apiKey}`
  );
  const data = await res.json();
  console.log(data); //LOG the request

  let arrayKeys = Object.keys(data["Monthly Adjusted Time Series"]);
  arrayKeys.reverse(); //Reverse the array to show in cronological order

  maxNumArray = arrayKeys.length; //get the number of months of the stocks in B3
  let lastSixMonths = arrayKeys.slice(maxNumArray - 6); //selelct last 6 months

  //Insert Date to the Chart
  lastSixMonths.map((e) => {
    stocksLabelDate.push(e);
  });

  createChart(stocksLabelDate, '', stockCode);

  //Insert Price to the Chart
  lastSixMonths.map((e) => {
    stockPrice.push(data["Monthly Adjusted Time Series"][`${e}`]["1. open"]);
  });

  //createChart(stocksLabelDate, stockPrice, stockCode); //Exib new Chart filled with the request data
  //calcSixMonths(lastSixMonths, stockPrice, randomStock);
}

// -----> FUNCTIONS <-----

// generate a random stock
function randomStockNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//calculate the Result of Six Months of Investment
function calcSixMonths(lastSixMonths, stockPrice, stock) {
  let initialDate = lastSixMonths.slice(0, 1); //selelct ONLY the first month

  let initialInvest = predefinedInvest;
  let stocksBuyedInitialInvest = initialInvest / stockPrice[0];
  let resultInvest = stocksBuyedInitialInvest * stockPrice[5];
  let difInvest = resultInvest - initialInvest;

  let changeSpan = '<span>';
  if (difInvest >= 0) {
    changeSpan = '<span class="positive">';
  } else {
    changeSpan = '<span class="negative">';
  }

  //show result in HTML
  showSixMonths.innerHTML =
    `
    6 Meses atrás(${initialDate})R$1000,00 em
    <div class="tooltip">${stock[0]}<span class="tooltiptext">${stock[1].slice(3)}<span></div>,
     teria rendido = R$${resultInvest.toFixed(2)}
     (${changeSpan}R$${difInvest.toFixed(2)}</span>)
     `;

}


// -----> EVENT LISTNER <-----
btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();

  //Search typed Array in Const.js to return the Object
  stockObj.map(obj => {
    if (obj[0] === (stockCode.value).toUpperCase()) {
      requestB3(obj);
    }
  })

});

//stockObj[randomStockNum(0, 417)][0]); <---- Generate a random stock CODE

// -----> START CODE <-----


//let randomStock = stockObj[randomStockNum(0, 417)];
//console.log("AÇAO PASSADA POR PARAMETRO:", randomStock[1]);

//requestB3(randomStock);
//requestB3(randomStockArray[0], apiKeysArray[2]);