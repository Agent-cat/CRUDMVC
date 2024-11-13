import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Studentlist from "./components/Studentlist";
import Facultylist from "./components/Facultylist";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container mx-auto px-4 py-8">
        <nav className="flex justify-center gap-4 mb-8">
          <Link
            to="/students"
            className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition duration-200"
          >
            Students
          </Link>
          <Link
            to="/faculty"
            className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition duration-200"
          >
            Faculty
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Studentlist />} />
          <Route path="/students" element={<Studentlist />} />
          <Route path="/faculty" element={<Facultylist />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
