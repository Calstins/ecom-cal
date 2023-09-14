import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import {AiOutlineHome, AiOutlineMail} from 'react-icons/ai'
import {BiPhoneCall, BiInfoCircle} from 'react-icons/bi'
import Container from '../components/Container';


const Contact = () => {
  return (
    <>
      <Meta title={'Contact'}/>
      <BreadCrumb title ='Contact' />
      <Container class1="contact-wrapper home-wrapper-2 py-3">
        <div className="row">
          <div className="col-12">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.3280484644406!2d3.3983842709120036!3d6.606095707609679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b936ce64dd6cf%3A0x6e5bc50430ad0113!2sCalstech%20Digital%20Marketing%20Agency!5e0!3m2!1sen!2sng!4v1688636036960!5m2!1sen!2sng" width="600" height="450" className="border-0 w-100" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='map'></iframe>
          </div>
          <div className="col-12 mt-5">
            <div className="contact-inner-wrapper d-flex justify-content-between">
              <div className="">
                <h3 className="contact-title">Contact</h3>
                <form action="" className='d-flex flex-column gap-15'>
                  <div>
                    <input type="text" name="" id="" className='form-control' placeholder='Name'/>
                  </div>
                  <div>
                    <input type="email" name="" id="" className='form-control' placeholder='Email'/>
                  </div>
                  <div>
                    <input type="tel" name="" id="" className='form-control' placeholder='Mobile Number'/>
                  </div>
                  <div>
                    <textarea name="" id="" cols="30" rows="5" className='w-100 form-control' placeholder='Comments'></textarea>
                  </div>
                  <div>
                    <button className="button border-0">Submit</button>
                  </div>
                </form>
              </div>
              <div className="">
                <h3 className="contact-title">Get in touch with us</h3>
                <div>
                  <ul className="ps-0">
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <AiOutlineHome  className='fs-5'/>
                      <address className='mb-0'>10 Aluko Street OwOde Elede Mile 12</address>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <BiPhoneCall className='fs-5'/>
                      <a href="tel:+2348159115625">081 5911 5625</a>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <AiOutlineMail  className='fs-5'/>
                      <a href="mailto:opulecalebtins@gmail.com">opulecalebtins@gmail.com</a>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <BiInfoCircle  className='fs-5'/>
                      <p className="mb-0">Monday - Friday 10 AM - 8 PM</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Contact