import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import { Link } from 'react-router-dom'
import {HiOutlineArrowLeft} from 'react-icons/hi'
import Container from '../components/Container';
import Blog from '../images/blog-1.jpg'

const SingleBlog = () => {
  return (
    <>
    <Meta title={'Dynamic Blog Name'}/>
      <BreadCrumb title ='  Dynamic Blog Name' />
        <Container class1="blog-wrapper home-wrapper-2 py-5">
          <div className="row">
              <div className="col-12">
                  <div className="singleblog-card">
                      <Link to='/blog' className='d-flex align-items-center gap-10'><HiOutlineArrowLeft className='fs-3'/> Go back to Blogs</Link>
                      <h3 className="title">A Beautiful Sunday Morning Resuration</h3>
                      <img src= {Blog} className='img-fluid w-100 my-4' alt="blog"/>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, ea facilis. Provident fugit quidem deserunt vitae beatae voluptatem ipsam esse unde reiciendis, voluptatum accusantium aliquam quisquam assumenda asperiores incidunt tempore!</p>
                  </div>
              </div>
          </div>
        </Container>
    </>
  )
}

export default SingleBlog