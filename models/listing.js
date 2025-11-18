const mongoose = require("mongoose");
const Review = require("./review.js");
const { string, required } = require("joi");
const Schema = mongoose.Schema;

const listningSchema = new Schema({
    title:{
type: String,
required:true,
    },
    description:String,
    image:{   

    
         url: {
            type: String,
            default: "https://images.unsplash.com/photo-1483168527879-c66136b56105?q=80&w=916&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            set: (v) => v === "" ? "https://images.unsplash.com/photo-1483168527879-c66136b56105?q=80&w=916&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" : v,
        },
        filename:{
            type:String
        }
        
        }  ,
    price:Number,
    location:String,
    country:String,
    reviews:[
        {
            type:Schema.Types.ObjectId,
            ref:"Review",
        }
    ],
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    geometry: {
        type: {
          type: String, // Don't do `{ location: { type: String } }`
          enum: ['Point'], // 'location.type' must be 'Point'
          required: true
        },
        coordinates: {
          type: [Number], 
          required: true
        }
},
category:{
    type:String,
    enum:['Trending','Rooms','Cities','Mountain','Castles','Pools','Campings','Farms','Arctic','Boats','Amazing Pools','Iconic Cities'],
    // enum:['Mountain Resorts','Hill Resorts','Yoga','Historical','Adventure','Heritage','Beachfront','Backwaters','Palace Hotels"'],
    required:true,
},
admin:{
     type:Schema.Types.ObjectId,
        ref:"User",
}

});


listningSchema.post("findOneAndDelete", async (listing) => {
    if (listing) {
        await Review.deleteMany({ _id: { $in: listing.reviews } });
    }
});


const Listing = mongoose.model("Listing", listningSchema)

module.exports = Listing;
