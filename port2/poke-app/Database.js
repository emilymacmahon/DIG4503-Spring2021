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

    async create(document) {
        let createdResult =null;
        if(this.collection !=null){
            createdResult = await this.collectuon.insertOne(document);
        }
        return createdResult;
    }

    async readOne(query){
        let foundDocument = await this.collection.findOne(query);
        if (this.colletion != null){
            foundDocument = await this.collection.findOne(query);
        }
        return foundDocument;
    }
    async readMany(query){
        let foundDocuments=null;
        if (this.collection !=null){
            foundDocuments =await this.collection.find(query).toArray();
        }
        return foundDocuments;
    }
    async update(query, update){
        let updatedResult =null;
        if (this.collection !=null){
            updatedResult = await this.collection.updateOne(query, {$set: update})
        }
        return updatedResult;
    }
    async delete(query) {
        let deletedResult = null;
        if (this.collection != null){
            deletedResult = await this.collection.deleteOne(query);
        }
        return deletedResult;
    }
   
}

export default Database;

