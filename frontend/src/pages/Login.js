import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';
import { useFormik } from 'formik';
import { loginUser } from '../features/user/userSlice';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';

const loginSchema = yup.object({
  email: yup.string().email("Email should be valid").required("Email Address is Required"),
  password: yup.string().required("Password is required"),
});

const Login = () => {
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values))
      dispatch(loginUser(values));
    },
  });
  return (
    <>
    <Meta title={'Login'}/>
      <BreadCrumb title ='Login' />
      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className='text-center mb-3'>Login</h3>
              <form action="" className='d-flex flex-column gap-10' onSubmit={formik.handleSubmit}>
                <CustomInput type="email" name='email' className="form-control" placeholder='Enter your email' value={formik.values.email} onChange={formik.handleChange("email")} onBlur={formik.handleBlur("email")}/> 
                  <div className='error'>{formik.touched.email && formik.errors.email}</div>  
                <CustomInput type="password" placeholder='Enter your password' name='password' className="form-control" value={formik.values.password} onChange={formik.handleChange("password")} onBlur={formik.handleBlur("password")}/> 
                  <div className='error'>{formik.touched.password && formik.errors.password}</div>
                <div>
                    <Link to='/forgot-password'>Forgot your password?</Link>
                    <div className='d-flex justify-content-center align-items-center gap-15 mt-3'>
                        <button type='submit' className="button border-0">Login</button>
                        <Link to='/sign-up' className='button signup'>Sign Up</Link>   
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

export default Login