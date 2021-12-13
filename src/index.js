
const movie = require("./util");
const yargs = require("yargs");
// const { command } = require("yargs");
const args = yargs.argv;


const App = () => {
    switch (args.command) {
        case "add":
            console.log("Working");
            const newMovie = new movie (args.title, args.actor);
            newMovie.add();
            break;
        case "add_more":
            const newMovie1 = new movie (args.title1, args.actor1);
            const newMMovie2 = new movie (args.title2, args.actor2);
            newMovie1.add();
            newMMovie2.add();
    
        default:console.log ("Not Found")
            break;
    }
}

App();