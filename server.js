const app = require("./app");
const connectionDB = require("./database");


connectionDB().then((result) => app.listen(process.env.PORT || 3000 , () => console.log ('server up')))
.catch(err => console.log('connection error' + err))
