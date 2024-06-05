import "./App.css";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-4/5">
        <Navbar />

        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/property" element={<h1>Property</h1>} />
          <Route path="/about" element={<h1>About</h1>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
