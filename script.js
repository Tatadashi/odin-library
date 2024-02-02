const myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

//add book to arra
function addBookToLibrary(title, author, pages) {
  const book = new Book(title, author, pages);
  myLibrary.push(book);
  updateLibrary();
}

//update visually display of library array
function updateLibrary() {
  const table = document.querySelector(`table`);
  resetLibary();
  myLibrary.forEach(book => {
    table.innerHTML +=
    `<tr>
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.pages}</td>
    </tr>`;
  });
}


//remove all entries visually from table
function resetLibary() {
  const table = document.querySelector(`table`);
  table.innerHTML =
  `<tr>
  <th>Title</th>
  <th>Author</th>
  <th>Number of Pages (Chapters if Web Novel)</th>
  </tr>`;
}

addBookToLibrary(`Solo Leveling, Vol. 1`, `Chugong`, 322);
addBookToLibrary(`Everyone Else is a Returnee`, `Toika`, 378);
addBookToLibrary(`Mushoku Tensei: Jobless Reincarnation, Vol. 1`, `Rifujin na Magonote`, 408);
addBookToLibrary(`Lockwood & Co. The Screaming Staircase`, `Jonathan Stroud`, 440);
addBookToLibrary(`League of Legends: Realms of Runeterra (Official Companion)`, `Riot Games`, 256);

const dialog = document.getElementById(`dialog`);
const modalButton = document.getElementById(`modal`)

//add book button
modalButton.addEventListener(`click`, () => {
  dialog.showModal();
});

//submitting form
const form = document.querySelector(`form`);
form.addEventListener(`submit`, (e) => {
  e.preventDefault();
  const formData = new FormData(form);

  const title = formData.get(`title`);
  const author = formData.get(`author`);
  const pages = formData.get(`pages`);

  addBookToLibrary(title, author, Number(pages));

  form.reset();
  dialog.close();
});

//esc to close modal
form.addEventListener(`keydown`, () => {
  form.reset();
});

//x button on modal
const closeModal = document.getElementById(`close`);
closeModal.addEventListener(`click`, () => {
  form.reset();
  dialog.close();
});