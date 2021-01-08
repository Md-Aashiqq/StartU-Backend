import mongoose from "mongoose";

const employeeDetailSchema = new mongoose.Schema({

    employeeId: {
        type: mongoose.Schema.type.ObjectId,
        ref :'employeeModel'
    },
    serviceName: {
        type: String,
        required: [true, "please enter the service name"],
        maxlength:255
    },
    minMember: {
        type: Number,
        required: [true, "please enter the minimum member in your service"],
        min:3
    },
    maxMember: {
        type: Number,
        required: [true, "please enter the maxmium member in your service"],
        min:50
    },
    workingHours: {
        type: Number,
        required:[true,"Enter the Working Hours"]
    },
    contactNumber: {
        type: [Number],
        required:[true,"please enter the contact Number"]
    },
    address: {
        type: String,
    }
    // location: {
        
    // }

})

const employeeDetail = new mongoose.model('employeeDetail', employeeDetailSchema)

export default employeeDetail