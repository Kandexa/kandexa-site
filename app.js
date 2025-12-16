// ===== Mobile Menu Toggle =====
(function () {
  const menuBtn = document.getElementById("menuBtn");
  const mobileNav = document.getElementById("mobileNav");

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener("click", () => {
      mobileNav.classList.toggle("open");
    });
  }
})();

// ===== Formspree: sayfada "Mesaj iletildi" göster, başka sayfaya gitme =====
(function () {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const okBox = document.getElementById("formSuccess");
    const errBox = document.getElementById("formError");
    if (okBox) okBox.style.display = "none";
    if (errBox) errBox.style.display = "none";

    try {
      const data = new FormData(form);
      const res = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: { "Accept": "application/json" }
      });

      if (res.ok) {
        form.reset();
        if (okBox) okBox.style.display = "block";
      } else {
        if (errBox) errBox.style.display = "block";
      }
    } catch (err) {
      if (errBox) errBox.style.display = "block";
    }
  });
})();
