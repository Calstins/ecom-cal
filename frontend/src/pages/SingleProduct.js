import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import ProductCard from '../components/ProductCard';
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom"
import Colour from '../components/Colour';
import { Link } from 'react-router-dom';
import { TbGitCompare } from 'react-icons/tb'
import { AiOutlineHeart } from 'react-icons/ai';


const SingleProduct = () => {
  const props = {width: 400, height: 500, zoomWidth: 500, img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"};

  const [orderedProduct, setorderedProduct] = useState(true)

  const copyToClipboard = (text) => {
    console.log('text', text)
    var textField = document.createElement('textarea')
    textField.innerText = text
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
  }
  return (
    <>
    <Meta title={'Product Name'}/>
      <BreadCrumb title ='Product Name' />
      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xl p-3 bg-white">
            <div className="row"> 
                <div className="col-6">
                  <div className="main-product-image">
                    <div>
                    <ReactImageZoom {...props} />
                    </div>
                  </div>
                  <div className="other-product-images d-flex flex-wrap gap-15">
                    <div><img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg" className='img-fluid'  alt="product" /></div>
                    <div><img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg" className='img-fluid'  alt="product" /></div>
                    <div><img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg" className='img-fluid'  alt="product" /></div>
                    <div><img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg" className='img-fluid'  alt="product" /></div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="main-product-details">
                    <div className="border-bottom">
                      <h3 className='title'>Kids Smart Phone Nokia model 40</h3>
                    </div>
                    <div className='border-bottom py-3'>
                      <p className="price">N500</p>
                      <div className="d-flex align-items-center gap-10">
                        <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        activeColor="#ffd700"
                        />
                        <p className="mb-0">(2 Reviews)</p>
                      </div>
                      <a className='review-btn' href="#review">Write a review</a>
                    </div>
                    <div className="border-bottom py-3">
                      <div className="d-flex gap-10 align-items-center my-2">
                        <h3 className='product-heading'>Type :</h3><p className='mb-0 product-data'>Watch</p>
                      </div>
                      <div className="d-flex gap-10 align-items-center my-2">
                        <h3 className='product-heading'>Brand :</h3><p className='mb-0 product-data'>Nokia</p>
                      </div>
                      <div className="d-flex gap-10 align-items-center my-2">
                        <h3 className='product-heading'>Category :</h3><p className='mb-0 product-data'>Phone</p>
                      </div>
                      <div className="d-flex gap-10 align-items-center my-2">
                        <h3 className='product-heading'>Availabilty :</h3><p className='mb-0 product-data'>In Stock</p>
                      </div>
                      <div className="d-flex gap-10 flex-column my-2">
                        <h3 className='product-heading'>  Size :</h3><p className='mb-0 product-data'>In Stock</p>
                      </div>
                      <div className="d-flex gap-10 flex-column my-2">
                        <h3 className='product-heading'>Colour :</h3><Colour/>
                      </div>
                      <div className="d-flex gap-10 flex-column mt-2 mb-3">
                        <h3 className='product-heading'>Size :</h3>
                        <div className="d-flex flex-wrap gap-15">
                          <span className="badge border-1 border border-secondary text-dark bg-white">S</span>
                          <span className="badge border-1 border border-secondary text-dark bg-white">M</span>
                          <span className="badge border-1 border border-secondary text-dark bg-white">XL</span>
                          <span className="badge border-1 border border-secondary text-dark bg-white">XXL</span>
                        </div>
                      </div>
                      <div className="d-flex gap-15 flex-row mt-2 mb-3 align-items-center">
                        <h3 className='product-heading mb-0'>Quantity :</h3>
                        <div className="">
                          <input type="number" name="" id="" min={1} style={{width:"70px"}} className='form-control' />
                        </div>
                        <div className='d-flex gap-30 ms-5 align-items-center'>
                          <button className="button border-0">Add to Cart</button>
                          <Link to='/sign-up' className='button signup'>Buy Now</Link>
                        </div>
                      </div>
                      <div className="d-flex gap-15 flex-row align-items-center">
                        <div className="">
                          <a href="#"><TbGitCompare  className='fs-5'/> Add to Compare</a>
                        </div>
                        <div className="">
                          <a href="#"><AiOutlineHeart className='fs-5'/> Add to Wishlist</a>
                        </div>
                      </div>
                      <div className="d-flex gap-10 flex-column my-3">
                        <h3 className="product-heading">Shipping & Returns: </h3>
                        <p className="product-data">
                          Free shipping and returns available on all orders!
                          We ship all US domestic orders within 5-10 business days!
                        </p>
                      </div>
                      <div className="d-flex gap-10 align-items-center my-2">
                        <h3 className="product-heading">Copy Product Link: </h3>
                        <a href="javascript:void(0)"onClick={()=>{ copyToClipboard('https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg')}} > Link </a>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
      </div>
      <section className="description-wrapper py-5 home-wrapper-2">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <h4>Description</h4>
              <div className="bg-white p-3">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quasi quae architecto. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente aut perferendis quos consectetur temporibus, facere vero rem commodi placeat aspernatur velit eaque fugiat alias ad. Numquam dicta quibusdam placeat amet?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section  id="review" className="reviews-wrapper home-wrapper-2">
      <div className="container-xl">
          <div className="row">
            <div className="col-12">
            <h3>Reviews</h3>
              <div className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-items-end">
                  <div>
                    <h4>Customer Reviews</h4>
                    <div className='d-flex align-items-center gap-10'>
                    <ReactStars
                      count={5}
                      size={24}
                      value={3}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0">Based on 2 Reviews</p>
                    </div>
                  </div>
                  {
                    orderedProduct && (
                      <div>
                        <a className='text-dark text-decoration-underline' href="http://">Write a Review</a>
                      </div>
                    )
                  }
                </div>
                <div className="review-form py-4">
                  <h4>Write a Review</h4>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                        <ReactStars
                          count={5}
                          size={24}
                          value={3}
                          edit={true}
                          activeColor="#ffd700"
                      />
                    </div>
                    <div>
                      <textarea name="" id="" cols="30" rows="5" className='w-100 form-control' placeholder='Comments'></textarea>
                    </div>
                    <div className='d-flex justify-content-end'>
                      <button className="button border-0">Submit Review</button>
                    </div>
                  </form>
                </div>
                <div className="reviews mt-4">
                  <div className="review">
                    <div className="d-flex gap-10 align-items-center">
                      <h6 className='mb-0'>Opule Caleb</h6>
                      <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className='mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro ratione ipsa quo accusantium nulla atque!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="popular-product py-5 home-wrapper-2">
        <div className="container-xl">
            <div className="row">
                <div className="col-12">
                    <h3 className="section-heading">Our Popular Products</h3>
                </div>
                <div className="row">
                    <ProductCard/>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default SingleProduct