let ctx = document.getElementById('myChart').getContext('2d');


function createChart(stockLabels = [], stockPrice = [], stockCode, priceArray = []) {
  let stocksChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: stockLabels,
      datasets: [{
          label: `${stockCode}/R$`,
          data: priceArray[0]
        },
        {
          label: 'teste',
          data: priceArray[1]
        }
      ]
    },
    options: {}
  });

}

createChart();