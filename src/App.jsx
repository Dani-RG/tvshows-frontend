import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Show from './views/Show';
import Edit from './views/Edit';
import New from './views/New';
import Navbar from './components/Navbar';
import ErrorPage from './views/ErrorPage';

function App() {
  return (
    <div className="App">
      <h1>TV shows app</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/shows/:id" element={<Show />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
