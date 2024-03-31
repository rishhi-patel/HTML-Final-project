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
