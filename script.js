const myLibrary = [];
const addBookBtn = document.getElementById("newBook");
const openDialogBtn = document.getElementById("openDialogBtn");
const closeDialogBtn = document.getElementById("closeDialogBtn");
const addBookForm = document.getElementById("addBookForm");

const bookDialog = document.getElementById("bookDialog");

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  displayBooks();
}

openDialogBtn.addEventListener("click", () => {
  bookDialog.showModal();
});

closeDialogBtn.addEventListener("click", () => {
  bookDialog.close();
});

addBookForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const isRead = document.getElementById("isRead").checked;

  console.log(
    `Book: ${title}, Author: ${author}, Pages: ${pages}, isRead?: ${isRead}`
  );
  const newBook = new Book(title, author, pages, isRead);
  addBookToLibrary(newBook);
  addBookForm.reset();
  bookDialog.close();
});

//Shows all books
function displayBooks() {
  const libraryGrid = document.getElementById("libraryGrid");

  libraryGrid.innerHTML = "";

  // Añadir cada libro al grid
  myLibrary.forEach((book, index) => {
    const titleDiv = document.createElement("div");
    titleDiv.textContent = book.title;
    titleDiv.classList.add("grid-item");

    const authorDiv = document.createElement("div");
    authorDiv.textContent = book.author;
    authorDiv.classList.add("grid-item");

    const pagesDiv = document.createElement("div");
    pagesDiv.textContent = book.pages;
    pagesDiv.classList.add("grid-item");

    const isReadDiv = document.createElement("div");
    isReadDiv.textContent = book.isRead ? "Yes" : "No";
    isReadDiv.classList.add("grid-item");

    //Add buttons
    const btnsDiv = document.createElement("div");
    btnsDiv.classList.add("btnsContainer");
    const isReadBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");

    isReadBtn.classList.add("btnRead");
    deleteBtn.classList.add("btnDelete");

    deleteBtn.dataset.indexNumber = index
    isReadBtn.dataset.indexNumber = index


    const iconDelete = document.createElement("img");
    iconDelete.src = "./imgs/icon_delete.svg";
    iconDelete.alt = "delete";

    const iconComplete = document.createElement("img");
    iconComplete.src = "./imgs/icon_completed.svg";
    iconComplete.alt = "complete";

    isReadBtn.prepend(iconComplete);
    deleteBtn.prepend(iconDelete);

    const actionsDiv = document.createElement("div");
    actionsDiv.classList.add("grid-item");

    btnsDiv.appendChild(isReadBtn);
    btnsDiv.appendChild(deleteBtn);

    actionsDiv.appendChild(btnsDiv);

    // Add elements to grid
    libraryGrid.appendChild(titleDiv);
    libraryGrid.appendChild(authorDiv);
    libraryGrid.appendChild(pagesDiv);
    libraryGrid.appendChild(isReadDiv);
    libraryGrid.appendChild(actionsDiv);
  });

  const deleteButtons = document.querySelectorAll(".btnDelete");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const index = this.getAttribute("data-index-number");
      console.log(`index: ${index}`)
      removeBookFromLibrary(index);
    });
  });

  const readButtons = document.querySelectorAll(".btnRead");
  readButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const index = this.getAttribute("data-index-number");
      console.log(`index: ${index}`)
      changeStateBook(index);
    });
  });
}
function removeBookFromLibrary(index) {
  myLibrary.splice(index, 1); 
  displayBooks(); 
}

function changeStateBook(index) {
  const book = myLibrary[index];
  book.isRead = !book.isRead
  console.log(`object:  ${book.isRead}`)
  displayBooks(); 
}

const newBookT = new Book('1984', 'George Orwell', 328, false);
addBookToLibrary(newBookT);
