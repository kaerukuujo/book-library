// ---- place holder info----------
// const hobbit = new Book("The Hobbit", "Tolkien", 500, true);
// const harryPotter = new Book("Harry Potter", "Rowling", 200, true);
// const zaregoto = new Book("zaregoto", "Nisio Isin", 300, true);
// const monogatari = new Book("monogatari", "Nisio Isin", 300, true);

let libraryDisplay = document.getElementsByClassName('display')[0];

// ---- place holder info----------

// let myLibrary = [hobbit, harryPotter, zaregoto, monogatari];
let myLibrary = [];

let submitButton = document.getElementById("submitButton");
submitButton.setAttribute("onclick", "clicked()");

let bookIndex = 0;

function clicked(){
    if(document.querySelector("#title").value !== "" && 
    document.querySelector("#author").value !== ""){
        const newBook = new Book
        (
            document.querySelector("#title").value, 
            document.querySelector("#author").value,
            document.querySelector("#pages").value,
            false,
            myLibrary.length
        );
        myLibrary.push(newBook);
        // bookIndex = myLibrary.indexOf(newBook);
        // console.log(bookIndex);
        displayBook();
        // console.log('clicked');
    } else {
        console.log("empty fields");
    }
}

function delCard(index){
    myLibrary.splice(index.getAttribute("data-id"), 1);
    index.remove();
}

function Book(title, author, pages, read, bookIndexNum){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.bookIndexNum = bookIndexNum;
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
        const delBut = document.createElement("button");
        delBut.setAttribute("type", "button");
        delBut.setAttribute("onclick", "delCard(this.parentElement)");
        const delButText = document.createTextNode("Delete");
        delBut.appendChild(delButText);
        pages.appendChild(pagesText);
        author.appendChild(authorText);
        title.appendChild(titleText);
        book.appendChild(title);
        book.appendChild(author);
        book.appendChild(pages);
        book.appendChild(read);
        book.appendChild(delBut);
        book.setAttribute("data-id", `${i}`)
        i++;
        libraryDisplay.appendChild(book);
    }
    
}

displayBook();


