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
        type: [internshipSchema],
        required: false,
    },

})

const internshipSchema = new Schema ({
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
})

const managerSchema = new Schema({
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
})