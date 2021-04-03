import MongoClient from 'mongodb';

const url= "mongodb+srv://EmilyMacmahon:D3yHGZYqBuJTx6DI@cluster0.yuzwq.mongodb.net"

export default class Database {
    constructor() {
      //set up default value for connection
      this.connection = null;
      //setup defauly val for DB
      this.database = null;
      //set up default val for collection
      this.collection = null;
    }

    async connect() {
        //wait for connect() meth to finish
        this.connection = await MongoClient.connect(url, { useUnifiedTopology: true });
        //select db
        this.database = this.connection.db("<Database>");
        //select collection
        this.collection = this.database.collection("<Collection>");
    }

   async createOne(person) {
        //test if null or not
        //if null, overwrite and used internally
        if(this.collection != null) {
            //wait for insertOne meth to finish
            return await this.collection.insertOne(person);
        }
    }

    readOne(person) {

        //set up response
        let result= {person: "not found"};
        
        //search through array
        arrayExample.forEach(value => {
            if(value == person) {
                result = {person: person};
            }
        });

        return result;
    }

    deleteMany(person) {
        //delete entry by creating an array without it
        this.arrayExample = this.arrayExample.filter(value =>value != person);
    }

    close() {
        if(this.collection != null) {
            this.collection.close();
        }
    }

    
} 