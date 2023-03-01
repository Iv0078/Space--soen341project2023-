import { default as connectDB } from '../../database/connect.js';
import { close } from '../../database/connect.js'
//const { conn } = connectDB();
import mongoDB from 'mongodb';
const { MongoClient } = mongoDB;

const uri = "mongodb+srv://adampboucher:SOEN341@cluster0.v5jdyed.mongodb.net/?retryWrites=true&w=majority";
const initialClient = new MongoClient(uri);

async function updateInfo() {
    
    console.log("MAde it in here");

    const client = await connectDB(initialClient);


    const users = client.collection('Users');

    const results = await users.find({ studentid: "40165035"}).toArray();

    console.log(results);

    const result = await users.updateOne({ studentid: "40165035"}, { $set: {program: "Software Engineering"}});

    const foundUser = await users.find({ studentid: "40165035"}).toArray();

    console.log(foundUser);

    initialClient.close();

}

updateInfo();


