function loadPartial(id, file) {
  fetch(file)
    .then(res => res.text())
    .then(html => {
      document.getElementById(id).innerHTML = html;
    });
}

document.addEventListener("DOMContentLoaded", () => {
  loadPartial("navbar", "partials/navbar.html");
  loadPartial("footer", "partials/footer.html");
});
