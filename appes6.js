class Book {
    constructor(title, author, isbn) {
        this.title = title
        this.author = author
        this.isbn = isbn
    }
}

class UI {
    addBook(book) {
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

    showAlert(message, type) {
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

    deleteBook(target) {
        if (target.className === 'delete') {
            target.parentElement.parentElement.remove()
        }
    }

    clear() {
        document.getElementById('title').value = ''
        document.getElementById('author').value = ''
        document.getElementById('isbn').value = ''
    }

}

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

// Event Listener for Delete
document.getElementById('book-list').addEventListener('click', function(e) {
    const ui = new UI()
    ui.deleteBook(e.target)
    ui.showAlert('Book has been deleted', 'success')
    e.preventDefault()
})