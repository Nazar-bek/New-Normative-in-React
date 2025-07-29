import { Route, Routes } from "react-router-dom";
import "./index.css";
import MainLayout from "./layouts/MainLayout";
import Main from "./pages/Main";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Main />} />
        <Route path="/contact" element={<h1>Contact</h1>}/>
        <Route path="about" element={<h1>About</h1>} />
        <Route path="sign__up" element={<h1>Sign up</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
