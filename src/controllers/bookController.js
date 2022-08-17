 const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const bookList= async function (req, res) {
    let allBook= await BookModel.find().select({
        bookName:1,
        authorName:1,
        _id:0,
    });
    res.send({msg: allBook})
};

const getBookInYear= async function (req, res) {
    let bookYear= req.body;
   let savedBook= await BookModel.find({year:bookYear.year})
        

    res.send({msg: savedBook})
};

const getparticularBooks= async function (req, res) {
    let bookDetail= req.body;
    let bookName=req.body.name;
   let particularData= await bookModel.find(bookDetail)
        

    res.send({msg: particularData})
};

module.exports.createBook= createBook;
module.exports.bookList= bookList;
module.exports.getBookInYear=getBookInYear;


module.exports.getparticularBooks=getparticularBooks;


