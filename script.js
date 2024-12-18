function init() {
    renderBooks();
};

function renderBooks() {
    let contentRef = document.getElementById('booksGallery');
    contentRef.innerHTML = ""; // Galerie leeren

    for (let indexBook = 0; indexBook < books.length; indexBook++) {
        let book = books[indexBook];
        let bookHTML = bookTemplate
            .replace('{{name}}', book.name)
            .replace('{{image}}', book.image)
            .replace('{{author}}', book.author)
            .replace('{{publishedYear}}', book.publishedYear)
            .replace('{{price}}', book.price.toFixed(2))
            .replace('{{likes}}', book.likes)
            .replace('{{genre}}', book.genre)
            .replace(/{{index}}/g, indexBook)
            .replace('{{liked ? "liked" : ""}}', books[indexBook].liked ? 'liked' : '');

        // Kommentare einfügen
        let commentsHTML = "";
        for (let indexComment = 0; indexComment < book.comments.length; indexComment++) {
            let comment = book.comments[indexComment];
            commentsHTML += commentTemplate
                .replace('{{name}}', comment.name)
                .replace('{{comment}}', comment.comment);
        }
        bookHTML = bookHTML.replace('{{comments}}', commentsHTML);

        // HTML zum DOM hinzufügen
        contentRef.innerHTML += bookHTML;
    }
}


function addComment(bookIndex) {
    let name = document.getElementById(`commentName-${bookIndex}`).value;
    let text = document.getElementById(`commentText-${bookIndex}`).value;

    if (name && text) {
        books[bookIndex].comments.push({ name: name, comment: text });
        renderBooks(); // Aktualisiere die Bücheranzeige
    }
};

function toggleLike(bookIndex) {
    const book = books[bookIndex];

    // Toggle der liked-Status
    book.liked = !book.liked;

    // Anzahl der Likes anpassen
    if (book.liked) {
        book.likes++;
    } else {
        book.likes--;
    }

    // Bücher neu rendern
    renderBooks();
}