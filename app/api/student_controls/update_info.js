import conn from '../../database/connect';
import mongoDB from 'mongodb';


const db = conn.connectDB()

export default function updateInfo() {
    

    try {
        const users = db.collection('User');
    } catch (e) {
        return console.error(e);
    }

    const users = db.collection('User');

    const result = await users.find({

    })
    

}


