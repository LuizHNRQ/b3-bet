let ctx = document.getElementById('myChart').getContext('2d');
const stockLabels = [];

console.log('console no chart = ', stockLabels);
let stocksChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: stockLabels,
    datasets: [{
      label: 'Dinheiro',
      data: [
        500,
        121,
        345,
        353,
        363,
        555
      ]
    }]
  },
  options: {}
});