let ctx = document.getElementById('myChart').getContext('2d');


function createChart(stockLabels = [], stockPrice = [], stock = [], priceArray = []) {

  let stocksChart = new Chart(ctx, {

    type: 'line',
    data: {
      labels: stockLabels,
      datasets: [{
          label: `${stock[0][0]}/R$`,
          data: priceArray[0]
        },
        {
          label: `${stock[1][0]}/R$`,
          data: priceArray[1]
        }, {
          label: `${stock[2][0]}/R$`,
          data: priceArray[2]
        }, {
          label: `${stock[3][0]}/R$`,
          data: priceArray[3]
        }, {
          label: `${stock[4][0]}/R$`,
          data: priceArray[4]
        }
      ]
    },
    options: {}
  });

}

//createChart();