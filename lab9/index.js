import { MongoClient } from 'mongodb';


const uri = "mongodb+srv://<EmilyMacmahon>:<D3yHGZYqBuJTx6DI>@<mongodb+srv://EmilyMacmahon:D3yHGZYqBuJTx6DI@cluster0.yuzwq.mongodb.net>/test?retryWrites=true&w=majority";

const client = new MongoClient(uri);
 
try {
    // Connect to the MongoDB cluster
    await client.connect();

    // Make the appropriate DB calls
    await  listDatabases(client);

} catch (e) {
    console.error(e);
} finally {
    await client.close();
}

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};
 

main().catch(console.error);