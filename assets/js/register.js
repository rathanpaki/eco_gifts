document
  .querySelector(".register-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (!name) {
      alert("Name is required!");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Invalid email format!");
      return;
    }

    if (password.length < 8) {
      alert("Password must be at least 8 characters long!");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const registeredUsers =
      JSON.parse(localStorage.getItem("registeredUsers")) || [];
    registeredUsers.push({ name, email, password });
    localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));

    // Perform registration logic
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);

    alert("Registration successful!");
    localStorage.setItem("user", JSON.stringify({ name, email }));

    // Redirect to the login page
    window.location.href = "login.html";
  });
