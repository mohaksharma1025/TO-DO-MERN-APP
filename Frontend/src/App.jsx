import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";

import AddTask from "./AddTask";
import ListTasks from "./ListTasks";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
       <Route path="/list" element={<ListTasks />} />
        <Route path="/add" element={<AddTask />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
