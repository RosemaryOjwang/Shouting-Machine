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
/*function increasingFontSize() {
  getAndSetValues();
  sessionStorage.setItem("number", 25);
  let newSize = parseInt(sessionStorage.getItem("number"));
  console.log(newSize);
  //newSize = increase();
  sessionStorage.setItem("number", newSize + 5);*/

  /*getAndSetValues();
  let sizeValue = increase();
    let size = parseInt(sessionStorage.getItem("num"));
    sessionStorage.setItem("size", sizeValue);
 return size;

  
  //let text = document.getElementById("whatYouSaid").innerText;
   //sessionStorage.setItem("size", "25");
   //console.log(size);
   //let newFontSize = parseInt(sessionStorage.getItem("size")) + 5;
   //console.log(newFontSize);
   //document.getElementById("whatYouSaid").innerText;
   //let text = document.querySelector("div#yourOutput"); 
   //text.style.fontSize = size + "px";

  }*/
  /*function increase(){
     let num = 25;
     num++;
    return sessionStorage.setItem("num", num);
  }*/

window.onload = function() {
  let form = document.querySelector("form");
  form.onsubmit = function(event)  {
    event.preventDefault();
    getAndSetValues();
    let text = document.getElementById("whatYouSaid"); 
    //targetText = text.innerText

    //console.log(text.innerText);
    //size++;
    //sessionStorage.getItem("size",size);
    //size++;
    //sessionStorage.setItem("size", 20);
    let size;
    size = sessionStorage.getItem("size");
    size++;
  
    console.log(size);
   text.style.fontSize = size + "px";
   size = sessionStorage.setItem("size", size);

    document.querySelector("div#yourOutput").removeAttribute("class");

  };
  
};