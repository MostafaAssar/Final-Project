const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productSchema = new Schema({
model: {
type:String,
required:true,
},
photo:{
    type:String,
},
body_style:{
    type:String,
},
year: {
    type:Number,
},
horsepower :{
    type:Number,
},
cylinders:{
    type:Number,
},
weight:{
    type:String,
},
colors:{
    type:String,
},
price:{
type:String
},
retings:[
    {
stat:Number,
postedby:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
    },
],
    

},{timestamps:true});
module.exports = mongoose.model('product', productSchema);