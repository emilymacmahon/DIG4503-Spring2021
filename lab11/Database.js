import MongoClient from 'mongodb';

const URL = "mongodb+srv://EmilyMacmahon:D3yHGZYqBuJTx6DI@cluster0.yuzwq.mongodb.net";

class Database {
    constructor(){
        this.connection = null;
        this.database = null;
        this.collection= null;

    }

    connect(database, collection){
        this.connection = await MongoClient.connect(URL);
        this.database = this.connection.db(database);
        this.connection = this.database.collection(collection);
    }

    close(){

    }

    createOne(){

    }

    readOne(){

    }

    updateOne(){

    }
    async deleteOne(isbn){
        if(this.collection != null) {
            const result = await this.collection.deleteOne({"isbn": isbn});
            return {"deleted": result.deltedCount};
        } else {
            return{"deleted": 0};
        }
    }
}

export default Database;