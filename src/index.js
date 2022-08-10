const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');
const router = require('./routes/route.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});

let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ]
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ]
       },
   ]


router.post('/players',function(req,res){

let newPlayer =req.body
let newPlayersName=newPlayer
let isNameRepeated=false

for(let i=0;i<newPlayer.length;i++){
    if(players[i].name==newPlayersName){
        isNameRepeated=true
        break;
    }
}
if(isNameRepeated){
res.send ("This player was already added")

}else{
    players.push(newPlayer)
    res.send({data :players, staus:true} )
}
})
module.exports=router;
