const myLibrary = [];
const addBookBtn = document.getElementById("newBook")



function Book(title, author,pages,isRead) {
  this.title = title;
	this.author = author;
	this.pages = pages;
	this.isRead = isRead;

}

function addBookToLibrary(book) {
	myLibrary.push(book)
	displayBooks();
}

// Función para mostrar los libros en un grid
function displayBooks() {
  const libraryGrid = document.getElementById('libraryGrid');
  
  // Limpiar el grid antes de añadir los libros nuevamente
  // Mantener los headers intactos
  const headers = `
    <div class="grid-header">Título</div>
    <div class="grid-header">Autor</div>
    <div class="grid-header">Páginas</div>
    <div class="grid-header">Leído</div>`;
  libraryGrid.innerHTML = headers;

  // Añadir cada libro al grid
  myLibrary.forEach(book => {
    const titleDiv = document.createElement('div');
    titleDiv.textContent = book.title;
    titleDiv.classList.add('grid-item');

    const authorDiv = document.createElement('div');
    authorDiv.textContent = book.author;
    authorDiv.classList.add('grid-item');

    const pagesDiv = document.createElement('div');
    pagesDiv.textContent = book.pages;
    pagesDiv.classList.add('grid-item');

    const isReadDiv = document.createElement('div');
    isReadDiv.textContent = book.isRead ? 'Sí' : 'No';
    isReadDiv.classList.add('grid-item');

    // Añadir los elementos al grid
    libraryGrid.appendChild(titleDiv);
    libraryGrid.appendChild(authorDiv);
    libraryGrid.appendChild(pagesDiv);
    libraryGrid.appendChild(isReadDiv);
  });
}

// Función para agregar un nuevo libro desde el botón
function addNewBook() {
  const newBook = new Book("Nuevo Libro", "Autor Desconocido", 123, false);
  addBookToLibrary(newBook);
}

// Añadir evento al botón
// const addBookBtn = document.getElementById('addBookBtn');
addBookBtn.addEventListener('click', addNewBook);

// Mostrar los libros iniciales (si hubiera alguno)
displayBooks();