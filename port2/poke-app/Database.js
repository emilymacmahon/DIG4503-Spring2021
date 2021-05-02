import MongoClient from 'mongodb';

const URL = "mongodb+srv://EmilyMacmahon:D3yHGZYqBuJTx6DI@cluster0.yuzwq.mongodb.net";


class Database {
    constructor() {
        // Setup a default value for connection
        this.connection = null;
        // Setup a default value for database
        this.database = null;
        // Setup a default value for collection
        this.collection = null;
    }

    async connect(database, collection) {
        // Wait for the connect() method to finish.
        this.connection = await MongoClient.connect(url, { useUnifiedTopology: true });
        // Select a database.
        this.database = this.connection.db("portfolio2");
        // Select a collection.
        this.collection = this.database.collection("EmilyMacmahon");
    }

    close() {
        if(this.connection != null) {
        this.collection.close();
        }

    }

   
}

export default Database;

