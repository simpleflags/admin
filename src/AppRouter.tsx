import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { LoginPage } from "./pages";
import { SignUp } from "./pages/SignUpPage/SignUp";
import { ForgotPage } from "./pages/ForgotPassword/ForgotPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="login" element={<LoginPage />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="forgot-password" element={<ForgotPage />} />

      <Route path="*" element={<h1>Not found page</h1>} />
    </Routes>
  );
}
