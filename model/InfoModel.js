const mongoose = require('mongoose');

class InfoModel{
    constructor() {
        mongoose.connect('mongodb://localhost:27017/familysafety', {useNewUrlParser: true, useUnifiedTopology: true});
        this.db = mongoose.connection;
    }

    create(infos){
        let user_id = infos.user_id;
        let latitude = infos.latitude;
        let longitude = infos.longitude;
        let azimuth = infos.azimuth;
        let timestamps = infos.timestamps;

        return this.db.collection('familysafety').insertOne(infos).exec();
    }

    async readAll(){
        return this.db.collection('familysafety').find({});
    }

    read(id){
        return this.db.collection('familysafety').find({}, { projection: { user_id: `${id}` } });
    }

    update(id, infos) {
        return this.db.collection('familysafety').findOneAndUpdate({ todoid }, payload, { new: true });
    }

    delete(id){
        return this.db.collection('familysafety').remove({ id });
    }
}

module.exports = InfoModel;