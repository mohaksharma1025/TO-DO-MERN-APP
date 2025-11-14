import { useEffect, useState } from "react";
import "./STYLE/ListTask.css";

export default function ListTasks() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    let res = await fetch("http://localhost:4500/tasks");
    res = await res.json();

    if (res.success) {
      setTasks(res.tasks);
    }
  };
  const deletetask = async (id) => {
    console.log("delete", id);
    let res = await fetch(`http://localhost:4500/delete-task/${id}`, {
      method: "DELETE",
    });
    res = await res.json();
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>List of Tasks</h2>

      {tasks.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        <table
          border="1"
          cellPadding="10"
          style={{ borderCollapse: "collapse", width: "100%" }}
        >
          <thead>
            <tr>
              <th>S.No</th>
              <th>Title</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {tasks.map((task, index) => (
              <tr key={task._id}>
                <td>{index + 1}</td>
                <td>{task.title}</td>
                <td>{task.description || "—"}</td>
                <td>
                  {" "}
                  <button
                    className="delete-button"
                    onClick={() => deletetask(task._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
