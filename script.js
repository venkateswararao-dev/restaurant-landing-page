const input = document.querySelector("#phone");
if (input) {
  window.intlTelInput(input, {
    initialCountry: "in",
    separateDialCode: true,
    preferredCountries: ["in", "us", "gb"],
  });
}

// Backend logic
window.submitted = false; 
const form = document.getElementById('quoteForm');
const submitButton = form.querySelector('button[type="submit"]');
const formMessage = document.getElementById('formMessage');

function displayMessage(message, isSuccess) {
  formMessage.style.display = "block";
  formMessage.textContent = message;
  formMessage.style.color = isSuccess ? "green" : "red";
}

window.handleIframeLoad = function() {
  submitButton.disabled = false;
  submitButton.textContent = 'Submit';
  displayMessage('✅ Submitted successfully! We will get back to you shortly.', true);
  form.reset();
  window.submitted = false;
};

form.addEventListener('submit', () => {
  window.submitted = true;
  submitButton.disabled = true;
  submitButton.textContent = 'Sending...';
});

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".adit button");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      // Reset all buttons to original state
      buttons.forEach(btn => btn.classList.remove("active"));

      // Activate clicked button
      button.classList.add("active");
    });
  });
});
// Script for click toggle
document.addEventListener("DOMContentLoaded", () => {
  const panels = document.querySelectorAll(".panel");

  panels.forEach(panel => {
    panel.addEventListener("click", () => {
      // remove active from all panels first
      panels.forEach(p => p.classList.remove("active"));
      // add active to clicked one
      panel.classList.add("active");
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const panels = document.querySelectorAll(".panel, .panel2");

  panels.forEach(panel => {
    panel.style.cursor = "pointer"; // visual feedback
    panel.addEventListener("click", () => {
      panels.forEach(p => p.classList.remove("active"));
      panel.classList.add("active");
    });
  });
});
function addText(card) {
  let userText = prompt("Enter your text:");
  if (userText) {
    card.querySelector(".t2").textContent = userText;
  }
}

