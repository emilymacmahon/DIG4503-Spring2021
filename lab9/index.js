import MongoClient from 'mongodb';

 
//keep getting an error saying the URL is not defined??
const URL = "<mongodb+srv://EmilyMacmahon:D3yHGZYqBuJTx6DI@cluster0.yuzwq.mongodb.net>";

MongoClient.connect(url, { useUnifiedTopology: true })
.then(connection => {
    
    let database = connection.db("sample_airbnb");
    let collection = database.collection("listingsAndReviews");

    collection.findOne({minimum_nights: { $eq: "2" } })
    .then((results) => {
        
        console.log(results);

        
        connection.close();
    })
   
})
.catch(error => {
    console.log("Error: " + error);
});