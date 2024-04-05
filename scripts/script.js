// JQuery example
$(document).ready(function () {
  $(".hamburger-menu").click(function () {
    $(".sidebar").toggleClass("active")
  })

  //fetching data from API
  $.getJSON("https://chart-api-three.vercel.app/chart-data", function (data) {
    initializeLineChart(data.lineChartData.MathProgress)
    initializeBarChart(data.barChartData.ScienceExperiments)
  })

  //fetching data from JSON
  $.getJSON("data/grades.json", function (data) {
    initializePieChart(data.pieChartData.ClassGradeDistribution)
    populateGradesTable(data.tableData.students)
  })
})

function initializeLineChart(MathProgress) {
  let ctxLine = document.getElementById("line-chart").getContext("2d")
  let lineChart = new Chart(ctxLine, {
    type: "line",
    data: {
      labels: MathProgress.labels,
      datasets: [
        {
          label: "Math Progress",
          data: MathProgress.scores,
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
}

function initializeBarChart(ScienceExperiments) {
  let ctxBar = document.getElementById("bar-chart").getContext("2d")
  let barChart = new Chart(ctxBar, {
    type: "bar",
    data: {
      labels: ScienceExperiments.labels,
      datasets: [
        {
          label: "Science Experiment Scores",
          data: ScienceExperiments.scores,
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
}

function initializePieChart(ClassGradeDistribution) {
  let ctxPie = document.getElementById("pie-chart").getContext("2d")
  let pieChart = new Chart(ctxPie, {
    type: "pie",
    data: {
      labels: Object.keys(ClassGradeDistribution),
      datasets: [
        {
          label: "Class Grade Distribution",
          data: Object.values(ClassGradeDistribution),
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
}

function populateGradesTable(students) {
  let gradesTable = $("#grades-table")
  gradesTable.append("<tr><th>Name</th><th>Student ID</th><th>Grade</th></tr>")

  $.each(students, function (index, student) {
    gradesTable.append(
      `<tr><td>${student.name}</td><td>${student.studentID}</td><td>${student.grade}</td></tr>`
    )
  })
}
