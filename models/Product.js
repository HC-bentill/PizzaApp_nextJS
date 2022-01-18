import mongoose from "mongoose";

//like creating columns in MSQL
const ProductSchema = mongoose.Schema( {
    title: {
        type: String,
        required: true,
        maxlength: 60,
    },
    desc: {
        type: String,
        required: true,
        maxlength: 200,
    },
    img: {
        type: String,
        required: true,
    },
    prices: {
        //datatype is an array that accepts only numbers
        type: [ Number ],
        required: true,
    },
    extraOptions: {
        //array of object with specified datatypes
        type: [
            {
                text: { type: String, required: true },
                price: { type: Number, required: true }
            }
        ]
    },
},
    //schema method takes two arguments which are objects, 1.the 'columns in the db' and 2. timestamp, 
    { timestamps: true }
);


//conditional statement, if there already exists a table/model named product, then use it, else create a new one.
export default mongoose.models.Product || mongoose.model("Product", ProductSchema)