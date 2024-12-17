const bookTemplate = `
    <div class="book">
        <h3>{{name}}</h3>
        <p>Author: {{author}}</p>
        <img src="{{image}}" alt="{{name}}">
        
        <p class="Likes">{{likes}}</p>
        <p>Year: {{publishedYear}}
        <p>Genre: {{genre}}</p>
        
        <h4 class="price">Price: {{price}} €</h4>
        <h4>Comments:</h4>
        <div class="comment-section">
            {{comments}}
        </div>
        
    </div>
`;

const commentTemplate = `
    <div class="comment">
        <h4>{{name}}:</h4>
        <p>{{comment}}</p>
    </div>
`;
