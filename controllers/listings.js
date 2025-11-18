const Listing = require("../models/listing.js");
const mbxGeoCoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeoCoding({ accessToken: mapToken });

function capitalizeFirstWord(str) {
  return str
  .toLowerCase() // Convert the entire string to lowercase first
  .split(' ')    // Split the string into an array of words
  .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
  .join(' ');   
}

module.exports.index = async (req, res) => {
  let category = req.query;
  // res.send(category)
  const allListings = await Listing.find(category);
  // console.log(allListings);
  if(allListings.length == 0){
    const message = "Sorry : No hotels for this category"
    res.render("./listing/filterError.ejs",{message})
  }
  res.render("./listing/index.ejs", { allListings });
};

module.exports.renderNewForm = (req, res) => {
  res.render("./listing/new.ejs");
};

module.exports.showListing = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id)
    .populate({
      path: "reviews",
      populate: {
        path: "author",
      },
    })
    .populate("owner");
  if (!listing) {
    req.flash("error", "Listing you requested for does not exixt!");
    res.redirect("/listings");
  }
  // console.log(listing);
  res.render("./listing/show.ejs", { listing });
};

module.exports.createListing = async (req, res, next) => {


  // const admin = "66f1a30b7ff32fd8433e50e0";  //For local
  const admin = "66fffdcb433adce3efaa7a1c";
    let response = await geocodingClient.forwardGeocode({
    query: req.body.listing.location,
    limit: 1
  })
    .send()


  let url = req.file.path;
  let filename = req.file.filename;

  // console.log(req.body.listing.country)
  
  req.body.listing.country = capitalizeFirstWord(req.body.listing.country);
  req.body.listing.location = capitalizeFirstWord(req.body.listing.location);
  // req.body.listing.country = req.body.listing.country.toUpperCase();


  const newListing = new Listing(req.body.listing);
  

  newListing.owner = req.user._id;
  newListing.image = {url,filename}
  newListing.admin = admin;

  newListing.geometry =  response.body.features[0].geometry;


 let savedListing =  await newListing.save();
//  console.log(savedListing);
  req.flash("success", "New Listing Created!");
  res.redirect("/listings");
};

module.exports.renderEditForm = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing you requested for edit does not exixt!");
    res.redirect("/listings");
  }

  let originalImageUrl = listing.image.url;
  originalImageUrl  = originalImageUrl.replace("/upload","/upload/h_120,w_250")
  // console.log(originalImageUrl)
  res.render("./listing/edit.ejs", { listing ,originalImageUrl});
};

module.exports.updateListing = async (req, res) => {

  let response = await geocodingClient.forwardGeocode({
    query: req.body.listing.location,
    limit: 1
    })
    .send()

    
  let { id } = req.params;
  req.body.listing.country = capitalizeFirstWord(req.body.listing.country);
  req.body.listing.location = capitalizeFirstWord(req.body.listing.location);
  // req.body.listing.country = req.body.listing.country.toUpperCase();
  
  let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  
  listing.geometry =  response.body.features[0].geometry;
  if(typeof req.file !=  "undefined"){
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = {url,filename};
    await listing.save();
  
  }
  let savedListing =  await listing.save();
  req.flash("updated", "Listing Updated!");
  res.redirect("/listings");
};

module.exports.destroyListing = async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndDelete(id);
  req.flash("error", "Listing Deleted!");
  res.redirect("/listings");
};

module.exports.searchBar = async(req,res)=>{
  
 
    const destination = req.query;
  
    if (!destination.destination) {
      req.flash("error", "Please enter Country");
      res.redirect("/listings");
     
    }

     destination.destination = capitalizeFirstWord(destination.destination);
   
    // console.log("om paurl")
    // destination.destination = destination.destination.toUpperCase();
    // console.log(country.country)
    let allListings = await Listing.find({country:destination.destination});
    // console.log(allListings);
    if(allListings.length == 0){
      //  allListings = await Listing.find({location:destination.destination});

       allListings = await Listing.find({
        location: { $regex: new RegExp(destination.destination, 'i') } // Case-insensitive regex match
    });
    }
   if(allListings.length == 0){
      message = "Sorry : No hotels in this Area"
      res.render("./listing/filterError.ejs")
    }
    res.render("./listing/index.ejs", { allListings });
    // res.send("cllll")
   
    
  
};