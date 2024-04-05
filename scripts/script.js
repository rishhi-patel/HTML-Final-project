$(document).ready(function () {
  $(".hamburger-menu").click(function () {
    $(".sidebar").toggleClass("active")
  })

  $.getJSON("data/grades.json", function (data) {
    // Initialize the line chart with Math progress over time
    var ctxLine = document.getElementById("line-chart").getContext("2d")
    var lineChart = new Chart(ctxLine, {
      type: "line",
      data: {
        labels: data.lineChartData.MathProgress.labels,
        datasets: [
          {
            label: "Math Progress",
            data: data.lineChartData.MathProgress.scores,
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
          },
        },
      },
    })

    // Initialize the pie chart with class grade distribution
    var ctxPie = document.getElementById("pie-chart").getContext("2d")
    var pieChart = new Chart(ctxPie, {
      type: "pie",
      data: {
        labels: Object.keys(data.pieChartData.ClassGradeDistribution),
        datasets: [
          {
            label: "Class Grade Distribution",
            data: Object.values(data.pieChartData.ClassGradeDistribution),
            backgroundColor: [
              "rgba(75, 192, 192, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(255, 159, 64, 0.2)",
              "rgba(255, 99, 132, 0.2)",
            ],
            borderColor: [
              "rgba(75, 192, 192, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(255, 159, 64, 1)",
              "rgba(255, 99, 132, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
          },
        },
      },
    })

    // Initialize the bar chart with Science experiment scores
    var ctxBar = document.getElementById("bar-chart").getContext("2d")
    var barChart = new Chart(ctxBar, {
      type: "bar",
      data: {
        labels: data.barChartData.ScienceExperiments.labels,
        datasets: [
          {
            label: "Science Experiment Scores",
            data: data.barChartData.ScienceExperiments.scores,
            backgroundColor: "rgba(54, 162, 235, 0.5)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        responsive: true,
      },
    })

    // Populate a table with History essay grades
    var gradesTable = $("#grades-table")
    gradesTable.append("<tr><th>Essay</th><th>Grade</th></tr>") // Header
    $.each(data.tableData.HistoryEssays, function (essay, grade) {
      gradesTable.append(`<tr><td>${essay}</td><td>${grade}</td></tr>`)
    })
  })
})
