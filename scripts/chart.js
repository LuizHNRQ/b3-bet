let ctx = document.getElementById('myChart').getContext('2d');
let stocksChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado'],
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