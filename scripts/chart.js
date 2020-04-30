let ctx = document.getElementById('myChart').getContext('2d');

function createChart(stockLabels = [], stockPrice = []) {
  //console.log(stockLabels, stockPrice);
  let stocksChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: stockLabels,
      datasets: [{
        label: 'R$',
        data: stockPrice
      }]
    },
    options: {}
  });
}

createChart();