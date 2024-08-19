import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddUser from './components/AddUser';
import Search from './components/Search';
import ViewAll from './components/ViewAll';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddUser/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/view" element={<ViewAll/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
