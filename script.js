// Funktion zum Erstellen des Buch-HTMLs
function createBookHTML(book, indexBook) {
    return bookTemplate
        .replace('{{Id}}', book.id)
        .replace('{{name}}', book.name)
        .replace('{{image}}', book.image)
        .replace('{{author}}', book.author)
        .replace('{{publishedYear}}', book.publishedYear)
        .replace('{{price}}', book.price.toFixed(2))
        .replace('{{likes}}', book.likes)
        .replace('{{genre}}', book.genre)
        .replace('{{likedClass}}', book.liked ? 'liked' : '')
        .replace('{{comments}}', ''); // Kommentare separat rendern
}

// Funktion zum Rendern der Kommentare eines Buches
function renderComments(comments) {
    let commentsHTML = "";
    for (let indexComment = 0; indexComment < comments.length; indexComment++) {
        let comment = comments[indexComment];
        commentsHTML += commentTemplate
            .replace('{{name}}', comment.name)
            .replace('{{comment}}', comment.comment);
    }
    return commentsHTML;
}

//Hauptfunktionen
function init() {
    renderBooks();
};

function renderBooks() {
    let contentRef = document.getElementById('booksGallery');
    contentRef.innerHTML = ""; // Galerie leeren

    let allBooksHTML = ""; // Hier sammeln wir das gesamte HTML

    for (let indexBook = 0; indexBook < books.length; indexBook++) {
        let book = books[indexBook];
        let bookHTML = createBookHTML(book, indexBook) // Erstelle HTML für das Buch
            .replace('{{comments}}', renderComments(book.comments)); // Kommentare hinzufügen
        allBooksHTML += `<div id="book-${book.id}" class="book">${bookHTML}</div>`;
    }
    contentRef.innerHTML = allBooksHTML; // Füge alle Bücher auf einmal zum DOM hinzu
}

function addComment(bookIndex) {
    const name = document.getElementById(`commentName-${bookIndex}`).value;
    const text = document.getElementById(`commentText-${bookIndex}`).value;

    if (name && text) {
        // Neuer Kommentar wird zu den Daten hinzugefügt
        books[bookIndex].comments.push({ name: name, comment: text });

        // Aktualisiert nur den Kommentarbereich des Buches
        const commentsElement = document.querySelector(`#book-${books[bookIndex].id} .comments`);
        commentsElement.innerHTML = renderComments(books[bookIndex].comments);

        // Felder leeren
        document.getElementById(`commentName-${bookIndex}`).value = "";
        document.getElementById(`commentText-${bookIndex}`).value = "";
    }
}

// Funktionen für die Interaktion
function toggleLike(bookIndex) {
    const book = books[bookIndex];
    book.liked = !book.liked;
    book.likes += book.liked ? 1 : -1;

    // Nur das betroffene Buch aktualisieren
    const bookElement = document.querySelector(`#book-${book.id}`);
    const updatedBookHTML = createBookHTML(book, bookIndex)
        .replace('{{comments}}', renderComments(book.comments));
    bookElement.outerHTML = updatedBookHTML; // Ersetze das Buch-HTML
}
