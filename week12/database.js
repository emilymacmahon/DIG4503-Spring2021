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

    createOne(person) {
        //add to array with push
        this.arrayExample.push(person);
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

    
} 