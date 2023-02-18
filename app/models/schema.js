import { Schema, model, models } from 'mongoose'

const studentSchema = new Schema({
    id: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    fname: {
        type: String,
        required: true,
    },
    lname: {
        type: String,
        required: true,
    },
    yearOfStudy: {
        type: int,
        required: true,
    },
    program: {
        type: String,
        required: true,
    },
    gpa: {
        type: Number,
        required: true,
    },

    internships: {
        type: [],
        required: false,
    },

    appliedjobs: {
        type: [],
        required: false,
    }
})


const employerSchema = new Schema({
    id: {
        type: Number,
        required: true,
    },
    companyname: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },

    jobpostings: {
        type: [],
        required: false,
    }
})


const jobSchema = new Schema ({
    id: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    headquarters: {
        type: String,
        required: true,
    },
    salary: {
        type: String,
        required: false,
    },
    companyname: {
        type: String,
        required: true,
    },
    internshiplength: {
        type: String,
        required: true,
    },
    applicants: {
        type: [],
        required: false,
    },
})

const internshipSchema = new Schema ({
    title: {
        type: String,
        required: true,
    },
    companyname: {
        type: String,
        required: true,
    },
})

const adminSchema = new Schema({
    id: {
       type: Number,
       required: true, 
    },
    fname: {
        type: String,
        required: true,
    },
    lname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
})