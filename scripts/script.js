const stockCode = document.querySelector("#stockCode");
const btnSubmit = document.querySelector("#btn");

console.log("test api");


//criar 5 fetchs com cada um usando uma Key diferente
async function requestB3(stockCode) {
  const res = await fetch(
    /*`https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=${stockCode}.SA&outputsize=compact&apikey=WTPIMEDHPNGBKRF5`
  );
      const res = await fetch(*/
    `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stockCode}.SA&outputsize=compact&apikey=WTPIMEDHPNGBKRF5`);
  const data = await res.json();

  console.log('Resultado da requisição =', data);

  console.log(typeof (data));

  let arrayKeys = Object.keys(data["Time Series (Daily)"]);
  console.log('array das keys = ', arrayKeys);

  //stockLabels.push(Object.keys(data["Time Series (Daily)"]));

  arrayKeys.map(e => {
    stockLabels.push(e);
  })


  //console.log('data aqui =', data["Time Series (Daily)"]["2019-11-28"]);
  //stockLabels.push(data["Time Series (Daily)"]);
  //stockLabels.push('oi', 'eae', 'deu', 'certo', 'aqui');

  console.log('Abertura=', data["Time Series (Daily)"]["2019-12-23"]["1. open"]);

  console.log("ate aqui");
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
/*
console.log(stocksList);

stocksList.forEach(e => console.log(e));
*/
//console.log(stockObj);
//stockObj.forEach(e => console.log(e[0]));
/*
console.log(randomStockNum(0, 417));
console.log(randomStockNum(0, 417));
console.log(randomStockNum(0, 417));
console.log(randomStockNum(0, 417));
console.log(randomStockNum(0, 417));/*

console.log(stockObj[randomStockNum(0, 417)][0]);
console.log(stockObj[randomStockNum(0, 417)][0]);
console.log(stockObj[randomStockNum(0, 417)][0]);
console.log(stockObj[randomStockNum(0, 417)][0]);
console.log(stockObj[randomStockNum(0, 417)][0]);*/

let randomStock = stockObj[randomStockNum(0, 417)][0];
console.log("AÇAO PASSADA POR PARAMTRO:", randomStock);
const resultado = requestB3(randomStock);
//stockLabels.push()
//^bvsp = BOVESPA