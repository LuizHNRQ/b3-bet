let ctx = document.getElementById('myChart').getContext('2d');

function createChart(stockLabels = [], stockPrice = [], stockCode) {
  if (window.myCharts != undefined) window.myCharts.destroy();
  window.myCharts = new Chart(ctx, {
    type: 'line',
    data: {
      labels: stockLabels,
      datasets: [
        {
          label: `${stockCode}/R$`,
          data: stockPrice,
          borderColor: '#3cba9f',
          fill: false,
          //drawChartArea: false,
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              // Include a dollar sign in the ticks
              callback: function (value) {
                return 'R$' + value;
              },
            },
          },
        ],
        xAxes: [
          {
            ticks: {
              // Include a dollar sign in the ticks
              callback: function (value) {
                return value;
              },
            },
          },
        ],
      },
    },
  });
}

createChart();
console.log('continues');
