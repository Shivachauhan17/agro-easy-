const farmerData=require('../model/farmer')
module.exports={
    getMonitorPage:async(req,res)=>{
        try{
            const farmer_data=await farmerData.find({ farmer: 'jagbeer'})
            console.log('****************************************************************')
            console.log(farmer_data)
            const comment=farmer_data[0].comment
            const persons_list=farmer_data[0].commenting_persons
            res.render('monitor.ejs',{comments:comment, persons:persons_list})
        }
        catch(error){
            console.log(error)
        }
    }
    
}