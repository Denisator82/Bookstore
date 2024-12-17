const bookTemplate = `
    <div class="book">
        <h3>{{name}}</h3>
        <img src="{{image}}" alt="{{name}}">
        <p>Author: {{author}}</p>
        <p>Year: {{publishedYear}}</p>
        <p>Price: {{price}} €</p>
        <p>Likes: {{likes}}</p>
        <p>Genre: {{genre}}</p>
        <h4>Comments:</h4>
        <div class="comment-section">
            {{comments}}
        </div>
        
    </div>
`;

const commentTemplate = `
    <div class="comment">
        <p>{{name}}:</p>
        <p>{{comment}}</p>
    </div>
`;
