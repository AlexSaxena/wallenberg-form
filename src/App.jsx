import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NyElevForm from './pages/NyElevForm';
import ErrorPage from './pages/ErrorPage';
import Login from './pages/Login';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/hem" element={<Home />} />
          <Route path="/form" element={<NyElevForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
