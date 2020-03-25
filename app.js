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

UI.prototype.clear = function () {
    document.getElementById('title').value = ''
    document.getElementById('author').value = ''
    document.getElementById('isbn').value = ''
}

UI.prototype.showAlert = function (message, type) {
    const div = document.createElement('div')
    div.className = `alert ${type}`
    div.appendChild(document.createTextNode(message))

    const container = document.querySelector('.container')
    const form = document.getElementById('book-form')

    container.insertBefore(div, form)

    setTimeout(function () {
        document.querySelector('.alert').remove()
    }, 3000)
}

// Event Listeners
document.getElementById('book-form').addEventListener('submit', function (e) {
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const isbn = document.getElementById('isbn').value

    const book = new Book(title, author, isbn)

    const ui = new UI()

    // Validate 
    if (title === '' || author === '' || isbn === '') {
        // Error
        ui.showAlert('Please fill in all fields!', 'error')
    } else {
        // Add book to list
        ui.addBook(book)
        ui.showAlert('Your Book as been added', 'success')
        ui.clear()
    }
    e.preventDefault()
})