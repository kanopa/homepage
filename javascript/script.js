function Func() {
    var x = document.getElementById("show")
    var y = document.getElementById("showSec");

    var pic1 = document.getElementById("pic1");
    var pic2 = document.getElementById("pic2");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "none";
      pic1.style.display = "block";
      pic2.style.display = "none";
    } else {
      x.style.display = "none";
      y.style.display = "block";
      pic1.style.display = "none"
      pic2.style.display = "block";
    }
  }