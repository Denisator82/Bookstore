function init() {
    insertBooks();
};

function insertBooks() {
    let contentRef = document.getElementById('booksGallery');
    contentRef.innerHTML = "";

    for (let indexBook = 0; indexBook < books.length; indexBook++) {
        let bookHTML = bookTemplate.replace('{{name}}', books[indexBook].name)
            .replace('{{image}}', books[indexBook].image)
            .replace('{{author}}', books[indexBook].author)
            .replace('{{publishedYear}}', books[indexBook].publishedYear)
            .replace('{{price}}', books[indexBook].price.toFixed(2))
            .replace('{{likes}}', books[indexBook].likes)
            .replace('{{genre}}', books[indexBook].genre)
            .replace(/{{index}}/g,indexBook);

        // Lade und ersetze Kommentare
        let commentsHTML = '';
        for (let comment of books[indexBook].comments) {
            commentsHTML += commentTemplate.replace('{{name}}', comment.name)
                .replace('{{comment}}', comment.comment);
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
        insertBooks(); // Aktualisiere die Bücheranzeige
    } else {
        console.log('Name oder Kommentar fehlt!'); // Debug-Ausgabe
    }
};


