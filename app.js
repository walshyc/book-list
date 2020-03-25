// Book constructor
function Book(title, author, isbn) {
    this.title = title
    this.author = author
    this.isbn = isbn
}


// UI Constructor

function UI() {}

UI.prototype.addBook = function (book) {
    const list = document.getElementById('book-list')
    const row = document.createElement('tr')
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a class="delete" href="#">x</a></td>
    `
    list.appendChild(row)

}

UI.prototype.clear = function() {
    document.getElementById('title').value = ''
    document.getElementById('author').value = ''
    document.getElementById('isbn').value = ''
}

// Event Listeners
document.getElementById('book-form').addEventListener('submit', function (e) {
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const isbn = document.getElementById('isbn').value

    const book = new Book(title, author, isbn)

    const ui = new UI()

    // Add book to list
    ui.addBook(book)
    ui.clear()

    e.preventDefault()
})