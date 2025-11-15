import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";

import AddTask from "./AddTask";
import ListTasks from "./ListTasks";
import UpdateTask from "./UpdateTask";
import HomePage from "./HomePage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
       <Route path="/list" element={<ListTasks />} />
        <Route path="/add" element={<AddTask />} />
         <Route path="/update/:id" element={<UpdateTask />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
