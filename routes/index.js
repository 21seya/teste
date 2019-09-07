const express = require('express')
const router = express.Router()

router.get('/',(req,res,next)=>{
    res.status(200).send({
       title:'ApiUsers',
       version:'10.0'  
    })
})
module.exports = router;
