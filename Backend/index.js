import e from "express";
import cors from "cors";
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

app.listen(4500, () => { 
  console.log("Server running on http://localhost:4500");
});
