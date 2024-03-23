import mongoose from "mongoose";

const menuShema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    tast: {
        type: String,
        enum: ["sweet", "spicy"],
        required: true
    },
    is_drunk: {
        type: Boolean,
        default: false
    },
    ingredients: {
        type: [String],
        default: []
    },
    num_sales: {
        type: Number,
        default: 0
    }
});

const Menu = mongoose.model('Menu', menuShema);

export default Menu;