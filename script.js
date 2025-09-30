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
