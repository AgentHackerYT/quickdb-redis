# QuickDB Redis
- A Simple Module To Use Redis Database
# Functions 
- Create A Redis Client
```js
const { RedisClient } = require("quickdb-redis")

const db = new RedisClient({
    url: "IF You Have URL",
    username: "IF YOU HAVE username and Password",
    password: "IF YOU HAVE username and Password",
}) 
// URL or USERNAME AND PASSWORD
```
- Set A value
```js
db.set(`key`, `value`)
```
- Get A value
```js
db.get(`key`).then(got => console.log(got))
```
- Add
```js
db.add(`key`, Number)
```
- Subtract
```js
db.subtract(`key`, Number)
```
- Delete A Key
```js
db.delete(`key`)
```
- Disconnect From The Database
```js
db.disconnect()
```
# Credits
- Made By Agent Hacker
- Contact Me On Discord: Agent Hacker#0477
