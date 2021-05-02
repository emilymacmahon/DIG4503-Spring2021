import MongoClient from 'mongodb';

const URL = "mongodb+srv://EmilyMacmahon:D3yHGZYqBuJTx6DI@cluster0.yuzwq.mongodb.net";

/* MongoClient.connect(URL, { useUnifiedTopology: true })
.then(connection => {
    // Select the database.
    let database = connection.db("portfolio2");
    
    // Select the collection.
    let collection = database.collection("EmilyMacmahon");

    // Save the cursor
    let cursor = collection.find({genres: "Western", runtime: {$lt: 70}});
    
    // Using the cursor, access its forEach() method.
    cursor.forEach(document => {
        
        // For each document, only use its 'title' field (property).
        console.log(document.title);
    }, () => {
        // After the forEach() finishes, it will call this "endCallback" function.
        //
        // Close the connection.
        connection.close();
    });
})
.catch(error => {
    // Connection failed for any number of reasons.
    console.log("Error: " + error);
}); */

MongoClient.connect(URL, { useUnifiedTopology: true })
.then(connection => {
    // Select the database.
    let database = connection.db("portfolio2");
    
    // Select the collection.
    let collection = database.collection("EmilyMacmahon");

class Database {
    constructor() {
        // Setup a default value for connection
        this.connection = null;
        // Setup a default value for database
        this.database = null;
        // Setup a default value for collection
        this.collection = null;
    }
    async connect() {
        // Wait for the connect() method to finish.
        this.connection = await MongoClient.connect(url, { useUnifiedTopology: true });
        // Select a database.
        this.database = this.connection.db("<Database>");
        // Select a collection.
        this.collection = this.database.collection("<Collection>");
}
    close() {
        if(this.connection != null) {
        this.collection.close();
        }
    }
}

export default Database;

