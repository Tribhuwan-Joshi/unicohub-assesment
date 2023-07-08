import Header from "./components/Header/Header";
import Users from "./components/Users/Users";
import Main from "./components/Main";
import { Route, Routes } from "react-router-dom";
import "@test"
import "./index.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </>
  );
}

export default App;
