import { Schema, model, models } from 'mongoose'

const studentSchema = new Schema({
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
        type: [jobSchema],
        required: false,
    },

    appliedjobs: {
        type: [jobSchema],
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

    managers: {
        type: [managerSchema],
        required: true,
    },

    jobposting: {
        type: [jobSchema],
        required: false,
    }
})

const managerSchema = new Schema({
    id: {
        type: Number,
        required: true,
    },
    email: {
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
})

const jobSchema = new Schema ({
    id: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    headquarters: {
        type: String,
        required: true,
    },
    salary: {
        type: Number,
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
    internshipTitle: {
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
})