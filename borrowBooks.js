document.addEventListener("DOMContentLoaded", function () {
    const borrowTitleDropdown = document.getElementById("borrowTitle");
    const borrowStatus = document.getElementById("borrowStatus");
  
    // Load books from localStorage
    function loadBooks() {
      const books = JSON.parse(localStorage.getItem("books")) || [];
      borrowTitleDropdown.innerHTML = books
        .filter((book) => book.copies > book.borrowed) // Show only books available for borrowing
        .map(
          (book) =>
            `<option value="${book.title}">${book.title} (Available: ${
              book.copies - book.borrowed
            })</option>`
        )
        .join("");
    }
  
    // Borrow book logic
    document.getElementById("borrowBookForm").addEventListener("submit", function (e) {
      e.preventDefault();
  
      const selectedTitle = borrowTitleDropdown.value;
      const borrowerName = document.getElementById("borrowerName").value.trim();
  
      if (!selectedTitle || !borrowerName) {
        alert("Please fill out all fields.");
        return;
      }
  
      const books = JSON.parse(localStorage.getItem("books")) || [];
      const bookToBorrow = books.find((book) => book.title === selectedTitle);
  
      if (bookToBorrow) {
        if (bookToBorrow.borrowed < bookToBorrow.copies) {
          bookToBorrow.borrowed += 1;
          localStorage.setItem("books", JSON.stringify(books));
          borrowStatus.textContent = `You successfully borrowed "${selectedTitle}". Thank you, ${borrowerName}!`;
          loadBooks(); // Update dropdown
        } else {
          borrowStatus.textContent = `Sorry, no more copies of "${selectedTitle}" are available.`;
          borrowStatus.style.color = "red";
        }
      } else {
        borrowStatus.textContent = "Book not found.";
        borrowStatus.style.color = "red";
      }
    });
  
    loadBooks(); // Populate dropdown on page load
  });
  