(function () {
  try {
    var t = localStorage.getItem("kalmy_theme");
    if (
      t === "dark" ||
      (!t && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    }
    var l = localStorage.getItem("kalmy_locale");
    if (l === "wo" || l === "fr" || l === "en") {
      document.documentElement.lang = l;
    }
  } catch (e) {
    /* ignore */
  }
})();
