const farmerData=require('../model/farmer')
module.exports={
    getMonitorPage:async(req,res)=>{
        try{
            const farmer_data=await farmerData.find()
            console.log('****************************************************************')
            console.log(farmer_data)
            res.render('monitor.ejs',{info:farmer_data})
        }
        catch(error){
            console.log(error)
        }
    }
    
}