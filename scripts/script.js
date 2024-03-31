$(document).ready(function () {
  $(document).ready(function () {
    $(".hamburger-menu").click(function () {
      $(".sidebar").toggleClass("active")
    })
  })
  $.getJSON("data/grades.json", function (data) {
    // Initialize the line chart with Math grades
    var ctxLine = document.getElementById("line-chart").getContext("2d")
    var lineChart = new Chart(ctxLine, {
      type: "line",
      data: {
        labels: ["Test 1", "Test 2", "Test 3", "Test 4", "Final"],
        datasets: [
          {
            label: "Math Grades",
            data: data.grades.Math,
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

    // Initialize the pie chart with grade distribution
    var ctxPie = document.getElementById("pie-chart").getContext("2d")
    var pieChart = new Chart(ctxPie, {
      type: "pie",
      data: {
        labels: Object.keys(data.gradeDistribution),
        datasets: [
          {
            label: "Grade Distribution",
            data: Object.values(data.gradeDistribution),
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
            ],
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
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

    var barChartData = {
      labels: [
        "Assignment 1",
        "Assignment 2",
        "Midterm",
        "Assignment 3",
        "Final",
      ],
      datasets: [
        {
          label: "Science Grades",
          data: [85, 88, 75, 92, 95],
          backgroundColor: "rgba(54, 162, 235, 0.5)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1,
        },
      ],
    }

    var barChartOptions = {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    }

    var ctxBar = document.getElementById("bar-chart").getContext("2d")
    var barChart = new Chart(ctxBar, {
      type: "bar",
      data: barChartData,
      options: barChartOptions,
    })

    // Simple table for demonstration
    var gradesTable = $("#grades-table")
    gradesTable.append("<tr><th>Subject</th><th>Grade</th></tr>") // Header
    barChartData.labels.forEach((subject, index) => {
      gradesTable.append(
        `<tr><td>${subject}</td><td>${barChartData.datasets[0].data[index]}</td></tr>`
      )
    })
  })
})
