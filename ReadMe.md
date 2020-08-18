##
### PostgreSQL 
- 모듈 다운(cmd에서 실행)
```
npm install pg-promise
```
- 예제
```javascript
var pgp = require('pg-promise')(/* options */)
var db = pgp('postgres://username:password@host:port/database')

db.one('SELECT $1 AS value', 123)
  .then(function (data) {
    console.log('DATA:', data.value)
  })
  .catch(function (error) {
    console.log('ERROR:', error)
  })
```
If you want an object model driver for PostgreSQL, look at [PostgreSQL](https://github.com/vitaly-t/pg-promise)

- SQL Shell (psql) 실행
```cmd
-- user 생성
CREATE USER scott PASSWORD 'tiger' SUPERUSER;
-- user 확인
SELECT * FROM PG_USER;
-- database 생성
CREATE DATABASE FamilySafety OWNER scott;
-- database 확인
SELECT * FROM pg_database;
-- TABLE 생성
CREATE TABLE FS_USER
(
	USER_ID VARCHAR(20) NOT NULL,
	PASSWORD VARCHAR(50) NOT NULL,
	CREATED_BY VARCHAR(20) DEFAULT '',
	CREATED_DATE TIMESTAMP DEFAULT NOW(),
	MODIFIED_BY VARCHAR(20) DEFAULT '',
	MODIFIED_DATE TIMESTAMP DEFAULT NOW(),
	PRIMARY KEY(USER_ID)

);
```


##
### MongoDB
- 모듈 다운(cmd에서 실행)
```
npm install mongodb
```

If you want an object model driver for MongoDB, look at [Mongoose](https://github.com/Automattic/mongoose)