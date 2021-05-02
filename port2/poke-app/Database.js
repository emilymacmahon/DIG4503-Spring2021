import MongoClient from 'mongodb';

const URL = "mongodb+srv://EmilyMacmahon:D3yHGZYqBuJTx6DI@cluster0.yuzwq.mongodb.net";

MongoClient.connect(URL, { useUnifiedTopology: true })
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
});

    export default Database;
