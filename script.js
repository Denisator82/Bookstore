// Funktion zum Erstellen des Buch-HTMLs
function createBookHTML(book, indexBook) {
    return bookTemplate
        .replace('{{name}}', book.name)
        .replace('{{image}}', book.image)
        .replace('{{author}}', book.author)
        .replace('{{publishedYear}}', book.publishedYear)
        .replace('{{price}}', book.price.toFixed(2))
        .replace('{{likes}}', book.likes)
        .replace('{{genre}}', book.genre)
        .replace('{{likedClass}}', book.liked ? 'liked' : '')
        .replace(/{{index}}/g, indexBook);
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
        let bookHTML = createBookHTML(book, indexBook); // Erstelle HTML für das Buch
        let commentsHTML = renderComments(book.comments); // Kommentare für das Buch hinzufügen
        bookHTML = bookHTML.replace('{{comments}}', commentsHTML); // Füge die Kommentare zum Buch-HTML hinzu
        allBooksHTML += bookHTML; // Füge das Buch HTML zu der gesamten HTML-Struktur hinzu
    }
    contentRef.innerHTML = allBooksHTML; // Füge alle Bücher auf einmal zum DOM hinzu
}

// Funktionen für die Interaktion
function addComment(bookIndex) {
    let name = document.getElementById(`commentName-${bookIndex}`).value;
    let text = document.getElementById(`commentText-${bookIndex}`).value;
    if (name && text) {
        books[bookIndex].comments.push({ name: name, comment: text });
        renderBooks();
    }
}

function toggleLike(bookIndex) {
    const book = books[bookIndex];
    book.liked = !book.liked;
    if (book.liked) {
        book.likes++;
    } else {
        book.likes--;
    }
    renderBooks();
    console.log(book.liked)
}