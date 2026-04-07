import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Admission from "./pages/Admission";
import Departments from "./pages/Departments";
import Notices from "./pages/Notices";
import Examination from "./pages/Examination";
import StudentCorner from "./pages/StudentCorner";
import Faculty from "./pages/Faculty";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <div className="text-8xl font-display font-bold text-navy-100 mb-4">404</div>
      <h1 className="text-2xl font-bold text-navy-900 mb-2">Page Not Found</h1>
      <p className="text-gray-500 mb-6">The page you are looking for does not exist.</p>
      <a href="/" className="btn-primary">Go Back Home</a>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/about" element={<MainLayout><About /></MainLayout>} />
        <Route path="/courses" element={<MainLayout><Courses /></MainLayout>} />
        <Route path="/admission" element={<MainLayout><Admission /></MainLayout>} />
        <Route path="/departments" element={<MainLayout><Departments /></MainLayout>} />
        <Route path="/notices" element={<MainLayout><Notices /></MainLayout>} />
        <Route path="/examination" element={<MainLayout><Examination /></MainLayout>} />
        <Route path="/student-corner" element={<MainLayout><StudentCorner /></MainLayout>} />
        <Route path="/faculty" element={<MainLayout><Faculty /></MainLayout>} />
        <Route path="/gallery" element={<MainLayout><Gallery /></MainLayout>} />
        <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
        <Route path="*" element={<MainLayout><NotFound /></MainLayout>} />
      </Routes>
    </BrowserRouter>
  );
}
