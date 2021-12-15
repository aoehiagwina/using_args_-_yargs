//import the utilities value from util/index.js
const {Movie, pullMovieData} = require("./util");
//import yargs from yargs
const yargs = require("yargs");
//assign yargs to argv
const args = yargs.argv;


const App = () => {
    switch (args.command) {
        case "add":
            console.log("Working");
            const newMovie = new movie (args.title, args.actors);
            newMovie.add();
            newMovie.list();
            newMovie.save();
            break;
        case "add_more":
            const newMovie1 = new movie (args.title1, args.actors1);
            const newMMovie2 = new movie (args.title2, args.actors2);
            newMovie1.add();
            newMMovie2.add();
            newMovie1.save();
            newMovie2.save();
            newMovie1.list();
    
        default:
            console.log ("Not Found")
            break;
    }
};

App();