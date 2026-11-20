// Langue : choix mémorisé, sinon celle du navigateur (français ou anglais).
(function () {
  var saved = null;
  try { saved = localStorage.getItem("lang"); } catch (e) {}
  var lang = saved || ((navigator.language || "en").toLowerCase().indexOf("fr") === 0 ? "fr" : "en");
  function apply(l) {
    document.documentElement.lang = l;
    document.querySelectorAll("nav button").forEach(function (b) {
      b.setAttribute("aria-pressed", b.dataset.set === l ? "true" : "false");
    });
  }
  apply(lang);
  document.addEventListener("DOMContentLoaded", function () {
    apply(lang);
    document.querySelectorAll("nav button").forEach(function (b) {
      b.addEventListener("click", function () {
        lang = b.dataset.set;
        try { localStorage.setItem("lang", lang); } catch (e) {}
        apply(lang);
      });
    });
  });
})();
