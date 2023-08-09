const mongoose=require('mongoose')

const farmerDataSchema=new mongoose.Schema({
    farmer:{
        type:String,
        required:true,
    },
    month_prediction:{
        type:[Number],
        default:[],
    },
    comment:{
        type:[String],
        default:[],
    },
    commenting_persons:{
        type:[String],
        default:[],
    }
}
)

module.exports=mongoose.model('farmerData',farmerDataSchema)