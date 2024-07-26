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
    let updates = await espn.update_news()
    // const updating = await NEWS.findOneAndUpdate({nfl: updates.nfl,mlb: updates.mlb,nba: updates.nba})
    console.log("update news successful")
    console.log(updates)
}
// update top teams
async function update_top_teams(sport,league,year) {
        try {
            let update = await get_stats.fetch_top_team(sport,league,year)
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

    // all_teams_stats_array = []
    // let nfl_page = NFL_PAGE.create({
    //     all_team_stats: []
    // }
    // )
}

async function update_mlb_page() {

}

async function update_nba_page() {

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
    mongoose.connect(dburi).then(() => console.log("connected"))

    // await update_home_news() // update news works
    mongoose.connection.close()
}
if (require.main == module){
    main()
}

module.exports = {
    start_auto_update
}