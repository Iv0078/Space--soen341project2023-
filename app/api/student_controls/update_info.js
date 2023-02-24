import Students from '../../models/schema'
import connectDB from '../../database/connect'
import mongoose from 'mongoose'

export async function updateInfo() {
    connectDB('SOEN341.Users').catch((error) => res.json({ error: error.messaege}))
    console.log("Hello");

    // Students.findOneAndUpdate({ email : req.body.email }, )
}


