const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");



const MONGO_URL ="mongodb+srv://muskankushwah:aSZG8iMom8tLwbkS@cluster0.l5jgmnu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

main()
.then(() => {
    console.log("connected to DB");
})
.catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner: "66699c55f4185918969dcfcf"}));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
};

initDB();