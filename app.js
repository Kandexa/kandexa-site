// Kandexa - active nav (desktop+mobile) + mobile menu
(function () {
  function currentFile() {
    let file = location.pathname.split("/").pop() || "index.html";
    file = file.split("?")[0].split("#")[0].toLowerCase();
    if (file === "" || file === "/") file = "index.html";
    return file;
  }

  function normalizeHref(href) {
    if (!href) return "";
    href = href.trim().toLowerCase();
    href = href.replace(/^\.\//, "");          // ./hakkimizda.html -> hakkimizda.html
    href = href.split("?")[0].split("#")[0];  // query/hash temizle
    if (href === "" || href === "/") href = "index.html";
    return href;
  }

  function setActiveLinks(scopeSelector) {
    const file = currentFile();
    document.querySelectorAll(scopeSelector + " a").forEach((a) => {
      const href = normalizeHref(a.getAttribute("href"));
      if (href === file) {
        a.classList.add("active");
        a.setAttribute("aria-current", "page");
      }
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    // aktif menü
    setActiveLinks(".nav");
    setActiveLinks(".nav-mobile");

    // mobil menü aç/kapa
    const btn = document.getElementById("menuBtn");
    const mobile = document.getElementById("mobileNav");

    if (btn && mobile) {
      btn.addEventListener("click", () => mobile.classList.toggle("open"));

      // dışarı tıklayınca kapansın
      document.addEventListener("click", (e) => {
        if (!mobile.contains(e.target) && !btn.contains(e.target)) {
          mobile.classList.remove("open");
        }
      });
    }
  });
})();
