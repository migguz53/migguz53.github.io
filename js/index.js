var slider = tns({
    container: ".my-slider",
    items: 1,
    slideBy: "page",
    autoplay: false
});

console.log("load");
// right_image

(() => {
  /* */
  if (document.querySelector(".menu_toggle")) {
    document.querySelectorAll(".menu_toggle").forEach(function(obj) {
      obj.addEventListener("click", function() {
        document.body.classList.toggle("menu_hidden");
      });
    });
  }
})();