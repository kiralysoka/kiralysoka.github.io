function time(){
  var date = new Date();    
  var time = date.toLocaleTimeString();
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  var day = date.toLocaleDateString('hu',options);
  document.getElementById('time').innerHTML = time;
}
setInterval(function(){
  time();
},1000);

function DarkMode() {
  
  var theme;
  var theme_container;
  var theme_nav;
  var theme_nav_toggler;
  var theme_main_title;
  var theme_button_present;
  var theme_button_secondary;
  var theme_button_third;
  var theme_table_about;
  var theme_images;
 

  var dark_theme_body = document.body;
  dark_theme_body.classList.toggle("dark-mode");

  if(dark_theme_body.classList.contains("dark-mode")){
      console.log("Dark mode");
      theme = "DARK";
  }else{
      console.log("Light mode");
      theme = "LIGHT";
  }


  var dark_theme_container = document.getElementById("container_main");
  dark_theme_container.classList.toggle("dark-mode-container-md");

  if(dark_theme_container.classList.contains("dark-mode-container-md")){
    console.log("Dark mode");
    theme_container = "DARK2";
  }else{
    console.log("Light mode");
    theme_container = "LIGHT2";
  }


  var dark_theme_nav = document.getElementById("navbar_01");
  dark_theme_nav.classList.toggle("dark-mode-nav");

  if(dark_theme_nav.classList.contains("dark-mode-nav")){
    console.log("Dark mode");
    theme_nav = "DARK3";
  }else{
    console.log("Light mode");
    theme_nav = "LIGHT3";
  }


  var dark_theme_nav_toggler = document.getElementById("nav_toggler");
  dark_theme_nav_toggler.classList.toggle("navi-toggler-dark");

  if(dark_theme_nav_toggler.classList.contains("navi-toggler-dark")){
    console.log("Dark mode");
    theme_nav_toggler = "DARK4";
  }else{
    console.log("Light mode");
    theme_nav_toggler = "LIGHT4";
  }


  var dark_theme_title = document.getElementById("navbar_brand_title");
  dark_theme_title.classList.toggle("navi-bar-title-dark");

  if(dark_theme_title.classList.contains("navi-bar-title-dark")){
    console.log("Dark mode");
    theme_main_title = "DARK5";
  }else{
    console.log("Light mode");
    theme_main_title = "LIGHT5";
  }


  var dark_theme_button_present = document.getElementById("nav_button_present");
  dark_theme_button_present.classList.toggle("button-present-dark");

  if(dark_theme_button_present.classList.contains("button-present-dark")){
    console.log("Dark mode");
    theme_button_present = "DARK6";
  }else{
    console.log("Light mode");
    theme_button_present = "LIGHT6";
  }


  var dark_theme_button_secondary = document.getElementById("nav_button_secondary");
  dark_theme_button_secondary.classList.toggle("button-secondary-dark");

  if(dark_theme_button_secondary.classList.contains("button-secondary-dark")){
    console.log("Dark mode");
    theme_button_secondary = "DARK7";
  }else{
    console.log("Light mode");
    theme_button_secondary = "LIGHT7";
  }


  var dark_theme_button_third = document.getElementById("nav_button_third");
  dark_theme_button_third.classList.toggle("button-secondary-dark");

  if(dark_theme_button_third.classList.contains("button-secondary-dark")){
    console.log("Dark mode");
    theme_button_third = "DARK8";
  }else{
    console.log("Light mode");
    theme_button_third = "LIGHT8";
  }


  var dark_theme_table = document.getElementById("tablazat_about");
  dark_theme_table.classList.toggle("tablazat-about-dark");

  if(dark_theme_table.classList.contains("tablazat-about-dark")){
    console.log("Dark mode");
    theme_table_about = "DARK9";
  }else{
    console.log("Light mode");
    theme_table_about = "LIGHT9";
  }


  var dark_theme_images = document.getElementById("images_id");
  dark_theme_images.classList.toggle("img-thumbnail-about-dark");

  if(dark_theme_images.classList.contains("img-thumbnail-about-dark")){
    console.log("Dark mode");
    theme_images = "DARK10";
  }else{
    console.log("Light mode");
    theme_images = "LIGHT10";
  }


  //save to localstorage
  localStorage.setItem("PageTheme", JSON.stringify(theme));
  localStorage.setItem("PageThemeContainer", JSON.stringify(theme_container));
  localStorage.setItem("PageThemeNav", JSON.stringify(theme_nav));
  localStorage.setItem("PageThemeNavToggler", JSON.stringify(theme_nav_toggler));
  localStorage.setItem("PageThemeMainTitle", JSON.stringify(theme_main_title));
  localStorage.setItem("PageThemeButtonPresent", JSON.stringify(theme_button_present));
  localStorage.setItem("PageThemeButtonSecondary", JSON.stringify(theme_button_secondary));
  localStorage.setItem("PageThemeButtonThird", JSON.stringify(theme_button_third));
  localStorage.setItem("PageThemeTableAbout", JSON.stringify(theme_table_about));
  localStorage.setItem("PageThemeImages", JSON.stringify(theme_images));

}

