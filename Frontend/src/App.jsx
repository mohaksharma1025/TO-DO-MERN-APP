import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";

import AddTask from "./AddTask";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      
        <Route path="/add" element={<AddTask />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
