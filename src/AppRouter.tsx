import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { DashboardPage, LoginPage } from "./pages";
import { ForgotPage } from "./pages/ForgotPassword/ForgotPage";
import { SignupPage } from "./pages/SignupPage/SignupPage";
export default function AppRouter() {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="login" element={<LoginPage />} />
      <Route path="signup" element={<SignupPage />} />
      <Route path="forgot-password" element={<ForgotPage />} />
      <Route path="dashboard" element={<DashboardPage />} />

      <Route path="*" element={<h1>Not found page</h1>} />
    </Routes>
  );
}
