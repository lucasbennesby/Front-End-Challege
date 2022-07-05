const rate = document.querySelectorAll(".rate-button");
rate.forEach((button, i) => {
  button.onclick = function () {
    button.style.borderStyle === "inset";
    let rate_selected_button = i + 1;
    console.log(rate_selected_button);
  };
});

function teste() {
  document.getElementById("card-1").style.visibility = "hidden";
  document.getElementById("card-2").style.visibility = "visible";
}
