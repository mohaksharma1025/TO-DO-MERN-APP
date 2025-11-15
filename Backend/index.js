import e from "express";
import cors from "cors";
import { ObjectId } from "mongodb";

import { connectDB, getDB } from "./config/dfconfig.js";
const app = e();
app.use(cors());
app.use(e.json());

await connectDB();
app.post("/add-task", async (req, res) => {
    try {
        const db = getDB();
        const tasks = db.collection("tasks"); // collection name

        const { title, description } = req.body;

        // validation
        if (!title) {
            return res.status(400).json({ error: "Title is required" });
        }

        // insert into DB
        const result = await tasks.insertOne({
            title,
            description,
            createdAt: new Date()
        });

        res.json({
            success: true,
            message: "Task added successfully",
            taskId: result.insertedId
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
});

app.get("/", (req, resp) => {
  resp.send({
    message: "basic API done",
  });
}); 
app.get("/tasks", async (req, res) => {
  try {
    const db = getDB();
    const tasks = db.collection("tasks");

    const data = await tasks.find().toArray();

    res.json({
      success: true,
      tasks: data
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});
app.get("/task/:id", async (req, res) => {
  try {
    const db = getDB();
    const tasks = db.collection("tasks");
    const { id } = req.params; 
    const result = await tasks.findOne({ _id: new ObjectId(id) });

    if (!result) {
      return res.status(404).json({ success: false, message: "Task not found" });
    }
    res.json({
      success: true,
      task: result
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});
app.delete("/delete-task/:id", async (req, res) => {
  try {
    const db = getDB();
    const tasks = db.collection("tasks");
    const { id } = req.params;

    const result = await tasks.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return res.status(404).json({ success: false, message: "Task not found" });
    }

    res.json({
      success: true,
      message: "Task deleted successfully"
    });
    console.log("Deleted task with id:", id);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(4500, () => { 
  console.log("Server running on http://localhost:4500");
});
