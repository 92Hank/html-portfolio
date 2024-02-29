var menu = document.getElementById("bar");
var item = document.getElementById("item");

item.style.right = "-300px";

menu.onclick = function () {
  if (item.style.right == "-300px") {
    item.style.right = "0";
  } else {
    item.style.right = "-300px";
  }
};

window.addEventListener("click", function(e) {
    if (!menu.contains(e.target)) {
        item.style.right = "-300px";
    }
})
