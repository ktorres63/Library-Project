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

// Función para mostrar los libros en un grid
function displayBooks() {
  const libraryGrid = document.getElementById("libraryGrid");

  libraryGrid.innerHTML = "";

  // Añadir cada libro al grid
  myLibrary.forEach((book) => {
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
    const isReadBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");

    isReadBtn.textContent = "isRd?";
    deleteBtn.textContent = "dete";

    const actionsDiv = document.createElement("div");
    // actionsDiv.textContent = "delete - isRead"
    actionsDiv.classList.add("grid-item");
    btnsDiv.appendChild(isReadBtn);
    btnsDiv.appendChild(deleteBtn);

    actionsDiv.appendChild(btnsDiv);
    // Añadir los elementos al grid
    libraryGrid.appendChild(titleDiv);
    libraryGrid.appendChild(authorDiv);
    libraryGrid.appendChild(pagesDiv);
    libraryGrid.appendChild(isReadDiv);
    libraryGrid.appendChild(actionsDiv);
  });
}
console.log(myLibrary)
// Mostrar los libros iniciales (si hubiera alguno)
displayBooks();
