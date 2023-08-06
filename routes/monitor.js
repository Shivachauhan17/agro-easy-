const express=require('express')
const router=express.Router()
const monitorController=require('../controllers/monitor')
router.get('/monitor',monitorController.getMonitorPage)

module.exports=router