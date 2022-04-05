import dbconnect from "../../../util/mongo"
import Product from "../../../models/Product"

export default async function handler ( req, res ) {
    const { method, query:{id}, } = req;

    dbconnect()

    //read/fetcg data from the db
    if ( method === "GET" ) {
        try {
          const product = await Product.findById(id)
          res.status(200).json(product)  
        } catch(err) {
            res.status(500).json(err)
        }
    }

    //send data to db from request body
    if ( method === "PUT" ) {
        try {
            //create records with the data from the request data with the productSchema
            const product = await Product.create( req.body );
            res.status(201).json(product)
        } catch ( err ) {
            //500 is server error
            res.status(500).json(err)
        }
    }

    if ( method === "DELETE" ) {
        try {
            //create records with the data from the request data with the productSchema
            const product = await Product.create( req.body );
            res.status(201).json(product)
        } catch ( err ) {
            //500 is server error
            res.status(500).json(err)
        }
    }
} 