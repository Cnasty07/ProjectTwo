const get_all_stats = require("./get/get_stats")
const get_all_news = require("./get/get_news")
const get_all_teams = require("./get/get_teams")
const mongoose = require("mongoose")



const dburi = "mongodb+srv://cn:12345web@web-dev-db.fhkedej.mongodb.net/?retryWrites=true&w=majority&appName=web-dev-db"



async function update_stats() {
    let new_stats = await get_all_stats.fetch_top_sport_player()
}
async function update_news(){
    let new_news = await get_all_news.new_fetch()
    return new_news
}

async function fetch_all_teams(sport,league){
    let new_teams = get_all_teams.get_teams_and_id()

    return new_teams
}
async function fetch_top_team_records(sport,league){
    let new_records = get_all_stats.fetch_top_team_record(sport,league)
    return new_records
}

//auto updates all api callss 



async function main() {
    
    // await start_auto_update()

    // let news = await update_news()
    // console.log(news)

    // let teams = await fetch_all_teams()
    // console.log(teams)
    let top_team = await fetch_top_team_records("basketball","nba")
    console.log(top_team)

}
if (require.main == module){
    main()
}


module.exports = {
    update_news,
    update_stats,
    fetch_top_team_records,

}