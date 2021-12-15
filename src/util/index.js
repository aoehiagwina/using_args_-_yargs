const fs = require("fs");
let MovieArray;

const pullMovieData = () => {
    try{
        //convert json into js object from predefirned storage location
        MovieArray = JSON.parse(fs.readFileSync("./storage.json"));
    } catch (error) {
        MovieArray = [];
    }
};


class Movie {
    constructor(title, actors = "Not Specified"){
        this.title = title;
        this.actors = actors;
    }
    
    add() {
        MovieArray.push(this);
    }
    list() {
        console.log(MovieArray);
    }
    save() {
        //This code coverts and save js as json in the define storage location 
        fs.writeFileSync("./storage.json", JSON.stringify)
    }
}

module.exports = {Movie, pullMovieData};