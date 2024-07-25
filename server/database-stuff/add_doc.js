const { MongoClient } = require('mongodb');

async function addDoc(uri, database, newdoc) {
    console.log(uri)

    const client = new MongoClient(uri);

    try {
        await client.connect();

        await client.db(database).collection("userdata").insertOne(newdoc);
        console.log("Successfully added document")
    } catch (e) {
        console.error(e)
    } finally {
        await client.close()
    }
}

export default addDoc;