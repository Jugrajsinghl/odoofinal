import Book from "../model/ProductModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
// import createError from "../utils/createError.js";

// REGISTER

export const createBook = async (req,res,next)=>{


  console.log(req.isAdmin);
    if(!req.isAdmin) 
    return res.status(403).send({message:"Only seller can create Book"})

    const newBook = new Book({
        userId:req.userId,
        ...req.body
    });
    try {
        const saveBook = await newBook.save();
        res.status(201).json(saveBook)
    } catch (error) {
      console.log(error);
        res.status(500).send({message:"something went wrong while creating Book please try again after some time"})
    }
}

export const deleteBook = async (req,res,next)=>{

  try {
      const nBook = await Book.findById(req.params.id);

      if(nBook.userId!== nBook.userId)
      return res.status(403).send("you can delete only your gig");
      await Book.findByIdAndDelete(req.params.id)
      return res.status(200).send("Book deleted successfully done.")
  } catch (error) {
    res.status(500).send({message:"something went wrong while creatingBookplease try again after some time"})
  }

}

export const getBook = async (req,res,next)=>{
  try {
      const nBook = await Book.findById(req.params.id);
     if(!nBook) next(createError(404,"Book not found ."))
      res.status(200).send(nBook)
  } catch (error) {
    res.status(500).send({message:"something went wrong while creatingBookplease try again after some time"})

  }

}

export const getBooks = async (req,res,next)=>{
  const recived=true
  const q  =req.query;
  const filter = {
      ...(q.userId && { userId:q.userId} ),
      ...(q.cat && { cat:q.cat} ),
      ...( (q.min||q.max) && {price:{...( q.min && {$gt:q.min} ),...( q.max && {$lt:q.max} )},
  }),
      ...(q.search && { title:{ $regex:q.search, $options: "i" } })
     
  }
  try {
      const nBook = await Book.find(filter).sort({[q.sort]: -1});
      res.status(200).send(nBook)
  } catch (error) {
    res.status(500).send({message:"something went wrong while creatingBookplease try again after some time"})
  }

}
