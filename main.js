
const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
   
}


function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").checked;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    render();
}

function render(){
    let libraryEl = document.querySelector("#library");
    libraryEl.innerHTML = "";
    for(let i=0; i< myLibrary.length; i++){
        let book = myLibrary[i];
        let bookEl = document.createElement("div");
        bookEl.innerHTML = `
        <div class="card"> 
            <h3>${book.title}</h2>
            <h5>by ${book.author}</h3>
            <p>pages:${book.pages}</p>
            <p>${book.read ? "Read":"Not yet read"}</p>
            <button class="btn btn-primary" onClick = "removeBook(${i})">Remove</button>
        </div>
        `;
        libraryEl.appendChild(bookEl);
    }
}

function removeBook(index){
    myLibrary.splice(index,1);
    render();
}

document.addEventListener("DOMContentLoaded", function() {
    let newBookBtn = document.querySelector("#new-book-btn");
    newBookBtn.addEventListener("click", function() {
        let newBookForm = document.querySelector("#new-book-form");
        newBookForm.style.display = "block";
    });

    document.querySelector("#new-book-form").addEventListener("submit", function(event){
        event.preventDefault();
        addBookToLibrary();
        
    });
    
});


