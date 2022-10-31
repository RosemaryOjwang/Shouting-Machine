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

window.onload = function() {
  let form = document.querySelector("form");
  form.onsubmit = function(event)  {
    event.preventDefault();
    getAndSetValues();

    document.querySelector("div#yourOutput").removeAttribute("class");
  };
  
};