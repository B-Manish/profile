import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Home from "./components/Home";

import { Box } from "@mui/material";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
