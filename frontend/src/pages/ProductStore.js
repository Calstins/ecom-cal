import React, { useState } from 'react';
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import ReactStars from "react-rating-stars-component";
import ProductCard from '../components/ProductCard';
import Colour from '../components/Colour';
import Container from '../components/Container';
import Watch from '../images/watch.jpg';
import Gr4 from '../images/gr4.svg';
import Gr3 from '../images/gr3.svg';
import Gr2 from '../images/gr2.svg';
import Gr from '../images/gr.svg';

const ProductStore = () => {
    const [grid, setGrid] = useState(4)
  return (
    <>
        <Meta title={'Our Store'}/>
        <BreadCrumb title ='Our Store' />
        <Container class1="store-wrapper home-wrapper-2 py-5">
            <div className="row">
                <div className="col-3">
                    <div className="filter-card mb-3">
                        <h3 className="filter-title">
                            Shop By Categories
                        </h3>
                        <div>
                            <ul className="ps-0">
                                <li>Watch</li>
                                <li>TV</li>
                                <li>Laptop</li>
                                <li>Camera</li>
                            </ul>
                        </div>
                    </div>
                    <div className="filter-card mb-3">
                        <h3 className="filter-title">
                            Filter By
                        </h3>
                        <div>
                            <h5 className="sub-title">Availability</h5>
                            <div>
                                <div className="form-check">
                                    <input className="form-check-input" type ='checkbox' value='' id='' htmlFor='' />
                                    <label className="form-check-label">
                                    &nbsp; In Stock (1)
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type ='checkbox' value='' id='' htmlFor=''/>
                                    <label className="form-check-label">
                                    &nbsp; Out of Stock (1)
                                    </label>
                                </div>
                            </div>
                            <h5 className="sub-title">Price</h5>
                            <div className='d-flex align-items-center  gap-10'>
                                <div className="form-floating">
                                    <input type="number" className="form-control" id="floatingInput" placeholder="name@example.com" min='0' />
                                    <label htmlFor="floatingInput">From</label>
                                </div>
                                <div className="form-floating">
                                    <input type="number" className="form-control" id="floatingInput1" placeholder="name@example.com"  min='1' />
                                    <label htmlFor="floatingInput1">To</label>
                                </div>
                            </div>
                            <h5 className="sub-title">Colours</h5>
                            <div className="">
                                <div className="d-flex flex-wrap">
                                    <Colour/>
                                </div>
                            </div>
                            <h5 className="sub-title">Size</h5>
                            <div>
                                <div className="form-check">
                                    <input className="form-check-input" type ='checkbox' value='' id='color-1' htmlFor='color-1' />
                                    <label className="form-check-label">
                                        5 (2)
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type ='checkbox' value='' id='color-2' htmlFor='color-2' />
                                    <label className="form-check-label">
                                        M (2)
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="filter-card mb-3">
                        <h3 className="filter-title">
                            Product Tag
                            <div>
                                <div className="product-tags d-flex flex-wrap mt-3 align-items-center gap-10">
                                    <span className="badge bg-light rounded-3 text-secondary py-2 px-3">Mobil</span>
                                    <span className="badge bg-light rounded-3 text-secondary py-2 px-3">TV</span>
                                    <span className="badge bg-light rounded-3 text-secondary py-2 px-3">Electronics</span>
                                    <span className="badge bg-light rounded-3 text-secondary py-2 px-3">Food Stuff</span>
                                </div>
                            </div>
                        </h3>
                    </div>
                    <div className="filter-card mb-3">
                        <h3 className="filter-title mb-3">
                            Random Product
                        </h3>
                        <div>
                            <div className="random-products mb-3 d-flex">
                                <div className="w-40">
                                    <img src={Watch} alt="product" className='img-fluid'/> 
                                </div>
                                <div className="w-60">
                                    <h5>APPLE Watch Series 2 – 42 mm Stainless Steel</h5>
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        value={3}
                                        activeColor="#ffd700"
                                    />
                                    <p>₦2000.00</p>  
                                </div>
                            </div>
                            <div className="random-products mb-3 d-flex">
                                <div className="w-40">
                                    <img src={Watch} alt="product" className='img-fluid'/> 
                                </div>
                                <div className="w-60">
                                    <h5>APPLE Watch Series 2 – 42 mm Stainless Steel</h5>
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        value={3}
                                        activeColor="#ffd700"
                                    />
                                    <p>₦2000.00</p>  
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="col-9">
                    <div className="filter-sort-grid mb-3">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center gap-10">
                                <p className="mb-0" style={{'width':'100px'}}>Sort By:</p>
                                <select name="" class="form-control form-select" id="">
                                    <option value="manual">Featured</option><option value="best-selling" selected="selected">Best selling</option><option value="title-ascending">Alphabetically, A-Z</option><option value="title-descending">Alphabetically, Z-A</option><option value="price-ascending">Price, low to high</option><option value="price-descending">Price, high to low</option><option value="created-ascending">Date, old to new</option><option value="created-descending">Date, new to old</option>
                                </select> 
                            </div>
                            <div className="d-flex align-items-center gap-10">
                                <p className="total-products mb-0">23 Products</p>
                                <div className="d-flex align-items-center gap-10 grid">
                                    <img src={Gr4} className='d-block img-fluid' alt="grid" onClick={()=>{ setGrid(3)}}/>
                                    <img src={Gr3} className='d-block img-fluid' alt="grid" onClick={()=>{ setGrid(4)}}/>
                                    <img src={Gr2} className='d-block img-fluid' alt="grid" onClick={()=>{ setGrid(6)}}/>
                                    <img src={Gr} className='d-block img-fluid' alt="grid" onClick={()=>{ setGrid(12)}}/>
                                </div> 
                            </div>
                        </div>
                    </div>
                    <div className="products-list pb-5">
                        <div className="d-flex gap-10 flex-wrap">
                        <ProductCard grid={grid}/>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </>
  )
}

export default ProductStore