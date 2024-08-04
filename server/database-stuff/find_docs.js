import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config({path: '../server/config.env'});

const find_docs = async (user, purpose) => {
    const uri = process.env.MONGODB_CONNECTION_URI;
    const client = new MongoClient(uri);
    try {
        await client.connect();
        console.log("Connected to MongoDB");

        switch(purpose) {
            case "findEvent":
                const events = await client.db("CalendarAppDatabase").collection('eventdata').find().toArray();
                console.log(events)
                return events;
            default:
                console.log("No purpose specified");
        }
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

export default find_docs;