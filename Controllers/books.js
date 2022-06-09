const Books = require('../Models/Books')

//Index
const index = async (req,res)=>{
    try{
        res.json(await Books.find({}))
    }catch(error){
        res.status(400).json(error)
    }
}


module.exports = {
    index,
}