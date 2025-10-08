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
const buttons = document.querySelectorAll('.r2');
const container = document.getElementById('image-container');

// Example images for each button
const images = {
  mobile: ["images/image46.png", "images/image47.png"],
  ai: ["images/gemini.png", "images/chatgpt.png"],
  frontend: ["images/image10.png", "https://assets.browserlondon.com/wp-content/uploads/2019/03/pwa-banner.png"],
  backend: ["https://seekvectors.com/files/download/a712a94bb84b68697d537aa71ac13513.jpg", "https://static.frontendmasters.com/resources/2018-03-27-sql/thumb.jpg"],
  devops: ["images/image48.png", "images/image49.png"],
  android: ["images/android1.png", "images/android2.png"]
};

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Reset active state
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Get target category
    const target = btn.getAttribute('data-target');
    const imgs = images[target];

    // Clear and add new hex images
    container.innerHTML = imgs.map(src => `
      <div class="hex">
        <img src="${src}" alt="">
      </div>
    `).join('');
  });
});

