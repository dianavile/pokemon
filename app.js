let count = 1; //declare variable and assign value 1

//renderImage() function is called on count to (re-)render pokemon image in html
//The global variable document consists of the entire html webpage structure
//The `getElementById` method targets/get element `<div id="pokemon"></div>`
//innerHTML property updates the HTML content of the element
function renderImage() {
  let element = document.getElementById("pokemon");
  element.innerHTML = `<img class="poke" src="https://tinyurl.com/ironhack-pokemons/${count}.svg"/>`;
}

let minusElement = document.getElementById("prev"); //previous button

minusElement.onclick = function () {
  // Event listener `onClick` is triggered when clicking on the element
  // an `if` condition run the line of code {within brackets} if the (condition) results true
  if (count > 1) {
    count = count - 1;
    renderImage();
  }
};

let plusElement = document.getElementById("next"); //next button
plusElement.onclick = function () {
  if (count < 650) {
    count = count + 1;
    renderImage();
  }
};

renderImage(); // execute the function
