const bookTemplate = `
    <div id="book-{{Id}}" class="book">
        <h3>{{name}}</h3>
            <p>Author: {{author}}</p>
            <img class="bookImage" src="{{image}}"alt="{{name}}">
            <div class="Likes">
            <p>Likes: {{likes}}</p>
            <button onclick="toggleLike({{index}})" class="like-btn {{likedClass}}">
                <img src="img/heart-filled.svg" alt="Filled Heart" class="heart-icon filled" />
                <img src="img/heart-empty.svg" alt="Empty Heart" class="heart-icon empty" />
            </button>
        </div>
        <p>Year: {{publishedYear}}</p>
        <p>Genre: {{genre}}</p>
        <h4 class="price">Price: {{price}}€</h4>
        <h4>Comments:</h4>
        <div class="comment-section">
            {{comments}}
        </div>
        <div class="comment-form">
            <input type="text" id="commentName-{{index}}" placeholder="Dein Name" />
            <input type="text" id="commentText-{{index}}" placeholder="Dein Kommentar">
            <button onclick="addComment({{index}})">Kommentar hinzufügen</button>
        </div>
    </div>
`;

const commentTemplate = `
    <div class="comment">
        <h4>{{name}}:</h4>
        <p>{{comment}}</p>
    </div>
`;
