import { useState } from "react";
import { Collapse } from "react-collapse";
import { FaAngleUp } from "react-icons/fa6";
import "./index.css"

const FilterBar =()=>{
    const [isOpen, setIsOpen] = useState(false)

    const toggleCollaps =() =>{
        setIsOpen(prevState => !prevState)
    }
    return(
        <div className="filter-bar-container">
            <div className="filter-list">
                <p>Filter</p>
                <button>CLEAR ALL</button>
            </div>
            <hr/>
            <div>
                <div className="filter-list">
                    <p>Types of plants</p> 
                    <button onClick={toggleCollaps}>{isOpen ? <FaAngleUp/> :  " +"}</button>
                </div>
                <Collapse isOpened={isOpen}>
                    <ul>
                        <li><input type="checkbox"/>Loerum ipsum</li>
                        <li><input type="checkbox"/>Loerum ipsum</li>
                        <li><input type="checkbox"/>Loerum ipsum</li>
                        <li><input type="checkbox"/>Loerum ipsum</li>
                    </ul>
                </Collapse>
                <hr/>
            </div>
            <div>
                <div className="filter-list">
                    <p>Price</p> 
                    <button> +</button>
                </div>
                <hr/>
            </div>
             <div>
                <div className="filter-list">
                    <p>Nursery</p> 
                    <button> +</button>
                </div>
                <hr/>
            </div>
            <div>
                <div className="filter-list">
                    <p>Ideal Plants Location</p> 
                    <button> +</button>
                </div>
                <hr/>
            </div>
            <div>
                <div className="filter-list">
                    <p>Indoor/Outdoor</p> 
                    <button> +</button>
                </div>
                <hr/>
            </div>
            <div>
                <div className="filter-list">
                    <p>Maintance</p> 
                    <button> +</button>
                </div>
                <hr/>
            </div>
            <div>
                <div className="filter-list">
                    <p>Plant Size</p> 
                    <button> +</button>
                </div>
                <hr/>
            </div>
            <div>
                <div className="filter-list">
                    <p>Water Schedule</p> 
                    <button> +</button>
                </div>
                <hr/>
            </div>
            <div>
                <div className="filter-list">
                    <p>Color</p> 
                    <button> +</button>
                </div>
                <hr/>
            </div>
            <div>
                <div className="filter-list">
                    <p>Seasonal</p> 
                    <button> +</button>
                </div>
                <hr/>
            </div>
            <div>
                <div className="filter-list">
                    <p>Light Effect</p> 
                    <button> +</button>
                </div>
                <hr/>
            </div> 
        </div>
    )
}

export default FilterBar