import { Route, Routes } from "react-router-dom";
import "./index.css";
import MainLayout from "./layouts/MainLayout";
import Main from "./pages/Main";
import SignIn from "./pages/SignIn";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Main />} />
        <Route path="/contact" element={<h1>Contact</h1>}/>
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/sign__up" element={<SignIn/>} />
        <Route path="/login" element={<Login/>}/>
      </Route>
    </Routes>
  );
}

export default App;
