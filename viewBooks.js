const searchInput = document.getElementById("search");
const bookList = document.getElementById("bookList");

function loadBooks() {
  const books = JSON.parse(localStorage.getItem("books")) || [];
  bookList.innerHTML = books
    .map(
      (book, index) => `
      <li>
        <strong>${book.title}</strong> by ${book.author} (Genre: ${book.genre})
        <br>Copies: ${book.copies}, Borrowed: ${book.borrowed}
      </li>`
    )
    .join("");
}

searchInput.addEventListener("input", function () {
  const query = searchInput.value.toLowerCase();
  const books = JSON.parse(localStorage.getItem("books")) || [];
  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(query) ||
      book.author.toLowerCase().includes(query)
  );
  bookList.innerHTML = filteredBooks
    .map(
      (book) => `
      <li>
        <strong>${book.title}</strong> by ${book.author} (Genre: ${book.genre})
        <br>Copies: ${book.copies}, Borrowed: ${book.borrowed}
      </li>`
    )
    .join("");
});

document.addEventListener("DOMContentLoaded", loadBooks);
