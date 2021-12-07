import mongoose from 'mongoose';

const postPlayersSchema = new mongoose.Schema({
    creator: String,
    name: String,
    assists: String,
    points: String,
    age: String,
    skills: [String],
    position: String,
    selectedFile: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

let PlayersPostMessage = mongoose.model('PlayersPostMessage', postPlayersSchema);
/*
let createAndSavePerson = function() {
    let janeFonda = new PlayersPostMessage({name: "Jane Fonda", age: 84,
        skills: ["eggs", "fish", "fresh fruit"], goal: 12});

    janeFonda.save(function(err, data) {
    });
};

createAndSavePerson();
*/
export default PlayersPostMessage;