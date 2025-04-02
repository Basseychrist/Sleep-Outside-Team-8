import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

document
  .getElementById("newsletter-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    alert(`Thank you for subscribing with ${email}!`);
    // Optionally, send the email to a server or API here
  });
