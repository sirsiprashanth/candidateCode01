import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import CustomFilter from './components/custom-filter';
import RestEndpoint from './components/rest-endpoint';
import Pagination from './components/pagination';
import Middleware from './components/middleware';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/custom-filter" element={<CustomFilter/>} />
          <Route path="/rest-endpoint" element={<RestEndpoint/>} />
          <Route path="/pagination" element={<Pagination/>} />
          <Route path="/middleware" element={<Middleware/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
