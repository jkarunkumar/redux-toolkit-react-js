import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Dataview from "./Pages/Dataview";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dataView/:id" element={<Dataview />} />
      </Routes>
    </>
  );
}

export default App;
