
const authorModel= require("../models/authorModel")

const createAuthor=async function(req,res){
let author=req.body
let saveAuthor=await authorModel.create(author)
 res.send({msg:saveAuthor})

}

//BookController
const createBook=async function(req,res){
    const Book= req.body
    const savedbook=await authorModel.create(Book)
    res.send({msg:savedbook})
}

const booksByChetan=async function(req,res){
    let author = await authorModel.find({author_name:"Chetan Bhagat"});
    let ID =await authorModel.find({author_id:{$eq:author[0].author_id}});
    res.send({msg:ID})

}

const update=async function(req,res){
    let newprice=await authorModel.findOneAndUpdate({name:"Two states"} ,{$set : {price:100} },{new:true});
let updateprice=newprice.price;

let updateAuthor=await authorModel.find({author_id:{$eq:newprice.author_id}}).select({author_name:1,_id:0});
// console.log(updateAuthor)
res.send({updateprice,updateAuthor})
}

const bookRange =async function(req,res){
    const range =await authorModel.find({price:{$gte:50,$lte:100}});
    const b= range.map(x=>x.author_id);
    const newRange= await authorModel.find({author_id:b}).select({author_name:1,_id:0});
    res.send (newRange);


}



module.exports.booksByChetan=booksByChetan;
module.exports.createAuthor=createAuthor;
module.exports.createBook=createBook;
module.exports.update=update;
module.exports.bookRange=bookRange;