import "./App.css";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Agent from "./pages/Agent";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-4/5">
        <Navbar />

        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/agent" element={<Agent/>} />
          <Route path="/customers" element={<Agent/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
