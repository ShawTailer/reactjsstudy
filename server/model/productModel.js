import mongoose from "mongoose";

const productSchema = mongoose.Schema(
    {
        Name: {
            type: String,
            require: True,
        },
        Amount: {
            type: Number,
            require: True,
        },
        Price: {
            type: Number,
            require: True,
        },
        
    },
    {
        timestamps: true,
    }
);

export const Product = mongoose.model('Product', productSchema);
