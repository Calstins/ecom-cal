import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import Watch from '../images/watch.jpg';
import {AiFillDelete} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import Container from '../components/Container';

const Cart = () => {
  return (
    <>
        <Meta title={'Cart'}/>
      <BreadCrumb title ='Cart' />
      <Container className="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
            <div className="col-12">
                <div className="d-flex justify-content-between align-items-center">
                    <h4 className='cart-col-1'>Product</h4>
                    <h4 className='cart-col-2'>Price</h4>
                    <h4 className='cart-col-3'>Quantity</h4>
                    <h4 className='cart-col-4'>Total</h4>
                </div>
                <div className="cart-data py-3 d-flex justify-content-between align-items-center">
                    <div className='cart-col-1 gap-15 d-flex align-items-center'>
                        <div className='w-25'>
                        <img src={Watch} alt="watch" className='img-fluid' /> 
                        </div>
                        <div className='w-75'>
                            <h5>Nokia Phone</h5>
                            <p>Colour: red</p>
                            <p>Size: 43</p>
                        </div>
                    </div>
                    <div className='cart-col-2'>
                        <h5 className="price">
                            N400.00
                        </h5>
                    </div>
                    <div className='cart-col-3 d-flex align-items-center gap-15'>
                        <div>
                        <input type="number" name="" id="" min={1} style={{width:"70px"}} className='form-control' />
                        </div>
                        <div>
                            <AiFillDelete className='text-danger'/>
                        </div>
                    </div>
                    <div className='cart-col-4'>
                        <h5 className="price">N 1000.00</h5>
                    </div>
                </div>
                <div className="col-12 py-2 mt-4">
                    <div className="d-flex justify-content-between align-items-baseline">
                        <Link className='button'>Continue Shopping</Link>
                        <div className="d-flex flex-column align-items-end">
                            <h4>SubTotal: N 100</h4>
                            <p>Taxes and Shipping calculated at checkout</p>
                            <Link className='button' to='/checkout'>Checkout</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </Container>
    </>
  )
}

export default Cart