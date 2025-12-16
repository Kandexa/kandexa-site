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

function sendMail(){
  const to = document.getElementById("to").value;
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const company = document.getElementById("company").value.trim();
  const subject = document.getElementById("subject").value.trim() || "Kandexa | Görüşme Talebi";
  const message = document.getElementById("message").value.trim();

  if(!message){
    alert(window.__i18n_lang === "en" ? "Message cannot be empty." : "Mesaj boş olamaz.");
    return false;
  }

  const body =
`Ad Soyad: ${name || "-"}
E-posta: ${email || "-"}
Firma: ${company || "-"}

Mesaj:
${message}

— Kandexa web form`;

  const mailto = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailto;
  return false;
}
