const PgPromise = require('pg-promise')();

class UserModel{
    constructor() {
        this.db = PgPromise("postgres://scott:tiger@localhost:5432/familysafety");
    }

    create(User){
        let id = User.id;
        let password = User.password;

        return this.db.any('INSERT INTO FS_USER(USER_ID, PASSWORD) VALUES($1, $2)', [id,password]);
    }

    readAll(){
        return this.db.any('SELECT * FROM FS_USER');
    }

    read(id){
        return this.db.any('SELECT * FROM FS_USER WHERE USER_ID = $1',[id]);
    }

    update(id, user) {
        let password = user.password;

        return this.db.any('UPDATE FS_USER SET PASSWORD = $1 WHERE USER_ID = $2',[password, id]);
    }

    delete(id){
        return this.db.any('DELETE FROM FS_USER WHERE USER_ID = $1',[id]);
    }
}

module.exports = UserModel;