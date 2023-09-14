import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { registerUser } from '../features/user/userSlice';
import { useDispatch } from 'react-redux';

const SignUpSchema = yup.object({
  firstname: yup.string().required("First name is required"),
  lastname: yup.string().required("Last name is required"),
  email: yup.string().email("Email should be valid").required("Email Address is Required"),
  mobile: yup.string().required("Mobile number is required"),
  password: yup.string().required("Password is required"),
});

const SignUp = () => {
  const dispatch = useDispatch ()
  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      mobile: '',
      password: '',
    },
    validationSchema: SignUpSchema,
    onSubmit: (values) => {
      dispatch(registerUser(values));
    },
  });

  return (
    <>
    <Meta title={'Sign Up'}/>
      <BreadCrumb title ='Sign Up' />
      <Container class1="signup-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className='text-center mb-3' >Create Account</h3>
              <form action="" className='d-flex flex-column gap-10'onSubmit={formik.handleSubmit}>
                  <CustomInput type="text" name='firstname' placeholder='First Name' value={formik.values.firstname} onChange={formik.handleChange("firstname")} onBlur={formik.handleBlur("firstname")}/> 
                  <div className='error'>{formik.touched.firstname && formik.errors.firstname}</div>
                  <CustomInput type="text" name='lastname' placeholder='Last Name' value={formik.values.lastname} onChange={formik.handleChange("lastname")} onBlur={formik.handleBlur("lastname")}/> 
                  <div className='error'>{formik.touched.lastname && formik.errors.lastname}</div>
                  <CustomInput type="text" name='mobile' placeholder='Mobile Number' value={formik.values.mobile} onChange={formik.handleChange("mobile")} onBlur={formik.handleBlur("mobile")}/>
                  <div className='error'>{formik.touched.mobile && formik.errors.mobile}</div> 
                  <CustomInput type="email" name='email' placeholder='Enter your email' value={formik.values.email} onChange={formik.handleChange("email")} onBlur={formik.handleBlur("email")}/> 
                  <div className='error'>{formik.touched.email && formik.errors.email}</div>
                  <CustomInput type="password" placeholder='Enter your password' name='password' className="form-control" value={formik.values.password} onChange={formik.handleChange("password")} onBlur={formik.handleBlur("password")}/> 
                  <div>
                  <div className='error'>{formik.password && formik.errors.password}</div>
                      <div className='d-flex justify-content-center align-items-center gap-15 mt-3'>
                          <button className="button border-0" type='submit'>Sign Up</button>   
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

export default SignUp