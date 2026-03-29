const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const uri = `mongodb+srv://${dbUser}:${dbPassword}@pokefinder.84po30q.mongodb.net/`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const connectDB = async () => {
  try {
    await client.connect();
    console.log("Connected to MongoDB!");
    return client.db("pokefinder");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

module.exports = {
  client,
  connectDB
};