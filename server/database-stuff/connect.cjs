const {MongoClient} = require('mongodb');
require('dotenv').config({path: '../config.env'});

async function connect() {
    const uri = process.env.MONGODB_CONNECTION_URI;
    console.log(uri);
    const client = new MongoClient(uri);
    try{
        await client.connect();

        console.log("Connected to MongoDB");
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

if(process.env.MONGODB_CONNECTION_URI != undefined){
    connect();
}