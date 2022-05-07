// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'


const emptyHearts = document.querySelectorAll(".like-glyph");
const modal = document.querySelector("#modal");
modal.classList.add("modal");
const message = document.querySelector("#modal-message");

  emptyHearts.forEach((emptyHeart) => {
    emptyHeart.addEventListener("click", () => {
    mimicServerCall()

  .then(() => {
    if (emptyHeart.textContent !== FULL_HEART) {
    emptyHeart.classList.add("activated-heart");
    emptyHeart.textContent = FULL_HEART;
  } else if (emptyHeart.textContent === FULL_HEART) {
    emptyHeart.textContent = EMPTY_HEART;
    emptyHeart.classList.remove("activated-heart");
    }
  })
   .catch((result) => {
    modal.classList.remove("modal");
    message.textContent = result;

    setTimeout(hidden, 3000);
   });
  });
});
function hidden() {
  return modal.classList.add("modal");
}
// Your JavaScript code goes here!
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------
  
function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}