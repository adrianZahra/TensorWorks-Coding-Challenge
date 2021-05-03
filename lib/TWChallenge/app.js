const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const port = 8000;
const indexPage = "../../public/html/index.html";

//for reading the body of post requests
app.use(bodyParser.urlencoded({ extended: true })); 

//for acess to the static js,ccs,images in public folder
app.use(express.static('../../public'));

//serves the index page
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, indexPage));
});

//responds to greeter get request
app.get('/greeter', (req, res) => {
    if(req.query.name === "" || req.query.name === undefined){
        res.send('You did not give me a name. Type one in as a parameter like /greeter?name=John');
    }else{
        res.send(`Hello ${req.query.name}!`);
    }
});

//responds to greeter post request and returns a structure
app.post('/greeter', (req, res) => {
    var returnBack = {
        status : '',
        name : ''
    };

    if(req.body.name === "" || req.body.name === "undefined"){
        var emptyResponse = 'You did not give me a name. Type one in below';
        console.log(emptyResponse);
        returnBack.status = "Ok but got posted an empty name feild";
        returnBack.name = emptyResponse;
        res.send(returnBack);
    }else{
        var goodResponse = `Hello ${req.body.name}!`
        console.log(`Hello ${req.body.name}!`);
        returnBack.status = "Ok";
        returnBack.name = goodResponse;
        res.send(returnBack);
    }
});

app.listen(port, function(error){
    if(error){
        console.log('somthing went wrong', error);
    }else{
        console.log('server is listening on port ' + port);
    }
});

