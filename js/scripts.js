//User interface logic


function getAndSetValues() {
  //Here we get the input from the form
  let formInput = document.getElementById("typeSomething").value;
  formInput = formInput.toUpperCase();
  console.log(formInput);
  //We set the yourOutput variable to the value from the form
  document.querySelector("span#whatYouSaid").innerText = formInput;
}
//function to increment text font size after every submission of the form
function increaseFontSize() {
  let textSize = 10;
  let text = document.getElementById("whatYouSaid");
  textSize = sessionStorage.getItem("textSize");
  textSize += 2;
  text.style.fontSize = textSize + "px"; 
  textSize = sessionStorage.setItem("textSize", textSize);
  return textSize;
}

//function to display alert on increasing font size of text
function alertOnIncreasingFont()  {
  window.alert("Beware of increasing font size");
  let form = document.querySelector("form");
  //stop event listener after displaying alert once
  form.removeEventListener("submit", alertOnIncreasingFont);
}

window.addEventListener("load", function () {
  let form = document.querySelector("form")
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    getAndSetValues(); 
    increaseFontSize();
    document.querySelector("div#yourOutput").removeAttribute("class");

  });

  form.addEventListener("submit", alertOnIncreasingFont);

});