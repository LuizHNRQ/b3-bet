let ctx = document.getElementById('myChart').getContext('2d');
const stockLabels = [];
const stockPrice = [];

console.log('console no chart = ', stockLabels);
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