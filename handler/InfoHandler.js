const InfoModel = require('../model/InfoModel');

class InfoHandler {
    constructor() {
        this.model = new InfoModel();
    }

    create(req, res) {
        let infos = req.body;

        this.model.create(infos)
            .then(function (data) {
                res.send(JSON.stringify(data));
            }).catch(function (error) {
                res.send(JSON.stringify({ msg: error }));
            });
    }

    read(req, res) {
        let user_id = req.params.user_id;

        this.model.read(user_id)
            .then(function (data) {
                res.send(JSON.stringify(data));
            }).catch(function (error) {
                res.send(JSON.stringify({ msg: error }));
            });
    }

    readAll(req, res) {  
        this.model.readAll()
            .then(function (data) {
                data.forEach(function(detail){
                    // 읽어온 객체 차례대로 넣기.
                    console.log(detail.name);
                 });
                res.send('read ok');
            });  
    }

    update(req, res) {
        let id = req.params.user_id;

        this.model.update(id, infos)
            .then(function (data) {
                res.send(JSON.stringify(data));
            }).catch(function (error) {
                res.send(JSON.stringify({ msg: error }));
            });
    }

    delete(req, res) {
        let user_id = req.params.user_id;

        this.model.update(user_id)
            .then(function (data) {
                res.send(JSON.stringify(data));
            }).catch(function (error) {
                res.send(JSON.stringify({ msg: error }));
            });
    }
}

module.exports = InfoHandler;