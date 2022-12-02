function myFunction() {
  var menu = document.getElementById("nav-container");
  var space = document.getElementById("space");
  if (menu.style.display === "block") {
    menu.style.display = "none";
    space.style.height = "240px";
  } else {
    menu.style.display = "block";
    space.style.height = "475px";
  }
}
