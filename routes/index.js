
import {Router} from "express"
import Product from "../models/UserModels";

const userRouter = Router()

userRouter.post('/newproduct', async (req,res) => {
    const user = new Product(req.body);
  
    try {
      await user.save();
      res.send(user);
    } catch (error) {
      res.status(500).send(error);
    }
})

userRouter.get('/getproduct/:id', (req,res) => {
    const {id} = req.params
    res.json({id})
})

userRouter.delete('/deleteproduct/:id', (req,res) => {
    const {id} = req.params
    res.send(`getuser by id ${id}`)
})



export default userRouter
