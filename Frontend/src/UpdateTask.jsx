import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function UpdateTaskPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [taskdata, setTaskdata] = useState({});

  const { id } = useParams();

  useEffect(() => {
    Updatedata(id);
  }, []);

  const Updatedata = async (id) => {
    let res = await fetch(`http://localhost:4500/task/${id}`);
    res = await res.json();

    if (res.success) {
      setTaskdata(res.task);
setTitle(res.task.title);
setDescription(res.task.description);

    }
  };

  const handleUpdate = () => {
    alert("Task updated!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">

        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Update Task
        </h1>

        {/* Title */}
        <label className="block font-medium mb-1 text-gray-700">Title</label>
        <input
          type="text"
          className="w-full mb-4 p-3 border rounded-xl focus:outline-none focus:ring focus:ring-blue-300"
          value={title}              // ⭐ Prefilled working
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* Description */}
        <label className="block font-medium mb-1 text-gray-700">Description</label>
        <input
          type="text"
          className="w-full mb-6 p-3 border rounded-xl focus:outline-none focus:ring focus:ring-blue-300"
          value={description}        // ⭐ Prefilled working
          onChange={(e) => setDescription(e.target.value)}
        />

        <button
          onClick={handleUpdate}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-2xl transition duration-200"
        >
          Update
        </button>
      </div>
    </div>
  );
}
