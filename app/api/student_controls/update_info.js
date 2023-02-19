import Students from '../../models/schema'
import connectDB from '../../database/connect'
import mongoose from 'mongoose'

async function handler(form) {
    let connection = await connectDB('SOEN341.Users')
    const character = new Students.model({
    })
}


