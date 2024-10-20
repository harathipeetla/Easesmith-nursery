import { useState } from 'react';

import ProductCard from '../PlantCard';
import FilterBar from '../Filterbar'
import plantsData from '../../PalntsData/data';
import SearchBar from '../SearchBar';
import SliderSlick from '../Slider';
import Banner from '../Banner'
import Header from '../Header';
import Footer from '../Footer';

import "./index.css"

const PlantsList = () => {
    const[productData] = useState(plantsData)
    const [currentPage, setCurrentPage] = useState(1)
    const [searchName, setSearchName] = useState('')
    const productsPerpage = 9

    const filteredProducts = productData.filter(product =>
        product.name.toLowerCase().includes(searchName.toLowerCase())
    )

    //pagination 
    const indexOfLastProduct = currentPage *  productsPerpage
    const indexofFirstProduct = indexOfLastProduct - productsPerpage
    const currentProducts = filteredProducts.slice(indexofFirstProduct, indexOfLastProduct)

    //handleSearch 
    const handleSearch =(name) =>{
        setSearchName(name)
    }

    return (
        <div className='website-main-paart-container'>
            <div>
                <Header/>
            </div>
            <div className='search-part'><SearchBar onSearch={handleSearch}/></div>
            <div><Banner/></div>
            <div><SliderSlick/></div>
        <div className="filter-plants-container">
            <div>
                <FilterBar/>
            </div>
            <div>
            <div>
                <div className='sort-product-section-container'>
                   <span className='products-count'>{filteredProducts.length} Products</span>
                   <select className='filter-product-select'>
                    <option>Size</option>
                    <option>Polularity</option>
                    <option>Price, Low-High</option>
                    <option>Price, High-Low</option>
                   </select>

                </div>
                <div className='plants-list-container'>
            {currentProducts.map((products) => (
                <ProductCard  key={products.id} product={products}  />
            ))}
            </div>
            </div>
            
            <div  className='pagination-container'>
                {Array.from({length:Math.ceil(filteredProducts.length / productsPerpage)}, (_, i) =>(
                    <li key={i + 1}>
                        <button className= {currentPage === i + 1 ? 'active' :''} onClick={()=> setCurrentPage(i+1)}>{i + 1}</button>
                    </li>
                ))}
            </div>
            </div>
        </div>
        <div>
            <Footer/>
        </div>
        </div>
    );
};

export default PlantsList;
