const stockCode = document.querySelector("#stockCode");
const btnSubmit = document.querySelector("#btn");

//criar 5 fetchs com cada um usando uma Key diferente
async function requestB3(stockCode) {
  const stockLabels = [];
  const stockPrice = [];

  const res = await fetch(
    `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=${stockCode}.SA&outputsize=compact&apikey=WTPIMEDHPNGBKRF5`
  );
  const data = await res.json();

  //console.log('Resultado da requisição =', data);

  let arrayKeys = Object.keys(data["Monthly Adjusted Time Series"]);
  arrayKeys.reverse(); //Reverse the array to show in cronological order

  maxNumArray = arrayKeys.length; //get the number of months of the stocks in B3
  const lastSixMonths = arrayKeys.slice(maxNumArray - 6); //selelct last 6 months

  //Insert Date to the Chart
  lastSixMonths.map(e => {
    stockLabels.push(e);
  });

  //Insert Price to the Chart
  lastSixMonths.map(e => {
    stockPrice.push(data["Monthly Adjusted Time Series"][`${e}`]["1. open"]);
  });

  createChart(stockLabels, stockPrice); //Create new chart with the request data
}

// generate a random stock
function randomStockNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Add Event Listner
btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(stockCode.value);
  requestB3(stockCode.value);
});

//stockObj[randomStockNum(0, 417)][0]); <---- Generate a random stock CODE

let randomStock = stockObj[randomStockNum(0, 417)][0];
console.log("AÇAO PASSADA POR PARAMTRO:", randomStock);
const resultado = requestB3(randomStock);