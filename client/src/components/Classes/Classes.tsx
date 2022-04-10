import './Classes.css'
import { Routes, Route, Link } from "react-router-dom";
import Nav from '../Nav/Nav';

function Classes(){
  return (
    <div className="classes">
        <Nav/>
         <Link to="/searchbar" className="classroom">
        <div >
            <div className="class">
                <span>Software Engineering</span>
                <span>[teacher name]</span>
            </div>
        </div>
        </Link>
        <Link to="/searchbar" className="classroom">
        <div>
            <div className="class">
                <span>Artifitial Intelligence</span>
                <span>[teacher name]</span>
            </div>
        </div>
        </Link>
        <Link to="/searchbar" className="classroom">
        <div >
            <div className="class">
                <span>Computer Networks</span>
                <span>[teacher name]</span>
            </div>
        </div>
        </Link>
        <Link to="/searchbar" className="classroom">
        <div>
            <div className="class">
                <span>Technical Writing</span>
                <span>[teacher name]</span>
            </div>
        </div>
        </Link>
    </div>
  );
}

export default Classes;
