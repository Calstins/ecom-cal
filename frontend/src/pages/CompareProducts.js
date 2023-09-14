import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import Colour from '../components/Colour';
import Container from '../components/Container';
import Cross from '../images/cross.svg'
import Watch from '../images/watch.jpg';

const CompareProducts = () => {
  return (
    <>
        <Meta title={'Compare Products'}/>
        <BreadCrumb title ='Compare Products' />
        <Container class1="conpare-wrapper home-wrapper-2 py-3">
          <div className="row">
              <div className="col-3">
                  <div className="compare-product-card position-relative">
                    <img src={Cross} alt="cross" className='position-absolute cross img-fluid' />
                    <div className="product-card-image">
                      <img src={Watch} alt="product" className='img-fluid'/>
                    </div> 
                    <div className='compare-product-details'>
                      <h5 className="title">Nokia 33 10 Super Phone Model 666x Tablet</h5>
                      <h6 className="price mb-3 mt-3">N8833</h6>
                    </div> 
                    <div>
                      <div className="product-detail">
                          <h5>Brand</h5>
                          <p>Nokia</p>
                      </div>
                      <div className="product-detail">
                          <h5>Type</h5>
                          <p>Nokia</p>
                      </div>
                      <div className="product-detail">
                          <h5>Availiblity</h5>
                          <p>In Stock</p>
                      </div>
                      <div className="product-detail">
                          <h5>Color</h5>
                          <Colour/>
                      </div>
                      <div className="product-detail">
                          <h5>Size</h5>
                          <div className="d-flex gap-10">
                              <p>M</p>
                              <p>L</p>
                          </div>
                      </div>
                    </div>
                  </div>
              </div>
              <div className="col-3">
                  <div className="compare-product-card position-relative">
                    <img src={Cross} alt="cross" className='position-absolute cross img-fluid' />
                    <div className="product-card-image">
                      <img src={Watch} alt="product" className='img-fluid'/>
                    </div> 
                    <div className='compare-product-details'>
                      <h5 className="title">Nokia 33 10 Super Phone Model 666x Tablet</h5>
                      <h6 className="price mb-3 mt-3">N8833</h6>
                    </div> 
                    <div>
                      <div className="product-detail">
                          <h5>Brand</h5>
                          <p>Nokia</p>
                      </div>
                      <div className="product-detail">
                          <h5>Type</h5>
                          <p>Nokia</p>
                      </div>
                      <div className="product-detail">
                          <h5>Availiblity</h5>
                          <p>In Stock</p>
                      </div>
                      <div className="product-detail">
                          <h5>Color</h5>
                          <Colour/>
                      </div>
                      <div className="product-detail">
                          <h5>Size</h5>
                          <div className="d-flex gap-10">
                              <p>M</p>
                              <p>L</p>
                          </div>
                      </div>
                    </div>
                  </div>
              </div>
          </div>
        </Container>
    </>

  )
}

export default CompareProducts