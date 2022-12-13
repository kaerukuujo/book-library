const hobbit = new Book("The Hobbit", "Tolkien", 500, true);
const harryPotter = new Book("Harry Potter", "Rowling", 200, true);
const zaregoto = new Book("zaregoto", "Nisio Isin", 300, true);

let libraryDisplay = document.getElementsByClassName('display')[0];

let myLibrary = [hobbit, harryPotter, zaregoto];

let addBut = document.querySelector("button");
addBut.addEventListener("click", addBookToLibrary());

function addBookToLibrary(){
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const newBook = Book(title, author, pages, false)
    myLibrary.push(newBook);
}

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

for(let i = 0; i < myLibrary.length; i++){
    let displayBook = document.createElement('div');
    let bookTitle = document.createElement("p");
    const bookTitleText = document.createTextNode(`Title: ${myLibrary[i].title}`);
    bookTitle.appendChild(bookTitleText);
    let bookAuthor = document.createElement("p");
    const bookAuthorText = document.createTextNode(`Author: ${myLibrary[i].author}`);
    bookAuthor.appendChild(bookAuthorText);
    let bookPages = document.createElement("p");
    const bookPagesText = document.createTextNode(`Pages: ${myLibrary[i].pages}`);
    bookPages.appendChild(bookPagesText);
    displayBook.appendChild(bookTitle);
    displayBook.appendChild(bookAuthor);
    displayBook.appendChild(bookPages);
    displayBook.setAttribute("class", "displayBook");
    libraryDisplay.appendChild(displayBook);
}

console.log(hobbit);
