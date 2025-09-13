const myLibrary = [];
function Book(title, author, pages, read) {
    this.id = crypto.randomUUID(),
    this.name = title,
    this.author = author,
    this.pages = pages,
    this.read = read

}
function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}
addBookToLibrary('John Doe', 'C.J.Williams',325,false);
addBookToLibrary('Overwhelming adventures and treasures', 'Gregory Pipe', 450, true)

function displayEachBook() {
    myLibrary.forEach(element => {
        document.body.style.display = 'flex';
        document.body.style.gap = '10px';
        document.body.style.flexWrap = 'wrap';
        const container = document.createElement('div');
        container.style.width = '150px';
        container.style.height ='250px';
        container.style.color ='white';
        container.style.backgroundColor = 'gray';
        container.style.borderRadius = '10px';
        container.style.display ='flex';
        container.style.flexDirection = 'column';
        container.style.justifyContent = 'center';
        container.style.alignItems ='center';
        const bookTitle = document.createElement('h3');
        bookTitle.textContent = element.name;
        const bookAuthor = document.createElement('h3');
        bookAuthor.textContent = element.author;
        const numberOfPages = document.createElement('p');
        numberOfPages.textContent = element.pages;
        const isRead = document.createElement('input');
        isRead.type = 'checkbox';
        isRead.textContent = element.read;
        if(isRead.textContent === 'true') {
            isRead.checked = true;
        }
        document.body.appendChild(container);
        container.appendChild(bookTitle);
        container.appendChild(bookAuthor);
        container.appendChild( numberOfPages);
        container.appendChild(isRead)

    })
}
displayEachBook();