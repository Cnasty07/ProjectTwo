const mongoose = require("mongoose")
// const NFL_PAGE = require("../models/pages/nfl_page_db")
const espn = require("../../Espn_apis/fetch_wrapper")
const NEWS = require("../models/pages/news_page_schema")
const NFL = require("../models/pages/nfl_page_db")
// const NBA = require("../models/pages/nba_page_schema")
// const MLB = require("../models/pages/mlb_page_schema")


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
    // get top team
    let update_top_team = await espn.update_top_team("football","nfl").then(console.log)
    // get top team players
    let update_top_team_players = await espn.update_top_team_players("football","nfl")
    // get top players
    let update_top_players = await espn.update_top_players("football","nfl","2023")
    // get all teams records
    let update_team_records = await espn.fetch_top_team_records("football","nfl")
    // all_teams_stats_array = []
    // let nfl_page = NFL_PAGE.create({
    //     all_team_stats: []
    // }
    // )
}

async function create_init() {
    //nfl 
    // let nfl_init = await NFL.create({
        // all_team_stats: [{
        //     team_id: 100,
        //     team_name: "Temp",
        //     team_record: {
        //         wins: 1,
        //         losses: 1,
        //         alt: 0
        //     }
        // }], // gets array of single nfl teams
        // top_player_stats: {
        //     offensive: {
        //         passing: {
        //             name: "Temp1",
        //             yards: 100
        //         },
        //         rushing: {
        //             name: "rtemp1",
        //             yards: 1002
        //         },
        //         receiving: {
        //             name: "retemp1",
        //             yards: 870
        //         }
        //     },
        //     defensive: {
        //         tackles: {
        //             name: "ttemp1",
        //             tackles: 100,
        //         },
        //         sacks: {
        //             name: "stemp1",
        //             sacks: 20
        //         },
        //         interceptions: {
        //             name: "itemp1",
        //             int: 10
        //         }
        //     }
        // }, // gets top 6 players
        // top_team_stats: {
        //     team_id: 100,
        //     team_name: "Temp_name",
        //     team_record: {
        //         wins: 1,
        //         losses: 1,
        //         alt: 0
        //     }
        // },
        // top_team_player_stats: {
        //     offense: ["tempnameof",100],
        //     defense: ["tempnamedef",99]
        // },

    // })
    // console.log(nfl_init)

    //
}

async function update_mlb_page() {

}

async function update_nba_page() {

}

async function start_auto_update() {
    mongoose.connect(dburi).then(() => console.log("connected"))
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
    mongoose.connect(dburi).then(() => console.log("connected"))
    // await update_nfl_page()
    // await create_init()
    // await update_home_news() // update news works
    mongoose.connection.close()
}
if (require.main == module){
    main()
}

module.exports = {
    start_auto_update
}