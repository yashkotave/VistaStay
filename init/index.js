const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js")
const Review = require("../models/review.js")


main()
   .then(()=>{
    console.log("connectend to Db");
})
.catch((err)=>{
    console.log(err);
})
async function main (){
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust")
}


const initDb = async ()=>{
    await Listing.deleteMany({});
    await Review.deleteMany({});
    initData.data = initData.data.map((obj)=>({...obj,owner:"66f1a30b7ff32fd8433e50e0"}))
    await Listing.insertMany(initData.data); 
    console.log("data was initialised");


}

initDb()