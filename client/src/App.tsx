import './App.css';
import Nav from './components/Nav/Nav';
import SearchBar from './components/SearchBar/SearchBar';
import Classes from './components/Classes/Classes';
import { Routes, Route, Link } from "react-router-dom";
import Login from './components/Login/Login'
import Register from './components/Login/Register';

function App(){
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/class" element={<Classes/>}/>
        <Route path="/searchbar" element={<SearchBar/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
        
    </div>
  );
}

export default App;
