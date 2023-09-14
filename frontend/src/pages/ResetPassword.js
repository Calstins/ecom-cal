import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';


const ResetPassword = () => {
  return (
    <>
    <Meta title={'Reset Password'}/>
      <BreadCrumb title ='Reset Password' />
      <Container class1="resetpassword-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className='text-center mb-3'>Reset Password</h3>
              <form action="" className='d-flex flex-column gap-30'>
                <CustomInput type="password" placeholder='Enter your password' name='password' className="form-control" />
                <CustomInput type="password" placeholder='Confirm your password' name='confirm-password' className="form-control" />
                  <div>
                      <div className='d-flex justify-content-center align-items-center gap-15 mt-3'>
                          <button className="button border-0">Ok</button>   
                      </div> 
                  </div>
              </form>
            </div> 
          </div>
        </div>
      </Container>
    </>
  )
}

export default ResetPassword