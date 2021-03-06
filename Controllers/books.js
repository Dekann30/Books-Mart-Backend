const Books = require('../Models/Books')

//Index
const index = async (req,res)=>{
    try{
        res.json(await Books.find({}))
    }catch(error){
        res.status(400).json(error)
    }
}

const del = async (req,res) =>{
    try{
        res.json(await Books.findByIdAndDelete(req.params.id))
    } catch(error){
        res.status(400).json(error)
    }
}

const update = async (req,res)=>{
    try{
        res.json(await Books.findByIdAndUpdate(req.params.id, req.body, {new:true}))
    }catch(error){
        res.status(400).json(error)
    }
}

const create = async (req,res) => {
    try {
        res.json(await Books.create(req.body))
    }catch (error){
        res.status(400).json(error)
    }
}

const show = async (req,res) => {
    try {
        res.json(await Books.findById(req.params.id))
    }catch(error){
        res.status(400).json(error)
    }
}

module.exports = {
    index,
    create,
    del,
    update,
    show
}