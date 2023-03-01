const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://adampboucher:SOEN341@cluster0.v5jdyed.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

async function connectDB() {
   try {
      await client.connect();
      const db = client.db('SOEN341');
      return db;
      const collection = db.collection('Jobs');

      const findResult = await collection.find({}).toArray();
      console.log('Found documents =>', findResult);


   } catch (err) {
      return console.error(err);
   }
}

async function close(client) {
   client.close();
}


connectDB().catch(console.error);

// async function listDatabases(client) {
//    const dbList = client.db("SOEN341")
//    const collection = dn.collecion
//    // dbList.databases.forEach(db => {
//    //    console.log(`${db.name}`);
//    // })
// }
