document.querySelector(".login-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters long.");
    return;
  }

  const registeredUsers =
    JSON.parse(localStorage.getItem("registeredUsers")) || [];
  const user = registeredUsers.find(
    (user) => user.email === email && user.password === password
  );

  if (!user) {
    alert("Invalid email or password, or user not registered.");
    return;
  }

  // Perform login logic 
  console.log("Email:", email);
  console.log("Password:", password);

  alert("Login successful!");
  localStorage.setItem("user", JSON.stringify({ email }));

  // Redirect to the homepage 
  window.location.href = "index.html";
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}
