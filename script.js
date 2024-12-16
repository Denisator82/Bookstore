
function init() {
    insertBooks();
}

// Funktion, die alle Bücher auf der Startseite anzeigt
function insertBooks() {
    let contentRef = document.getElementById('booksGallery');
    contentRef.innerHTML = "";
    for (let indexBook = 0; indexBook < books.length; indexBook++) {
        contentRef.innerHTML += getBookHTML(indexBook);
    }
}

// Funktion, die das HTML eines Buchs zurückgibt
function getBookHTML(indexBook) {
    let book = books[indexBook];
    return `
        <div class="book">
            <h3>${book.name}</h3>
            <img src="${book.image}" alt="${book.name}">
            <p>Author: ${book.author}</p>
            <p>Year: ${book.publishedYear}</p>
            <p>Price: ${book.price} €</p>
            <p>Likes: ${book.likes}</p>
            <p>Genre: ${book.genre}</p>
            ${getCommentsHTML(book.comments)}
        </div>
    `;
}

// Funktion, die das HTML der Kommentare eines Buchs zurückgibt
function getCommentsHTML(comments) {
    if (!comments || comments.length === 0) {
        return '';
    }
    let commentsHTML = '<h4>Comments:</h4><div class="comment-section">';
    for (let i = 0; i < comments.length; i++) {
        commentsHTML += `
            <div class="comment">
                <p>${comments[i].name}:</p>
                <p>${comments[i].comment}</p>
            </div>
        `;
    }
    commentsHTML += '</div>'; // Schließe den Kommentar-Bereich
    return commentsHTML;
}
