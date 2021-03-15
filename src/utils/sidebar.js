  export function toggle() {
    var x = document.getElementById("home__sidebar");
    if (x.style.display === "none") {
      x.style.display = "flex";
    } else {
      x.style.display = "none";
    }
  }