const hobbit = new Book("The Hobbit", "Tolkien", 500, true);
const harryPotter = new Book("Harry Potter", "Rowling", 200, true);
const zaregoto = new Book("zaregoto", "Nisio Isin", 300, true);

let libraryDisplay = document.getElementsByClassName('display')[0];

let myLibrary = [hobbit, harryPotter, zaregoto];

let addBut = document.querySelector(".addBtn");

// addBut.addEventListener("click", addBookToLibrary());

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function displayBook(){    
    document.querySelector(".display").innerHTML = "";
    let i = 0;
    for(let books in myLibrary){
        let book = document.createElement("tr");
        const title = document.createElement("p");
        const titleText = document.createTextNode(`Title: ${myLibrary[i].title}`);
        const author = document.createElement("p");
        const authorText = document.createTextNode(`Author: ${myLibrary[i].author}`);
        const pages = document.createElement("p");
        const pagesText = document.createTextNode(`Pages: ${myLibrary[i].pages}`);
        const read = document.createElement("label");
        const readLabel = document.createTextNode("Read?:");
        read.appendChild(readLabel);
        const readCheck = document.createElement("input");
        readCheck.setAttribute("type", "checkbox");
        read.appendChild(readCheck);
        pages.appendChild(pagesText);
        author.appendChild(authorText);
        title.appendChild(titleText);
        book.appendChild(title);
        book.appendChild(author);
        book.appendChild(pages);
        book.appendChild(read);
        i++;
        libraryDisplay.appendChild(book);
    }
    
}

displayBook();


