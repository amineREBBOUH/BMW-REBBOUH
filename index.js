window.addEventListener("scroll", () => {
  // console.log(window.scrollY);
  if (window.scrollY >= 65) {
    document.getElementById("nav").style.backgroundColor = "#FFFFFF";
  } else {
    document.getElementById("nav").style.backgroundColor = "#05080f";
  }
});

function myFunction() {
  //alert(window.innerWidth);
  var size = window.innerWidth;
  if (size <= 600) {
    var element = document.getElementById("nav2");
    element.style.display = "block";
  }
}
function hide() {
  var element = document.getElementById("nav2");
  element.style.display = "none";
}
function hide2() {
  var element = document.getElementById("nav2");
  element.style.display = "none";
}
function read() {
  const element = document.querySelector("#read");
  const statue = document.querySelector("#statu");
  if (document.querySelector("#statu").innerHTML == "Read More...") {
    statue.innerHTML = "Read Less...";
    element.style.display = "block";
  } else {
    statue.innerHTML = "Read More...";
    element.style.display = "none";
  }
}
