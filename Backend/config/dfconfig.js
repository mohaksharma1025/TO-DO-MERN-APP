import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config(); // loads .env

let db;

export const connectDB = async () => {
  try {
    const client = new MongoClient(process.env.MONGO_URI);
    await client.connect();
    db = client.db("todoapp"); // database name
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("DB Connection Error:", error);
  }
};

export const getDB = () => db;
