// Objects:
// 1. Create a User object that contains properties for name, age, and email. Include methods to greet (returns a greeting message) and updateEmail.

const user = {
    name: "Sona",
    age: 29,
    email: "arakelovasona@gmil.com",
    greet: function() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    },
    updateEmail: function(newEmail) {
        this.email = newEmail;
        return newEmail
    }
};

console.log(user.greet());
console.log(user.updateEmail("newalice@example.com"));




// 2. Create an array of workers objects with properties for name and age. Write a function that takes an age as a parameter and returns an array of users older than that age.
const workers = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 22 },
  { name: "Max", age: 47 }
];

function filterUsersByAge(minAge) {
    const ages = workers.map(worker => worker.age).filter(x => x>minAge);
    return ages;
}

const olderUsers = filterUsersByAge(24);
console.log(olderUsers);



// 3. Modify the book objects to include a pagesRead property. Write a function that calculates and returns the total number of pages read from all books.
const collection = [
  { title: "The Great Gatsby", pages: 180, pagesRead: 100 },
  { title: "1984", pages: 328, pagesRead: 50 },
  { title: "To Kill a Mockingbird", pages: 281, pagesRead: 281 }
];

function countTotalPagesRead() {
  let books = collection.map(book=> book.pagesRead);
  return books.reduce((a,b)=> a+b,0)
}

 const totalRead = countTotalPagesRead();
 console.log(totalRead);
 

// 4. Create an array of book objects, where each book has properties such as title, author, pages, and isRead. 
//    Write a function to add a new book and a function to list all books with their read status.
const library = [
    {title: "The Alchemist", author: 'Paulo Coelho', pages: 453 , isRead: 111},
    {title:  "Fahrenheit 451", author: 'Ray Bradbury', pages: 243 , isRead: 222},
    {title:  "The Book of Secrets", author: 'Osho', pages: 356 , isRead: 234}


];

function addNewBook(title, author, pages, isRead) {
    if (title && author && pages !== undefined && isRead !== undefined) {
        const newBook = { title, author, pages, isRead }; 
        library.push(newBook); 
        return newBook; 
    }
    return undefined; 
}


function listBooks() {
 library.forEach(book => {
    book.read = book.pages === book.isRead ? 'yes': 'no';
});
    library.forEach(book => {
        console.log(`Title: ${book.title} Author: ${book.author} Pages: ${book.pages} Read: ${book.read}`)
      })
    
  
}

addNewBook("The Great Gatsby", "F. Scott Fitzgerald", 180, 132);
addNewBook("1984", "George Orwell", 328, 245);
listBooks(); // Title: example, Author: example, Pages: example, Read: true/false || yes/no




// 5. Extra: Grouping Library Functions into One Object
const librarySystem = {
    books: [],

    addNewBook(book) {
        if (book.title && book.author && book.year && book.genre !== undefined) {
            this.books.push({ ...book, isAvailable: true });
            return book;
        }
        return undefined; 
    },

    listBooks() {
        this.books.forEach(book => {
            const readStatus = book.isAvailable ? 'yes' : 'no';
            console.log(`Title: ${book.title}, Author: ${book.author}, Pages: ${book.pages}, Read: ${readStatus}`);
        });
    },

    getBookById(bookId) {
        return this.books[bookId] || undefined; 
    },

    updateBook(bookId, updatedBook) {
        if (this.books[bookId]) {
            this.books[bookId] = { ...this.books[bookId], ...updatedBook }; 
            return this.books[bookId];
        }
        return undefined; 
    },

    deleteBook(bookId) {
        if (this.books[bookId]) {
            this.books.splice(bookId, 1);
            return true;
        }
        return false; 
    },

    getBooksByAvailableStatus(status) {
        return this.books.filter(book => book.isAvailable === status); 
    }
};




// Example usage:
// librarySystem.books // book[]
// librarySystem.listBooks(); :print in console: 'Title: string, Author: string, Pages: number, Read: true/false || yes/no'
// librarySystem.addNewBook(book); // :newBook
// librarySystem.getBookById(bookId); // :book | undefined
// librarySystem.updateBook(bookId, book); // :book
// librarySystem.deleteBook(bookId); // :true/false
// librarySystem.getBooksByAvailableStatus(status); // :book[] returns all available or unavailable books according to the filter

// Book Entity (shape of a book)
// book ={
//   title: string;
//   author: string;
//   year: number;
//   genre: string;
//   isAvailable: boolean;
// }



