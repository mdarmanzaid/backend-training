const authorModel = require("../models/authorModel");
const publisherModel= require("../models/publisherModel")
const createBook= async function(req,res){
    let book =req.body;
   let  authorData =await authorModel.find().select ({_id:1})
   let  PublisherData =await publisherModel.find().select ({_id:1})
let authorId = authorData.map(function(x){

})