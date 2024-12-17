function insertBooks() {
    let contentRef = document.getElementById('booksGallery');
    contentRef.innerHTML = "";

    for (let indexBook = 0; indexBook < books.length; indexBook++) {
        let bookHTML = bookTemplate.replace('{{name}}', books[indexBook].name)
            .replace('{{image}}', books[indexBook].image)
            .replace('{{author}}', books[indexBook].author)
            .replace('{{publishedYear}}', books[indexBook].publishedYear)
            .replace('{{price}}', books[indexBook].price.toFixed)
            .replace('{{likes}}', books[indexBook].likes)
            .replace('{{genre}}', books[indexBook].genre)
            .replace('{{index}}', indexBook);

        // Lade und ersetze Kommentare
        let commentsHTML = '';
        for (let indexComments = 0; indexComments < books[indexBook].comments.length; indexComments++) {
            commentsHTML += commentTemplate.replace('{{name}}', books[indexBook].comments[indexComments].name)
                .replace('{{comment}}', books[indexBook].comments[indexComments].comment);
        }
        bookHTML = bookHTML.replace('{{comments}}', commentsHTML);

        contentRef.innerHTML += bookHTML;
    }
};

function addComment(bookIndex) {
    let name = document.getElementById(`commentName-${bookIndex}`).value;
    let text = document.getElementById(`commentText-${bookIndex}`).value;

    if (name && text) {
        books[bookIndex].comments.push({ name: name, comment: text });
        insertBooks(); // Aktualisiere die Bücheranzeige, um den neuen Kommentar zu zeigen
    }
};

function init() {
    insertBooks();
};