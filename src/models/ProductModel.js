import mongoose from "mongoose"; 

const productSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
        trim: true,
    },
    stock: {
        type: Number,
        required: true,
        trim: true,
    },
    image: {
        type: String,
        trim: true
    },
        
    },{
    timestamps: true,
    versionKey: false
    }
)

const Product = mongoose.model('Product', productSchema);
export default Product;