setInterval(() => {
  let GetTheme = JSON.parse(localStorage.getItem("PageTheme"));
  console.log(GetTheme);
  if(GetTheme === "DARK"){
      document.body.classList = "dark-mode";
  }else{
      document.body.classList = "";
  }
}, 5);

setInterval(() => {
  let GetThemeContainer = JSON.parse(localStorage.getItem("PageThemeContainer"));
  console.log(GetThemeContainer);
  if(GetThemeContainer === "DARK2"){
    document.getElementById("container_main").classList = "dark-mode-container-md col-lg-8 col-md-10 col-sm-10 col-xs-12";
  }else{
    document.getElementById("container_main").classList = "container-md col-lg-8 col-md-10 col-sm-10 col-xs-12";
  }
}, 5);

setInterval(() => {
  let GetThemeNav = JSON.parse(localStorage.getItem("PageThemeNav"));
  console.log(GetThemeNav);
  if(GetThemeNav === "DARK3"){
    document.getElementById("navbar_01").classList = "navbar navbar-expand-md navbar-dark dark-mode-nav";
  }else{
    document.getElementById("navbar_01").classList = "navbar navbar-expand-md navbar-light";
  }
}, 5);

setInterval(() => {
  let GetThemeNavToggler = JSON.parse(localStorage.getItem("PageThemeNavToggler"));
  console.log(GetThemeNavToggler);
  if(GetThemeNavToggler === "DARK4"){
    document.getElementById("nav_toggler").classList = "navbar-toggler navi-toggler navi-toggler-dark";
  }else{
    document.getElementById("nav_toggler").classList = "navbar-toggler navi-toggler";
  }
}, 5);

setInterval(() => {
  let GetThemeMainTitle = JSON.parse(localStorage.getItem("PageThemeMainTitle"));
  console.log(GetThemeMainTitle);
  if(GetThemeMainTitle === "DARK5"){
    document.getElementById("navbar_brand_title").classList = "navbar-brand navi-bar-title navi-bar-title-dark";
  }else{
    document.getElementById("navbar_brand_title").classList = "navbar-brand navi-bar-title";
  }
}, 5);

setInterval(() => {
  let GetThemeButtonPresent = JSON.parse(localStorage.getItem("PageThemeButtonPresent"));
  console.log(GetThemeButtonPresent);
  if(GetThemeButtonPresent === "DARK6"){
    document.getElementById("nav_button_present").classList = "btn btn-light button-present button-present-dark";
  }else{
    document.getElementById("nav_button_present").classList = "btn btn-light button-present";
  }
}, 5);

setInterval(() => {
  let GetThemeButtonSecondary = JSON.parse(localStorage.getItem("PageThemeButtonSecondary"));
  console.log(GetThemeButtonSecondary);
  if(GetThemeButtonSecondary === "DARK7"){
    document.getElementById("nav_button_secondary").classList = "btn btn-light button-secondary-dark";
  }else{
    document.getElementById("nav_button_secondary").classList = "btn btn-light button-secondary";
  }
}, 5);

setInterval(() => {
  let GetThemeButtonThird = JSON.parse(localStorage.getItem("PageThemeButtonThird"));
  console.log(GetThemeButtonThird);
  if(GetThemeButtonThird === "DARK8"){
    document.getElementById("nav_button_third").classList = "btn btn-light button-secondary-dark";
  }else{
    document.getElementById("nav_button_third").classList = "btn btn-light button-secondary";
  }
}, 5);

setInterval(() => {
  let GetThemeTableAbout = JSON.parse(localStorage.getItem("PageThemeTableAbout"));
  console.log(GetThemeTableAbout);
  if(GetThemeTableAbout === "DARK9"){
    document.getElementById("tablazat_about").classList = "tablazat-about container-sm tablazat-about-dark";
  }else{
    document.getElementById("tablazat_about").classList = "tablazat-about container-sm";
  }
}, 5);

setInterval(() => {
  let GetThemeImages = JSON.parse(localStorage.getItem("PageThemeImages"));
  console.log(GetThemeImages);
  if(GetThemeImages === "DARK10"){
    document.getElementById("images_id").classList = "img-thumbnail-about img-thumbnail-about-dark";
  }else{
    document.getElementById("images_id").classList = "img-thumbnail-about";
  }
}, 5);
