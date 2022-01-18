import mongoose from "mongoose";

//like creating columns in MSQL
const OrderSchema = mongoose.Schema( {
    customer: {
        type: String,
        required: true,
        maxlength: 60,
    },
    address: {
        type: String,
        required: true,
        maxlength: 200,
    },
    total: {
        type: Number,
        required: true,
    },
    status: {
        type: Number,
        default: 0
    },
    method: {
        type: Number,
        required: true,
    },
},
    //schema method takes two arguments which are objects, 1.the 'columns in the db' and 2. timestamp, 
    { timestamps: true }
);


//conditional statement, if there already exists a table/model named Order, then use it, else create a new one.
export default mongoose.models.Order || mongoose.model("Order", OrderSchema) 