(function () {
  const path = window.location.pathname;
  const page = path.split("/").pop().replace(".html", "");

  if (page === "projects") {
    document.querySelector(".projects").classList.add("active");
    return;
  }

  if (page === "blog") {
    document.querySelector(".blog").classList.add("active");
    return;
  }

  if (page === "about") {
    document.querySelector(".about").classList.add("active");
  }
})();
