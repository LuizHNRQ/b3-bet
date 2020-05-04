let ctx = document.getElementById("myChart").getContext("2d");

function createChart(stockLabels = [], stockPrice = [], stockCode) {
  if (window.myCharts != undefined) window.myCharts.destroy();
  window.myCharts = new Chart(ctx, {
    type: "line",
    data: {
      labels: stockLabels,
      datasets: [
        {
          label: `${stockCode}/R$`,
          data: stockPrice,
        },
      ],
    },
    options: {},
  });
}

createChart();
console.log("continues");
