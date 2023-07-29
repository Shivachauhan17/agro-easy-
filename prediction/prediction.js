const tf = require('@tensorflow/tfjs')

async function load_model(){
    try{
        const model =await tf.loadLayersModel('model.json')
        return model
    }
    catch(error){
        console.log('error in loading model:' , error)
        return null
    }
}

load_model().then(model =>{
    if(model){
        console.log('successfully loaded')
    }
    else 
    {
        console.log('not loaded successfully')
    }
})