import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

dotenv.config({path: '../server/config.env'});

async function addDocs(doc, purpose) {
    const uri = process.env.MONGODB_CONNECTION_URI;
    const client = new MongoClient(uri);
    try{
        await client.connect();
        console.log("Connected to MongoDB");

        switch(purpose) {
            case "newUser":
                await client.db("CalendarAppDatabase").collection('userdata').insertOne(doc);
                break;
            case "newEvent":
                await client.db("CalendarAppDatabase").collection('eventdata').insertOne(doc);
                break;
            default:
                console.log("No purpose specified");
        }
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

export default addDocs;