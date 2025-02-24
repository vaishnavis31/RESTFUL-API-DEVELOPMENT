document.getElementById("addBookForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const title = document.getElementById("bookTitle").value.trim();
    const author = document.getElementById("bookAuthor").value.trim();
    const genre = document.getElementById("bookGenre").value.trim();
    const copies = parseInt(document.getElementById("bookCopies").value);
  
    if (!title || !author || !genre || isNaN(copies)) {
      alert("Please fill in all fields correctly.");
      return;
    }
  
    const newBook = { title, author, genre, copies, borrowed: 0 };
  
    const books = JSON.parse(localStorage.getItem("books")) || [];
    books.push(newBook);
    localStorage.setItem("books", JSON.stringify(books));
  
    alert("Book added successfully!");
    this.reset();
  });
  