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