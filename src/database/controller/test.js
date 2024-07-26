const mongoose = require("mongoose")
const nfl_page_db = require("../models/pages/nfl_page_db")


const dburi = "mongodb+srv://cn:12345web@web-dev-db.fhkedej.mongodb.net/?retryWrites=true&w=majority&appName=web-dev-db"
mongoose.connect(dburi).then(() => console.log("connected"))

let nfl_teams =  mongoose.model("NFL_T")
console.log(nfl_teams.countDocuments())
// for (let index = 0; index < nfl_teams.countDocuments.length; index++) {
    // const element = array[index];
    
// }

// nfl_page_db.create({
//     all_team_stats
// })