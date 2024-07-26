const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const nfl_top_players = require("../athletes/nfl_top_players_schema");
const single_team_record_schema = require("../teams/all_teams/single_team_record_schema");
const top_team_players_db = require("../teams/top_team_players_schema");
//sub documents

// TODO: fix stats api and add to schema per document entry

// data to be displayed on nfl page
const nfl = new Schema({
    all_team_stats: [{
        team_id: Number,
        team_name: String,
        team_record: {
            wins: Number,
            losses: Number,
            alt: Number
        }
    }], // gets array of single nfl teams
    top_player_stats: [{
        offensive: {
            passing: {
                name: String,
                yards: Number
            },
            rushing: {
                name: String,
                yards: Number
            },
            receiving: {
                name: String,
                yards: Number
            }
        },
        defensive: {
            tackles: {
                name:String,
                tackles: Number,
            },
            sacks: {
                name: String,
                sacks: Number
            },
            interceptions: {
                name: String,
                int: Number
            }
        }
    }], // gets top 6 players
    top_team_stats:{
        team_id: Number,
        team_name: String,
        team_record: {
            wins: Number,
            losses: Number,
            alt: Number
        }
    },
    top_team_player_stats: {
        offense: Array,
        defense: Array
    },
    
},
    { timestamps : true}
)

/* */

module.exports = mongoose.model("NFL_DB",nfl)