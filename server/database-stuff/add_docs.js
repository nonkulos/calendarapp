import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

dotenv.config({path: '../server/config.env'});

async function addDocs(user) {
    const uri = process.env.MONGODB_CONNECTION_URI;
    console.log(user)
    const client = new MongoClient(uri);
    try{
        await client.connect();
        console.log("Connected to MongoDB");

        await client.db("CalendarAppDatabase").collection('userdata').insertOne(user);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

export default addDocs;