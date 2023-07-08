import Header from "./components/Header/Header";
import Users from "./components/Users";
import Main from "./components/Main";
import { Route,Routes } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/user" element={<Users />} />
      </Routes>
    </>
  );
}

export default App;
