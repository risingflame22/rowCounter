// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".
let message = document.getElementById("error");

function  errorMessage() {
    message.textContent = "Something went wrong, please try again";
}
