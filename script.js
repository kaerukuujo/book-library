let myLibrary = [];
const library = document.getElementsByClassName(libraryDisplay)[0];
let brtn = document.getElementsByClassName('addBook')[0];
brtn.addEventListener("click", clicked);

let title = null;
let author = null;
let pages = null;
let read = false;

function clicked(){
    title = document.getElementById(title).value;
    author = document.getElementById(author).value;
    pages = document.getElementById(pages).value;
    read = document.getElementById(read).value;

    addBookToLibrary(Book(title, author, pages, read));
}

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book){
    
    let book = document.createElement(div.book);
    const para = document.createElement("p");
    const bookTitle = book.title;    
    const bookAuthor = book.author;
    const bookPages = book.pages;
    const bookRead = book.read;
    para.appendChild(bookTitle, bookAuthor, bookPages, bookRead);
    library.appendChild(book);
}