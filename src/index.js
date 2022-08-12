const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');
const router = require('./routes/route.js');
const { default: mongoose } = require('mongoose');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', route);

mongoose.connect("mongodb+srv://mdarman:JdDhmsdzbNse7Xl6@cluster0.bzfbgzi.mongodb.net/test?retryWrites=true&w=majority"
,{
    useNewUrlparser:true,
}

).then( ()=> {console.log("MongoDb is Connected")})
.catch (err => {console.log(error)})

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

let person =
[
    {
        name :"PK",
        age : "10",
        votingStatus :false
    },
    {
        name :"CC",
        age : "18",
        votingStatus :false
    },
    {
        name :"AA",
        age : "20",
        votingStatus :false
    },
    {
        name :"SK",
        age : "25",
        votingStatus :false
    }
]
router.post("/person/:votingAge",function(req ,res){
   
let newPerson =req.params
let newPersonsName= req.params.newPerson
let isvotingStatus=false

for(let i=0;i<newPerson.length;i++){
    if(person[i].name==newPersonsName){
        isvotingStatus=true
        break;
    }
}
if(isvotingStatus=18){
    res.send ("This pereson is eligible for vot")
    
    }else{
        res.send("This person is not eligible for voting")
        res.send({data :person, staus:true} )
    }

})




module.exports=router;