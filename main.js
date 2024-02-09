
const myLibrary = [];

function Book(title, author, pages, read, notRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.notRead  = notRead;
}


function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").value;
    let notRead = document.querySelector("#notRead").value;
}

document.addEventListener("DOMContentLoaded", function() {
    let newBookBtn = document.querySelector("#new-book-btn");
    newBookBtn.addEventListener("click", function() {
        let newBookForm = document.querySelector("#new-book-form");
        newBookForm.style.display = "block";
    });
});