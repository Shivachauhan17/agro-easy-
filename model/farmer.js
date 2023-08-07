const mongoose=require('mongoose')

const farmerDataSchema=new mongoose.Schema({
    farmer_name:{
        type:String,
        required:true,
    }
    // month_prediction:{
    //     type:[Number],
    //     default:[],
    // },
    // month_comments:{
    //     type:[String],
    //     default:[],
    // },
    // commenting_person:{
    //     type:[String],
    //     default:[],
    // }
}
)

module.exports=mongoose.model('farmerData',farmerDataSchema)