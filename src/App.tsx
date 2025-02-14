import { Routes, Route, Navigate } from "react-router-dom";

import "./globals.css";
import RootLayout from "./RootLayout";
import SignInForm from "./pages/sign-in";
import SignUpForm from "./pages/sign-up";
import Profile from "./pages/profile";
import { Toaster } from "sonner";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/sign-in" element={<SignInForm />} />
          <Route path="/sign-up" element={<SignUpForm />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Navigate to="sign-in" replace />} />
        </Route>
      </Routes>

      <Toaster />
    </main>
  );
};

export default App;
