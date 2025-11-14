import { MongoClient } from "mongodb";

let db;

export async function connectDB() {
  const uri =
    "mongodb+srv://mohaksharma1025_db_user:jBJgaJH3nOLZ4Ltd@cluster0.i5b8tpp.mongodb.net/todoapp?retryWrites=true&w=majority&appName=Cluster0";

  const client = new MongoClient(uri);

  await client.connect();

  db = client.db("todoapp");  // <-- This is the DB name I set

  console.log("MongoDB connected successfully!");
}

export function getDB() {
  if (!db) throw new Error("Database connection not initialized");
  return db;
}
