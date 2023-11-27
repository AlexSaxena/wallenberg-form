import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NyElevForm from './pages/NyElevForm';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/hem" element={<Home />} />
          <Route path="/form" element={<NyElevForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
