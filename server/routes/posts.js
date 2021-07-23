import express from 'express'
 
const router = express.Router();

router.get('/',(req,res)=>{
    res.send(" You are visiting Home Page ")
})
router.get('/',(req,res)=>{
    res.send(" You are visiting Home Page ")
})

export default router;