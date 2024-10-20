import { CiSearch } from "react-icons/ci";
import { useState } from "react";

import './index.css'



const SearchBar=({onSearch}) =>{
    const [name, setName] = useState('')

    const handleChange = (e)=>{
        setName(e.target.value)
        onSearch(e.target.value)
        
    }
    
    return(
        <div className="search-bar-container">
            <span className='search-bar'><CiSearch className="search-icon"/></span>
            <input type="search" className="search-input" placeholder="Search Plant" value={name} onChange={handleChange}/>
            <span className='plant-icon'>
                <img src="https://res.cloudinary.com/dzvtpzf6b/image/upload/v1729260535/image_91_guj4ox.png" alt="plant-icon" className="plant-icon"/>
            </span>
        </div>
    )
}

export default SearchBar