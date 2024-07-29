import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import About from './About';
import Reference from './Reference';
import './index.css'; // Import Tailwind CSS

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path='/about' element={<About/>}/>
      <Route path='/reference' element={<Reference/>}/>
    </Routes>
  </Router>
);
