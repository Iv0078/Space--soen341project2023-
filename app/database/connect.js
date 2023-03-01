import mongodb from 'mongodb';
const { MongoClient } = mongodb;


export default async function connectDB(client) {
   try {
      const conn = await client.connect();
      const db = await conn.db('SOEN341');
      return db;
      const collection = db.collection('Jobs');

      const findResult = await collection.find({}).toArray();
      console.log('Found documents =>', findResult);


   } catch (err) {
      return console.error(err);
   }
}

export async function close(client) {
   client.close();
}
