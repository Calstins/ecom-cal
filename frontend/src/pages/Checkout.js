import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import { BiArrowBack } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import Watch from '../images/watch.jpg';
import Container from '../components/Container';

const Checkout = () => {
  return (
    <>
    <Meta title={'Checkout'}/>
    <BreadCrumb title ='Checkout' />
    <Container class1="checkout-wrapper py-5 home-wrapper-2">
        <div className="row">
            <div className="col-7">
                <div className="checkout-left-data">
                    <h3 className="website-name">CALSTECH</h3>
                    <nav style={{'--bs-breadcrumb-divider':'>'}} aria-aria-label='breadcrumb'>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link className='total-price text-dark' to="/cart">Cart</Link>
                            </li>
                            &nbsp; /
                            <li className="total-price breadcrumb-item active" aria-current='page'>
                                Informaton
                            </li>
                            &nbsp; /
                            <li className="total-price breadcrumb-item active" aria-current='page'>
                                Shipping
                            </li>
                            &nbsp; /
                            <li className="breadcrumb-item active" aria-current='page'>
                                Payment
                            </li>
                        </ol>
                    </nav>
                    <h4 className="title">Contact Information
                    </h4>
                    <p className="user-details">Caleb Opule(opulecalebtins@gmail.com)</p>
                    <h4 className='mb-3'>Shipping Address</h4>
                    <form action="" className='d-flex gap-15 justify-content-between flex-wrap'>
                        <div className='w-100'>
                            <select name="" id="" className="form-control form-select">
                                <option value="" selected disabled >Select Country</option>
                            </select>
                        </div>
                        <div className='flex-grow-1'>
                            <input type="text" className="form-control" placeholder='First Name'/> 
                        </div>
                        <div className='flex-grow-1'>
                        <input type="text" className="form-control" placeholder='Last Name'/> 
                        </div>
                        <div className='w-100'>
                        <input type="text" className="form-control" placeholder='Address'/> 
                        </div>
                        <div className='w-100'>
                        <input type="text" className="form-control" placeholder='Apartment, Suite, etc'/> 
                        </div>
                        <div className='flex-grow-1'>
                        <input type="text" className="form-control" placeholder='City'/> 
                        </div>
                        <div className='flex-grow-1'>
                            <select name="" id="" className="form-control form-select">
                            <option value="" selected disabled >Select State</option>
                            </select>
                        </div>
                        <div className='flex-grow-1'>
                        <input type="text" className="form-control" placeholder='Zipcode'/> 
                        </div>
                        <div className="w-100">
                            <div className="d-flex justify-content-between align-items-center">
                                <Link to='/cart' className='text-dark'><BiArrowBack className='me-2'/>Return to Cart</Link>
                                <Link to='/' className='button'>Continue to Shipping</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="col-5">
                <div className='border=bottom py-4'>
                    <div className="d-flex gap-10 align-items-center">
                    <div className='w-75 d-flex gap-10'>
                        <div className=' w-25 position-relative'>
                            <span className="badge bg-secondary text-white rounded-circle p-2 position-absolute" style={{top:'-10px',right:'2px'}}>1</span>
                            <img src={Watch} alt="product" className='img-fluid'/>
                        </div>
                        <div>
                            <h5 className='title'>Watch 410</h5>
                            <p>dgbf ddgd</p>
                        </div>
                    </div> 
                    <div>
                        <div className='flex-grow-1'>
                            <h5>N 100.00</h5>
                        </div>
                    </div> 
                    </div>
                </div>
                <div className='border=bottom py-4'>
                    <div className="d-flex justify-content-between align-items-center">
                        <p className='total'>SubTotal</p>
                        <p className='total-price'>N 2000</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <p className='mb-0 total'>Shipping</p>
                        <p className='mb-0 total-price'>N 2000</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center border=bottom py-4">
                        <h4>Total</h4>
                        <h5>N 2000</h5>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    </Container>
    </>
  )
}

export default Checkout