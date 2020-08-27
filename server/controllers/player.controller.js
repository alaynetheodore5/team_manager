console.log("player.controller.js");

const Player = require("../models/player.model");

class PlayerController {
    create(req, res) {
        const newPlayer = new Player(req.body);
        newPlayer.save()    
            .then( () => res.json(newPlayer) )
            .catch( errors => res.json(errors) );
    }

    getAll(req, res) {
        Player.find()
            .then( player => res.json(player) )
            .catch( errors => res.json(errors) );
    }

    getOne(req, res) {
        Player.findOne( {_id: req.params._id} )
            .then( player => res.json(player) )
            .catch( errors => res.json(errors) );
    }

    // update(req, res) {
    //     Player.findByIdAndUpdate( {_id: req.params._id}, req.body, {runValidators: true} )
    //         .then( () => res.json({msg: "ok"}) )
    //         .catch( errors => res.json(errors) );
    // }

    remove(req, res) {
        Player.findByIdAndRemove( {_id: req.params._id} )
        .then( () => res.json({msg: "ok"}) )
        .catch( errors => res.json(errors) );
    }
}

module.exports = new PlayerController();
