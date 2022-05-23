import './App.css';
import Nav from './components/Nav/Nav';
import SearchBar from './components/SearchBar/SearchBar';
import Classes from './components/Classes/Classes';
import { Routes, Route, Link } from "react-router-dom";
import Login from './components/Login/Login'
import Register from './components/Login/Register';
import Assignment from './components/Assignment/Assignment';
import Checker from './components/Checker/Checker';
import Submissions from './components/Submissions/Submissions';
import SubmissionDetails from './components/SubmissionDetails/SubmissionDetails';


function App(){
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/class" element={<Classes/>}/>
        <Route path="/searchbar" element={<SearchBar/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/assignment" element={<Assignment/>}/>
        <Route path="/checker" element={<Checker/>}/>
        <Route path="/submissions" element={<Submissions/>}/>
        <Route path="/submissionDetails" element={<SubmissionDetails/>}/>
      </Routes>
        
    </div>
  );
}

export default App;
