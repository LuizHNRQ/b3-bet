const stockCode = document.querySelector('#stockCode');
const btnSubmit = document.querySelector('#btn');


console.log('test api');

async function requestB3(stockCode) {

  /* const res = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=${stockCode}.SA&outputsize=compact&apikey=WTPIMEDHPNGBKRF5`);*/
  const res = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stockCode}.SA&outputsize=compact&apikey=WTPIMEDHPNGBKRF5`);
  const data = await res.json();

  console.log(data);

  console.log('ate aqui');

}



//Add Event Listner

btnSubmit.addEventListener('click', e => {
  e.preventDefault();
  console.log(stockCode.value);
  requestB3(stockCode.value);

});

console.log(stocksList);

stocksList.forEach(e => console.log(e));

console.log(stockObj);
stockObj.forEach(e => console.log(e));

//^bvsp = BOVESPA