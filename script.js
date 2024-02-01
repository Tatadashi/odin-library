const myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

//add book to array if inputs pass checks
function addBookToLibrary(title, author, pages) {
  //check if correct type input
  if (typeof title === 'string' && typeof author === `string` && typeof pages === `number`) {
    //check for blank strings
    if (title !== `` && author !== ``) {
      //check if number is positive integer
      if (Number.isInteger(pages) && pages > 0) {
        const book = new Book(title, author, pages);
        myLibrary.push(book);
      }
    }
  } 
}

addBookToLibrary(`Solo Leveling, Vol. 1`, `Chugong`, 322);
addBookToLibrary(`Everyone Else is a Returnee`, `Toika`, 378);
addBookToLibrary(`Mushoku Tensei: Jobless Reincarnation, Vol. 1`, `Rifujin na Magonote`, 408);
addBookToLibrary(`Lockwood & Co. The Screaming Staircase`, `Jonathan Stroud`, 440);
addBookToLibrary(`League of Legends: Realms of Runeterra (Official Companion)`, `Riot Games`, 256);

console.log(myLibrary);