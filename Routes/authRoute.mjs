import express from "express"

const router = express.Router();


router.get('/register', (req , res) => {
    res.send({msg : 'Register Route'})
})

const authRouter = router;

export  default authRouter