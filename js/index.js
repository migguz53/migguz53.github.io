var slider = tns({
    container: ".my-slider",
    items: 1,
    slideBy: "page",
    autoplay: false
});

console.log("load");
// right_image

function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.innerHTML === "Hello") {
    x.innerHTML = "Swapped text!";
  } else if (x.innerHTML === "Swapped text!") {
    x.innerHTML = "Kill Me";
  } else if (x.innerHTML === "Kill Me") {
    x.innerHTML = "Number 4";
  } else {
    x.innerHTML = "Hello";
  }
}