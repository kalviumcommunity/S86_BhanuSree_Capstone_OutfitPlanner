import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import AddOutfit from './components/AddOutfit';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', height: '100vh', width:'100%' }}> {/* 👈 ADD height */}
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-outfit" element={<AddOutfit />} />
          {/* Add more routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
