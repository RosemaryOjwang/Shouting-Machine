//User interface logic
function getAndSetValues() {
  //Here we get the input from the form
  let formInput = document.getElementById("typeSomething").value;
  formInput = formInput.toUpperCase();
  console.log(formInput);

  //We set the yourOutput variable to the value from the form
  document.querySelector("span#whatYouSaid").innerText = formInput;
}
//This function will increase the fontsize of the out with every submission
function increasingFontSize() {
   getAndSetValues();
   let fontSize = formInput.style.fontSize = "1.8em"
   let increamentFontSize = 0.2;
  }

window.onload = function() {
  let form = document.querySelector("form");
  form.onsubmit = function(event)  {
    event.preventDefault();
    getAndSetValues();
    //increasingFontSize();

    document.querySelector("div#yourOutput").removeAttribute("class");
  };
  
};