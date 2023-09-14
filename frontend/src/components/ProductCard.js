import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';
import Wish from '../images/wish.svg'
import Tab from '../images/tab.jpg'
import Tab1 from '../images/tab1.jpg'
import ProdCompare from '../images/prodcompare.svg'
import View from '../images/view.svg'
import AddCart from '../images/add-cart.svg'


const ProductCard = (props) => {
    const {grid} = props;
    let location = useLocation()
  return (
    <>
    <div className= {`${location.pathname ==='/product' ? `gr-${grid}`:'col-2'} `}>
        <Link 
            to={`${
                location.pathname==='/' 
                ? '/product/:id' 
                : location.pathname==='/product/:id' 
                ? '/product/:id'
                : ':id'
            }`}
        >
            <div className="product-card position-relative">
            
                <div className="wishlist-icon position-absolute">
                    <button className='border-0 bg-transparent'><img src={Wish} alt="wishlist"/></button>  
                </div>
                <div className="product-image">
                    <img src={Tab} className='img-fluid' alt="product"/>
                    <img src={Tab1} className='img-fluid' alt="product"/>
                </div>
                <div className="product-details">
                    <h6 className="brand">Nokia</h6>
                    <h5 className="product-title">
                        Nokia 3310 Black Phone
                    </h5>
                    <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        activeColor="#ffd700"
                    />
                    <p className={`description ${grid===12 ? 'd-block' : 'd-none'}`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi eum qui sint at voluptates doloremque?</p>
                    <p className="price">₦2000.00</p>
                </div>
                <div className="action-bar position-absolute">
                    <div className="d-flex flex-column gap-15">
                        <button className='border-0 bg-transparent'>
                            <img src={ProdCompare} alt="add cart" />
                        </button>
                        <button className='border-0 bg-transparent'>
                            <img src={View} alt="view" />
                        </button>
                        <button className='border-0 bg-transparent'>
                            <img src={AddCart} alt="add cart" />
                        </button>
                    </div>
                </div>
            
            </div>
        </Link>
    </div>
    </>
  )
}

export default ProductCard