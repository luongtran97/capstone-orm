import "./App.css";
import LoginPage from "./components/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import DetailPage from "./pages/DetailPage/DetailPage.jsx";
import Layout from "./layout/Layout";
import UserPage from "./pages/UserPage/UserPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout contentPage={<HomePage />} />} />
        <Route path="/login" element={<Layout contentPage={<LoginPage />} />} />
        <Route
          path="/user-info/"
          element={<Layout contentPage={<UserPage />} />}
        />
        <Route
          path="/detail/:id"
          element={<Layout contentPage={<DetailPage />} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
