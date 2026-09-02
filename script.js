document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      document.body.classList.toggle("nav-open");
      var expanded = document.body.classList.contains("nav-open");
      toggle.setAttribute("aria-expanded", expanded ? "true" : "false");
    });
  }

  var contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", async function (e) {
      e.preventDefault();
      var data = new FormData(contactForm);
      try {
        var response = await fetch(contactForm.action, {
          method: "POST",
          body: data,
          headers: { Accept: "application/json" }
        });
        if (response.ok) {
          contactForm.reset();
          contactForm.style.display = "none";
          document.getElementById("formSuccess").style.display = "block";
        } else {
          alert("Something went wrong — please email info@chapmanservices.co directly.");
        }
      } catch (error) {
        alert("Something went wrong — please email info@chapmanservices.co directly.");
      }
    });
  }
});