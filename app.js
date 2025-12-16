// Kandexa Final - active nav + mobile menu
(function(){
  const file = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  const setActive = (scopeSelector) => {
    document.querySelectorAll(scopeSelector + " a").forEach(a=>{
      const href = (a.getAttribute("href") || "").toLowerCase();
      if(href === file) a.classList.add("active");
    });
  };
  setActive(".nav");
  setActive(".nav-mobile");

  const btn = document.getElementById("menuBtn");
  const mobile = document.getElementById("mobileNav");
  if(btn && mobile){
    btn.addEventListener("click", ()=> mobile.classList.toggle("open"));
  }
})();

const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // SAYFA YENİLENMEZ

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          "Accept": "application/json"
        }
      });

      if (response.ok) {
        status.style.display = "block";
        status.style.color = "#16a34a";
        status.textContent = "Mesajınız başarıyla iletildi. En kısa sürede dönüş yapacağız.";

        form.reset();
      } else {
        status.style.display = "block";
        status.style.color = "#dc2626";
        status.textContent = "Bir hata oluştu. Lütfen tekrar deneyin.";
      }
    } catch (error) {
      status.style.display = "block";
      status.style.color = "#dc2626";
      status.textContent = "Bağlantı hatası. Lütfen daha sonra tekrar deneyin.";
    }
  });
}

