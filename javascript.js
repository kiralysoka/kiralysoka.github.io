

function myFunction() {
  var dark_theme_body = document.getElementById("container_main");
  dark_theme_body.classList.toggle("dark-mode-container-md");

  var dark_theme_body = document.body;
  dark_theme_body.classList.toggle("dark-mode");

  var dark_theme_nav = document.getElementById("navbar_01");
  dark_theme_nav.classList.toggle("dark-mode-nav")

  var dark_theme_button_detail = document.getElementById("dark_label:after");
  dark_theme_button_detail.classList.toggle("dark_theme_label");

  var dark_theme_topics = document.getElementById("Navigator");
  dark_theme_topics.classList.toggle("dark-nav-link");
}
  




