/* 
Chuck noris random joke - using XHR/XMLHttpRequest
API main address: https://api.chucknorris.io/
Random joke endpoint: https://api.chucknorris.io/jokes/random

* === Main XMLHttpRequest steps ===

* 1) Initializing the XHR module (HTMLHttpRequest)
const xhr = new XMLHttpRequest();

* 2) Setting the method and endpoint adress
xhr.open("GET", "https://api.chucknorris.io/jokes/random");

* 3) making the call
xhr.onreadystatechange = function () {
  console.log(this.readyState); // going from 1 to 4, while 4 is the completed state
  if (this.readyState === 4 && this.status === 200) {
    const data = JSON.parse(this.responseText); // Response object
    console.log(data.value); // The joke
  }
};

* 4) Making (Sending) the request
xhr.send();
*/

const jokeBtn = document.querySelector("#joke-btn");
const joke = document.querySelector("#joke");
let clicked = false;

function getNewJoke() {
  joke.textContent = "Loading...";
  clicked = true;
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.chucknorris.io/jokes/random");
  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const data = JSON.parse(this.responseText);
      joke.textContent = data.value;
    } else {
      joke.textContent = "Something Went Wrong (Not Funny)";
    }
  };
  xhr.send();
  if (clicked) {
    jokeBtn.textContent = "Get Another Joke";
  }
}

jokeBtn.addEventListener("click", getNewJoke);
