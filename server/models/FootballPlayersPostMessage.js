import mongoose from 'mongoose';

const postPlayersSchema = new mongoose.Schema({
    creator: String,
    name: String,
    assists: String,
    goal: String,
    age: String,
    skills: [String],
    footballPosition: String,
    selectedFile: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

let FootballPlayersPostMessage = mongoose.model('FootballPlayersPostMessage', postPlayersSchema);
/*
let createAndSavePerson = function() {
    let janeFonda = new PlayersPostMessage({name: "Jane Fonda", age: 84,
        skills: ["eggs", "fish", "fresh fruit"], goal: 12});

    janeFonda.save(function(err, data) {
    });
};

createAndSavePerson();
*/
export default FootballPlayersPostMessage;