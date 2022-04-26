import './SearchBar.css'
import Nav from '../Nav/Nav';

function SearchBar() {
    // email name classroom created by
  
    
    return (
        <div className="main-container">
            <Nav/>
            <div className="search-container">
                <div className="search-bar">
                    <input type="text"   placeholder="Announcement..." id="search"/>
                    
                   
                        <div className="button-container">
                            <button className="button" >Post</button>
                        </div>
                </div>
            </div>
            </div>
    
    )
    
}

export default SearchBar
