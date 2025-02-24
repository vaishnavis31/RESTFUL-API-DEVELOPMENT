document.addEventListener("DOMContentLoaded", function () {
    const books = JSON.parse(localStorage.getItem("books")) || [];
    const totalBooks = books.length;
    const borrowedBooks = books.reduce((total, book) => total + book.borrowed, 0);
    document.getElementById("summaryContent").innerHTML = `
      Total Books: ${totalBooks}<br>
      Books Borrowed: ${borrowedBooks}
    `;
  });
  