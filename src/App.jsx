import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import { Toaster } from 'react-hot-toast';
import HomePage from './pages/HomePage';

export default function App() {
  return (
    <div className="w-full h-[100vh] bg-gray-200">
      <Toaster position="top-center" reverseOrder={false} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<h1>404 Page</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
