import { useState } from "react";
import { Link } from "react-router-dom";
export default function AddTask() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addTask = async () => {
    try {
      const result = await fetch("http://localhost:4500/add-task", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          description
        })
      });

      const data = await result.json();
      console.log("Result:", data);

      alert("Task added successfully!");

    } catch (err) {
      console.error(err);
      alert("Error adding task");
    }
  };

  return (
    <>
      <div style={{ padding: "20px" }}>
        <form onSubmit={(e) => e.preventDefault()}>
          <label>TASK NAME</label>
          <input 
            type="text" 
            placeholder="task name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label>DESCRIPTION</label>
          <input 
            type="text" 
            placeholder="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <Link to="/"><button type="button" onClick={addTask}>Submit</button></Link>
        </form>
      </div>
    </>
  );
}
