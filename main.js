
const myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}

document.addEventListener("DOMContentLoaded", function() {
    let newBookBtn = document.querySelector("#new-book-btn");
    newBookBtn.addEventListener("click", function() {
        let newBookForm = document.querySelector("#new-book-form");
        newBookForm.style.display = "block";
    });
});