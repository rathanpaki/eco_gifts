document.querySelector("#contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  if (name.trim() === "") {
    alert("Please enter your name.");
    return;
  }

  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (subject.trim() === "") {
    alert("Please enter a subject.");
    return;
  }

  if (message.trim() === "") {
    alert("Please enter your message.");
    return;
  }
  alert("Message sent successfully!");
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}
