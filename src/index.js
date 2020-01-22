const express = require('express');
const db = require('mongoose');
const app = express();
const port = 3333;
const routes = require('./routes.js')

db.connect('mongodb+srv://clebson:(87301242)@mycluster-0u3iz.mongodb.net/devradar?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});


app.use(express.json());
app.use(routes);

app.listen(port, ()=>{
    console.log("Serve listen on "+port);
});
