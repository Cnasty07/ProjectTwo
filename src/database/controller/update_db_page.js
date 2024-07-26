const mongoose = require("mongoose")
const espn = require("../../Espn_apis/fetch_wrapper")
const NEWS = require("../models/pages/news_page_schema")
const NFL = require("../models/pages/nfl_page_db")
const NBA = require("../models/pages/nba_page__schema")
const MLB = require("../models/pages/mlb_page_schema")


const dburi = "mongodb+srv://cn:12345web@web-dev-db.fhkedej.mongodb.net/?retryWrites=true&w=majority&appName=web-dev-db"
mongoose.connect(dburi).then(() => console.log("connected"))

// update home news
async function update_home_news() {
    try {
        let updates = await espn.update_news().then((response) => console.log(response))
        console.log("update news successful")
        const updating = await NEWS.findOneAndUpdate({},{nfl: updates.nfl,mlb: updates.mlb,nba: updates.nba})
        
        return updating
    } catch (error) {
        console.log("news fetch unsuccessful")
    }
}
// update top teams
async function update_top_teams(sport,league,year) {
        try {
            let update = await espn.fetch_update_top_teams(sport,league,year)
            // const add_top_team_status = await NFL.findOneAndUpdate({},{})

        } catch {
            console.log("top team update error")
        }
        
        console.log(update)
    }
// updates top sport players db
async function update_top_sport_players() {
    try {

    } catch {

    }

}

async function update_nfl_page(){
    try {
    // get top team
    // let update_top_team = await espn.fetch_update_top_team_records("football","nfl")
    // console.log(update_top_team.team_name)
    // let update_nfl_top_team = await NFL.findOneAndUpdate({},{top_team_stats: update_top_team})
    
    // get top team players
    let update_top_team_players = await espn.update_top_team_players("football","nfl")
    console.log(update_top_team_players)
    const update_top_team_playerss = await NFL.findOneAndUpdate({},{ top_team_player_stats: {
        offense : [update_top_team_players.offense[0],update_top_team_players.offense[1]],
        defense: [update_top_team_players.defense[0],update_top_team_players.defense[1]]
    }})
    console.log(update_top_team_playerss)
    // get top players
    // let update_top_players = await espn.fetch_update_top_sport_players("football","nfl",2023)
    // console.log(update_top_players)
    // const nfl_top_players = await NFL.findOneAndUpdate({},{top_player_stats: {
    //     offensive: {
    //         passing: {
    //             name: update_top_players.offense[0][0],
    //             yards: update_top_players.offense[0][1]
    //         },
    //         rushing: {
    //             name: update_top_players.offense[1][0],
    //             yards: update_top_players.offense[1][1],
    //         },
    //         receiving: {
    //             name: update_top_players.offense[2][0],
    //             yards: update_top_players.offense[2][1]
    //         }
    //     },
    //     defensive: {
    //         tackles: {
    //             name: update_top_players.defense[0][0],
    //             tackles: update_top_players.defense[0][1]
    //         },
    //         sacks: {
    //             name: update_top_players.defense[1][0],
    //             sacks: update_top_players.defense[1][1]
    //         },
    //         interceptions: {
    //             name: update_top_players.defense[2][0],
    //             int: update_top_players.defense[2][1]
    //         },
    //     }
    // }});

    // let update_team_records = await espn.fetch_update_all_teams_records("football","nfl") // gets all team array
    // console.log(update_team_records)
    // let nfl_page = await NFL.findOneAndUpdate({},{all_team_stats: update_team_records})
    // console.log(nfl_page)
    // let nfl_page = await NFL.create({
    //     all_team_stats: [{
    //         team_id: 100,
    //         team_name: "Temp_name",
    //         team_record: {
    //             wins: 1,
    //             losses: 1,
    //             ties: 0
    //         }
    //     }], // gets array of single nfl teams
    //     top_player_stats: {
    //         offensive: {
    //             passing: {
    //                 name: "Temp1",
    //                 yards: 100
    //             },
    //             rushing: {
    //                 name: "rtemp1",
    //                 yards: 1002
    //             },
    //             receiving: {
    //                 name: "retemp1",
    //                 yards: 870
    //             }
    //         },
    //         defensive: {
    //             tackles: {
    //                 name: "ttemp1",
    //                 tackles: 100,
    //             },
    //             sacks: {
    //                 name: "stemp1",
    //                 sacks: 20
    //             },
    //             interceptions: {
    //                 name: "itemp1",
    //                 int: 10
    //             }
    //         }
    //     }, // gets top 6 players
    //     top_team_stats: {
    //         team_id: 100,
    //         team_name: "Temp_name",
    //         team_record: {
    //             wins: 1,
    //             losses: 1,
    //             ties: 0
    //         }
    //     },
    //     top_team_player_stats: {
    //         offense: ["tempnameof",100],
    //         defense: ["tempnamedef",99]
    //     },
    //     });
    } catch (error) {
        console.log(error)
    }
}
async function update_mlb_page() {
    //fetch all new updates

    // add to db

    // const MLB_update = await MLB.findOne({_id:1})({
    //     all_team_stats: [{
    //         team_id: 1,
    //         team_name: "tempname",
    //         team_record: {
    //             wins: 1,
    //             losses: 0,
    //             alt: 1
    //         }
    //     }],
    //     top_team_stats: {
    //         team_id: 1,
    //         team_name: "tempname",
    //         team_record: {
    //             wins: 1,
    //             losses: 0,
    //             alt: 1
    //         }
    //     },
    //     top_player_stats: {
    //         offensive: {
    //             batting_avg: {
    //                 name: "tempbat",
    //                 avg: 1,
    //             },
    //             home_runs: {
    //                 name: "temphr",
    //                 hr: 10
    //             },
    //             runs_in: {
    //                 name: "tempRI",
    //                 rbi: 30
    //             }
    //         },
    //         defensive: {
    //             wins: {
    //                 name: "temppitchwins",
    //                 w: 23,
    //             },
    //             earned_run_avg: {
    //                 name: "tempERA",
    //                 era: 30
    //             },
    //             saves: {
    //                 name: "tempsave",
    //                 sv: 20
    //             },
    //         }
    //     },
    //     top_team_player_stats: {
    //         offense: ["tempof",100],
    //         defense: ["tempdef",20]
    //     }
    // })
}

