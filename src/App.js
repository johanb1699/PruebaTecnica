import logo from './logo.svg';
import './App.css';
import { Home } from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Create } from './pages/Create';
import { Update } from './pages/Update';
import { Ingrendients } from './pages/Ingrendients';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/ingredients" element={<Ingrendients />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
