import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

dotenv.config({path: '../server/config.env'});

async function updatePref(user, updatedPrefs) {
    const uri = process.env.MONGODB_CONNECTION_URI;
    const client = new MongoClient(uri);
    try {
        await client.connect();
        console.log("Connected to MongoDB");

        await client.db("CalendarAppDatabase").collection('userdata').replaceOne(
            {username: user},
            updatedPrefs
        );
    }
    catch (e) {
        console.error(e);
    }
    finally {
        await client.close();
    }  
}

export default updatePref;