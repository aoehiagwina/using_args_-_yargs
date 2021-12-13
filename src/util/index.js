
const MovieArray = [];

class Movie {
    constructor(title, actor = "Not Specified"){
        this.title = title;
        this.actor = actor;
    }
    
    add() {
        MovieArray.push(this);
        console.log(MovieArray);
    }
}

module.exports = Movie;