const mongoose=require('mongoose')

const farmerDataSchema=new mongoose.Schema({
    farmer_name:{
        type:String,
        required:true,
    },
    month_prediction:{
        type:Array,
        required:true,
    },
    month_comments:{
        type:Array,
        required:true,
    },
    commenting_person:{
        type:Array,
        required:true,
    }
}
)

module.exports=mongoose.model('farmerData',farmerDataSchema)