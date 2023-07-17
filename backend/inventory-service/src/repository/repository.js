const database = require("../config/database");
const {ObjectId} = require("mongodb");

async function getAllInventory() {
    const db = await database.connect();
    const teste = db.collection("inventory").find().toArray();
    return teste;
}

async function getInventoryById(id){
    const db = await database.connect();
    return db.collection("inventory").findOne({_id:new ObjectId(id)});
}

async function getInventoryDueDate() {
    const monthAgo = new Date();
    monthAgo.setMonth(monthAgo.getMonth()-1);
    const db = await database.connect();
    return db.collection("inventory").find({dataVencimento: {$gte:monthAgo}}).toArray();
}

async function disconnect(){
    return database.disconnect();
}

module.exports = {getAllInventory,getInventoryById,getInventoryDueDate,disconnect}