import './App.css';
import Nav from './components/Nav/Nav';
import SearchBar from './components/SearchBar/SearchBar';
import Classes from './components/Classes/Classes';
import { Routes, Route, Link } from "react-router-dom";
import Login from './components/Login/Login'
import Register from './components/Login/Register';
import Assignment from './components/Assignment/Assignment';

function App(){
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/class" element={<Classes/>}/>
        <Route path="/searchbar" element={<SearchBar/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/assignment" element={<Assignment/>}/>
      </Routes>
        
    </div>
  );
}

export default App;
