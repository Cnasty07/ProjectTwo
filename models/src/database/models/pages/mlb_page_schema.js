const mongoose = require('mongoose');
const mlb_top_players = require("../athletes/mlb_top_players_schema");
const single_team_record_schema = require('../teams/all_teams/single_team_record_schema');
const top_team_players_db = require('../teams/top_team_players_schema');
const Schema = mongoose.Schema;



// TODO: fix stats api and add to schema per document entry
const MLB = new Schema({
    all_team_stats: [single_team_record_schema],
    top_team_stats: single_team_record_schema,
    top_player_stats: mlb_top_players,
    top_team_player_stats: mlb_top_players
}, {timestamps: true})

module.exports = mongoose.model("MLB",MLB)