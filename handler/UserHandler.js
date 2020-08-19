const UserModel = require('../model/UserModel');

class UserHandler{
    constructor() {
        this.model = new UserModel();
    }

    create(req, res){
        let user = req.body;

        this.model.create(user)
            .then(function(data){
                res.send(JSON.stringify(data));
            }).catch(function(error){
                res.send(JSON.stringify({msg : error}));
            });
    }

    read(req, res){
        let id = req.params.user_id;

        this.model.read(id)
            .then(function(data){
                res.send(JSON.stringify(data));
            }).catch(function(error){
                res.send(JSON.stringify({msg : error}));
            });
    }

    readAll(req, res){
        let id = req.params.user_id;

        this.model.readAll()
            .then(function(data){
                res.send(JSON.stringify(data));
            }).catch(function(error){
                res.send(JSON.stringify({msg : error}));
            });      
    }

    update(req, res){
        let id = req.params.user_id;

        this.model.update(id, user)
            .then(function(data){
                res.send(JSON.stringify(data));
            }).catch(function(error){
                res.send(JSON.stringify({msg : error}));
            });
    }
  
    delete(req, res){
        let id = req.params.user_id;

        this.model.update(id)
            .then(function(data){
                res.send(JSON.stringify(data));
            }).catch(function(error){
                res.send(JSON.stringify({msg : error}));
            });
    }
}

module.exports = MemoHandler;