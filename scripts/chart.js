let ctx = document.getElementById('myChart').getContext('2d');

function createChart(stockLabels = [], stockPrice = [], stockCode) {
  let stocksChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: stockLabels,
      datasets: [{
        label: `${stockCode}/R$`,
        data: stockPrice
      }]
    },
    options: {}
  });

}

createChart();