const {MongoClient} = require('mongodb');

async function connect() {
    const uri = process.env.REACT_APP_MONGODB_CONNECTION_URI;
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

export default connect;