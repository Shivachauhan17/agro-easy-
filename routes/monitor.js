const express=require('express')
const router=express.Router()
const monitorController=require('../controllers/monitor')
router.get('/',monitorController.getMonitorPage)
//router.get('/addComment',monitorController.addComment)
//router.get('/deleteComment',monitorController.deleteComment)

module.exports=router