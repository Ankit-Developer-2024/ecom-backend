const mongoose = require("mongoose")
const {Schema} = mongoose;

const cartSchema = new Schema({
   quantity:{type:Number,min:[0,"wrong min quantity"] ,required : true},
   product:{type:Schema.Types.ObjectId,ref:'Product' ,required : true},
   user:{type:Schema.Types.ObjectId,ref:'User' ,required : true},
   colors:{type:[Schema.Types.Mixed] },
   sizes:{type:[Schema.Types.Mixed] },
 
})

const virtual=cartSchema.virtual("id");
virtual.get(function () {
    return this._id;
})

cartSchema.set('toJSON',{
    virtuals: true,
    versionKey:false,
    transform:function(doc,ret){delete ret._id}      //these virtuals help to convert _id field to id 
})

exports.Cart=mongoose.model("Cart",cartSchema)

