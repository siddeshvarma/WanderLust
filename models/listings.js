const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type:String,
  },
   image: {
    filename: String,
    url:{
        type:String,
        default:
      "https://unsplash.com/photos/a-living-room-filled-with-lots-of-furniture-RS1nszT-u0Q",
       set: (v) =>
      v === "" ? "https://unsplash.com/photos/a-living-room-filled-with-lots-of-furniture-RS1nszT-u0Q" : v,
  }},
  price: Number,
  location: String,
  country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
