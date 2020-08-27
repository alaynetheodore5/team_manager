console.log("player.routes.js");

const Players = require("../controllers/player.controller");

module.exports = app => {
    app.get("/api/players/list", Players.getAll);
    app.post("/api/players/addplayer", Players.create);
    app.get("/api/players/:_id", Players.getOne);
    // app.put("/api/players/:_id", Players.update);
    app.delete("/api/players/:_id", Players.remove);
}