async function update_nba_page() {
    //nba
    // let nba_update = await NBA.create({
    //     all_team_stats: [{
    //         team_id: 100,
    //             team_name: "Temp",
    //             team_record: {
    //                 wins: 1,
    //                 losses: 1,
    //                 alt: 0
    //             }
    //     }], // array of single teams
    //     top_team: {
    //         team_id: 100,
    //             team_name: "Temp",
    //             team_record: {
    //                 wins: 1,
    //                 losses: 1,
    //                 alt: 0
    //             }
    //     }, // only one team(top called)
    //     top_players: {
    //         offensive: {
    //             points: {
    //                 name: "tempNBA",
    //                 pts: 50
    //             },
    //             assists: {
    //                 name: "tempa",
    //                 ast: 11
    //             },
    //             threepointersmade: {
    //                 name: "Curry",
    //                 threepointers: 30
    //             }
    //         },
    //         defensive: {
    //             rebounds: {
    //                 name: "vic",
    //                 reb: 40,
    //             },
    //             blocks: {
    //                 name: "wemby",
    //                 blk: 20
    //             },
    //             steals: {
    //                 name: "lebron",
    //                 stl: 100
    //             },
    //         }
    //     }, //
    //     top_team_players_stats: {
    //         offense: ["tempOf",100],
    //         defense: ["tempDef",100]
    //     }
    // })
}

async function start_auto_update() {
    // setInterval(async () => {
    //     let sports = [["football","nfl","2023"],["baseball","mlb","2024"],["basketball","nba","2024"]]
    //     let news = await update_home_news()
    //     // for (let index = 0; index < array.length; index++) {
    //     //     let top_players = await update_top_players()
    //     //     let top_team_players = await update_top_team_players()
    //     //     let all_teams = await update_all_teams()
    //     // }


    //     console.log(news)
    // }, 30000);
    // mongoose.connection.close()
}

async function main() {
    // mongoose.connect(dburi).then(() => console.log("connected")) // comment out when deploying
    await update_nfl_page()
    // await update_home_news() // update news works
    // mongoose.connection.close()
}
if (require.main == module){
    main()
}

module.exports = {
    start_auto_update
}