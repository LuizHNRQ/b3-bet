const stockCode = document.querySelector('#stockCode');
const btnSubmit = document.querySelector('#btn');
const showSixMonths = document.querySelector('#sixMonths');
//slider components
const slider = document.querySelector('#myRange');
const outputSlider = document.querySelector('#demo');
//---------------------DOM---------------------------------

//Global Variables
const predefinedInvest = 1000;
let weeks = 24;

//function slider

outputSlider.innerHTML = slider.value;

// slider.oninput = function () {
//   outputSlider.innerHTML = this.value;
//   weeks = this.value;
// };

//criar 5 fetchs com cada um usando uma Key diferente
async function requestB3(randomStock) {
  const stockCode = randomStock[0]; //Get ONLY the stock CODE
  let stocksLabelDate = [];
  let stockPrice = [];

  //*********-1 fazer laço for each e dentro um try catch com todas api's */
  //*********-2  Subir no heroku utilizando variavel de ambiente para esconder key */
  //*********-3 adicionar loading para api || esta demorando muito */

  //Request the Alpha Vantege API
  const res = await fetch(
    `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=${stockCode}.SA&outputsize=compact&apikey=WTPIMEDHPNGBKRF5`
  );
  const data = await res.json();
  console.log(data); //LOG the request

  let arrayKeys = Object.keys(data['Weekly Adjusted Time Series']);
  arrayKeys.reverse(); //Reverse the array to show in cronological order

  slider.oninput = function () {
    outputSlider.innerHTML = this.value;
    weeks = this.value;
    stocksLabelDate = [];
    stockPrice = [];
    displayChartUpdated();
  };

  function displayChartUpdated() {
    maxNumArray = arrayKeys.length; //get the number of months of the stocks in B3
    let lastSixMonths = arrayKeys.slice(maxNumArray - weeks); //selelct last 24 weeks

    //Insert Date to the Chart
    lastSixMonths.map((e) => {
      console.log(e);
      console.log(typeof e);
      const formatDateArray = e.split('-');
      const formatedDate = `${formatDateArray[2]}/${formatDateArray[1]}/${formatDateArray[0]}`;
      stocksLabelDate.push(formatedDate);
    });

    //Insert Price to the Chart
    lastSixMonths.map((e) => {
      stockPrice.push(data['Weekly Adjusted Time Series'][`${e}`]['1. open']);
    });

    createChart(stocksLabelDate, stockPrice, stockCode); //Exib new Chart filled with the request data
    calcSixMonths(lastSixMonths, stockPrice, randomStock);
  }
  displayChartUpdated();
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
  let resultInvest = stocksBuyedInitialInvest * stockPrice[weeks - 1]; // -1 = base 0 array
  let difInvest = resultInvest - initialInvest;

  let changeSpan = '<span>';
  if (difInvest >= 0) {
    changeSpan = '<span class="positive">';
  } else {
    changeSpan = '<span class="negative">';
  }

  //show result in HTML
  showSixMonths.innerHTML = `
    ${weeks} semanas atrás(${initialDate})R$1000,00 em
    <div class="tooltip">${stock[0]}<span class="tooltiptext">${stock[1].slice(
    3
  )}<span></div>,
     teria rendido = R$${resultInvest.toFixed(2)}
     (${changeSpan}R$${difInvest.toFixed(2)}</span>)
     `;
}

// -----> EVENT LISTNER <-----
btnSubmit.addEventListener('click', (e) => {
  e.preventDefault();

  //Search typed Array in Const.js to return the Object
  stockObj.map((obj) => {
    if (obj[0] === stockCode.value.toUpperCase()) {
      requestB3(obj);
    }
  });
});

//stockObj[randomStockNum(0, 417)][0]); <---- Generate a random stock CODE

// -----> START CODE <-----
let randomStock = stockObj[randomStockNum(0, 417)];
console.log('AÇAO PASSADA POR PARAMETRO:', randomStock[1]);
const resultado = requestB3(randomStock);
console.log('Gambi');
