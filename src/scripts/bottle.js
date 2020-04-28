let bottle = document.getElementById("animBottle");
document.getElementById("pirateCross").onclick = function () {
  bottle.classList.toggle("fade");
  alert("YOU FOUND THE MAGIC");
};

// ----------------------------
document.getElementById("animBottle").onclick = () => {
  bottle.classList.toggle("fade");
  alert("NOW YOU ARE HEALTHY AGAIN");
};
