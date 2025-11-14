const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
const User = require("../models/user.js");
const insertData = require("./data.js");

main()
  .then((res) => {
    console.log("Mongoose connected.");
  })
  .catch((err) => console.error(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wanderstay");
}

const initDB = async () => {
  // Find or create user "Rakesh Sarkar"
  let defaultOwner = await User.findOne({ username: "Rakesh Sarkar" });
  
  if (!defaultOwner) {
    // Create the user if it doesn't exist
    const newUser = new User({ 
      username: "Rakesh Sarkar", 
      email: "rakesh.sarkar@example.com" 
    });
    // Register with a default password (you can change this)
    defaultOwner = await User.register(newUser, "defaultPassword123");
    console.log("Created default owner: Rakesh Sarkar");
  } else {
    console.log("Found existing owner: Rakesh Sarkar");
  }

  await Listing.deleteMany({});
  insertData.data = insertData.data.map((obj) => ({
    ...obj,
    owner: defaultOwner._id,
  }));
  await Listing.insertMany(insertData.data);
  console.log("All listings initialized with owner: Rakesh Sarkar");
};

initDB();
