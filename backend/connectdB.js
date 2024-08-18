const mongoose = require('mongoose');
const username = "sumit"
const password = "NdIaRQOI2md1U9hu"
// const { username, password } = process.env;
// const connectionSrt = "mongodb+srv://" + username + ":" + password + "@cluster0.n19hw8d.mongodb.net/paynow?retryWrites=true&w=majority&appName=Cluster0";
// const connectionSrt = "mongodb+srv://" + username + ":" + password + "@cluster0.g1oleb7.mongodb.net/paynow?retryWrites=true&w=majority&appName=Cluster0";
const connectionSrt = `mongodb+srv://${username}:${password}@cluster0.g1oleb7.mongodb.net/paynow?retryWrites=true&w=majority&appName=Cluster0`;
async function connectDb() {
    await mongoose.connect(connectionSrt);
    console.log("mongodB is connected....");
}

connectDb();

module.exports = { connectDb };