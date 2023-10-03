const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    product:{
        id:String,
        Name:String,
        Quantity:String,
        _id:false
    },
    // __v:false

},{ versionKey: false });

module.exports = mongoose.model('Product',productSchema);