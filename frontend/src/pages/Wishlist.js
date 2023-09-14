import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import Container from '../components/Container';
import Cross from '../images/cross.svg'
import Watch from '../images/watch.jpg';

const Wishlist = () => {
  return (
    <>
    <Meta title={'Wishlist'}/>
    <BreadCrumb title ='Wishlist' />
    <Container class1="conpare-wrapper home-wrapper-2 py-3">
      <div className="row">
        <div className="col-3">
          <div className="wishlist-card w-100 position-relative">
            <img src={Cross} alt="cross" className='position-absolute  cross img-fluid' />
            <div className="wishlist-card-image">
              <img src={Watch} alt="watch" className='img-fluid w-100' />
            </div>
            <div className='py-3 px-3'> 
              <h5 className="title">Nokia 3310 Automatic Screen Header</h5>
              <h6 className="price">N 5000</h6>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="wishlist-card w-100 position-relative">
            <img src={Cross} alt="cross" className='position-absolute  cross img-fluid' />
            <div className="wishlist-card-image">
              <img src={Watch} alt="watch" className='img-fluid w-100' />
            </div>
            <div className='py-3 px-3'> 
              <h5 className="title">Nokia 3310 Automatic Screen Header</h5>
              <h6 className="price">N 5000</h6>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="wishlist-card w-100 position-relative">
            <img src={Cross} alt="cross" className='position-absolute  cross img-fluid' />
            <div className="wishlist-card-image">
              <img src={Watch} alt="watch" className='img-fluid w-100' />
            </div>
            <div className='py-3 px-3'> 
              <h5 className="title">Nokia 3310 Automatic Screen Header</h5>
              <h6 className="price">N 5000</h6>
            </div>
          </div>
        </div>
      </div>
    </Container>
    </>
  )
}
export default Wishlist