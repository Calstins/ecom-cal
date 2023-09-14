import React from 'react'
import {  Link} from 'react-router-dom';
import {BsLinkedin, BsYoutube, BsInstagram } from 'react-icons/bs'
import  Newsletter from '../images/newsletter.png'
import Payment from '../images/payment.png'

const Footer = () => {
  return (
    <>
    <footer className='py-4'>
      <div className="container-xl">
        <div className="row align-items-center">
          <div className="col-5">
            <div className="footer-top-data d-flex gap-30 align-items-center">
              <img src={Newsletter} alt="newsletter"/>
              <h2 className="mb-0 text-white">Sign Up for NewsLetter</h2>
            </div>
          </div>
          <div className="col-7">
            <div className="input-group">
              <input type="text" className="form-control py-1" placeholder="Add Email Address..." aria-label="Add Email Address..." aria-describedby="basic-addon2" />
              <span className="input-group-text p-2" id="basic-addon2">Subscribe</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <footer className='py-4'>
      <div className="container-xl">
        <div className="row">
          <div className="text-white col-4">
            <h4>Contact Us</h4>
            <div>
              <address className='fs-6'>
                10 Adonkia Street Owode Elede <br /> Mile 12 ketu Lagos State<br /> Postal code: 43555
              </address>
              <a href="tel:+2348159115625" className='mt-1 d-block text-white' >08159115625</a>
              <a href="mailto:opulecalebtins@gmail.com" className='mt-1 d-block text-white mb-0'>opulecalebtins@gmail.com</a>
              <div className="social-icons d-flex align-items-center gap-15 mt-3">
                <Link className='text-white'>
                  <BsInstagram className='fs-4'/>
                </Link>
                <Link className='text-white'>
                  <BsLinkedin className='fs-4'/>
                </Link>
                <Link className='text-white'>
                  <BsYoutube className='fs-4'/>
                </Link>
              </div>
            </div>
          </div>
          <div className="text-white col-3">
            <h4>Information</h4>
            <div className='footer-links d-flex flex-column'>
              <Link to='/privacy-policy' className='text-white py-2 mb-1'>Privacy Policy</Link>
              <Link to='/refund-policy' className='text-white py-2 mb-1'>Refund Policy</Link>
              <Link to='/shipping-policy' className='text-white py-2 mb-1'>Shipping Policy</Link>
              <Link to='/terms-conditions' className='text-white py-2 mb-1'>Terms & Conditions</Link>
              <Link to='/blog' className='text-white py-2 mb-1'>Blogs</Link>
            </div>
          </div>
          <div className="text-white col-3">
            <h4>Account</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2 mb-1'>Search</Link>
              <Link className='text-white py-2 mb-1'>About Us</Link>
              <Link className='text-white py-2 mb-1'>Faq</Link>
              <Link className='text-white py-2 mb-1'>Login</Link>
            </div>
          </div>
          <div className="text-white col-2">
            <h4>Quick Links</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2 mb-1'>Food Stuff</Link>
              <Link className='text-white py-2 mb-1'>Electronics</Link>
              <Link className='text-white py-2 mb-1'>Shop</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <footer className='py-3'>
      <div className="container-xl">
        <div className="col-12 d-flex justify-content-between align-items-center">
          <div className="">
          <p className="text-center mb-0 text-white">&copy; {new Date().getFullYear()} Powered By Calstech Digital</p>
          </div>
          <div className="">
            <img src={Payment} alt="payment" style={{borderRadius: 5 + "px"}}/>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer