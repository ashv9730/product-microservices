
import {Router} from "express"
import Product from "../models/UserModels";

const userRouter = Router()

userRouter.post('/newproduct', async (req,res) => {
    // const {name, age} = req.body
    // const user = new User({
    //     name: name,
    //     age: age
    // })

    // try {
    //     const userSave = await user.save();
    //     if (!userSave) {
    //         res.status(201).json({
    //             message: "user not svaed"
    //         })
    //     }
    //     res.json({
    //         message: "message from newuser",
    //         userSave
    //     })
    //   } catch (error) {
    //     res.status(500).send(error);
    //   }
    


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
