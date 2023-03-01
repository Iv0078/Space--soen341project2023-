import mongodb from 'mongodb';
const { MongoClient } = mongodb;


export default async function connectDB(client) {
   try {
      
      const conn = await client.connect();
      const db = await conn.db('SOEN341');
      return db;

   } catch (err) {
      return console.error(err);
   }
}

export async function close(client) {
   client.close();
}
