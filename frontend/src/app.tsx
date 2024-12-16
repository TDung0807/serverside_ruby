import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AdminHomePage, LoginPage, UserHomePage } from "./pages";
import { PrivateRoutes } from "./components";
import AdminLayout from "./layout/AdminLayout";
import UserLayout from "./layout/UserLayout";
const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin" element={<PrivateRoutes />}>
            <Route element={<AdminLayout />}>
              <Route path="homepage" element={<AdminHomePage />}></Route>
            </Route>
          </Route>
          <Route path="/user" element={<UserLayout />}>
            <Route path="homepage" element={<UserHomePage />}></Route>
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
