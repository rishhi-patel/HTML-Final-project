$(document).ready(function () {
  $("#loginForm").submit(function (e) {
    e.preventDefault() // Prevent form submission for demonstration

    var email = $("#email").val().trim()
    var password = $("#password").val().trim()

    // Regular expression for email validation
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
    // Regular expression for password validation
    var passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

    // Email validation
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.")
      return
    }

    // Password validation
    if (!passwordRegex.test(password)) {
      alert(
        "Password must be at least 8 characters long and include at least one uppercase letter, one number, and one special character."
      )
      return
    }

    window.location.href = "/index.html"
  })
})

// script.js
const slogans = [
  "Unlock Your Potential.",
  "Empowering the Next Generation.",
  "Innovation in Learning.",
]

let index = 0
let count = 0
let currentText = ""
let letter = ""

;(function type() {
  if (count === slogans.length) {
    count = 0
  }
  currentText = slogans[count]
  letter = currentText.slice(0, ++index)

  document.querySelector("#typewriter").textContent = letter
  if (letter.length === currentText.length) {
    count++
    index = 0
  }
  setTimeout(type, 100)
})()
