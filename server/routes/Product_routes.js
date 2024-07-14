import express from"express"
import { createBook, deleteBook,  getBook, getBooks, } from "../controllers/product_controller.js";
import { verifyToken } from "../middleware/jwt.js";
const router = express.Router();

router.post("/createproduct",verifyToken, createBook);
router.delete("/:id",verifyToken, deleteBook);
router.get("/single/:id",getBook);
router.get("/",getBooks);   
export default router;