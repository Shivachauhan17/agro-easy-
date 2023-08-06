const farmerData=require('../model/farmer-data')
module.exports={
    getMonitorPage:async(req,res)=>{
        try{
            const farmer_data=farmerData.find()
            console.log('****************************************************************')
            console.log(farmer_data[0])
            res.render('monitor.ejs',{info:farmer_data})
        }
        catch(error){
            console.log(error)
        }
    }
    
}