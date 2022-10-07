function showColor(event) {
  if (event.target.value === "blue") {
    alert("💙");
  }

  if (event.target.value === "yellow") {
    alert("💛");
  }

  if (event.target.value === "red") {
    alert("❤️");
  }
}

let colorsSelect = document.querySelector("#colors");
colorsSelect.addEventListener("change", showColor);
