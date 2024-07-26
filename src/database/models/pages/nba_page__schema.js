const mongoose = require("mongoose");
const single_team_record_schema = require("../teams/all_teams/single_team_record_schema");
const Schema = mongoose.Schema;


// TODO: fix stats api and add to schema per document entry
const NBA = new Schema({
    all_team_stats: [single_team_record_schema], // array of single teams
    top_team: single_team_record_schema, // only one team(top called)
    top_players: nba_top_players, // 
    top_team_players_stats: nba_top_players
}, {timestamps : true})

module.exports = mongoose.model("NBA", NBA)