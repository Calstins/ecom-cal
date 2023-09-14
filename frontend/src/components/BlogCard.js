import React from 'react'
import { Link } from 'react-router-dom'
import BlogImg from '../images/blog-1.jpg'

const BlogCard = () => {
  return (
    <div className="blog-card">
      <img src= {BlogImg} className='img-fluid' alt='blog'/>
      <div className="blog-content">
        <p className="date">29 July, 2023</p>
        <h5 className="title">Beautiful Electronic Product Title</h5>
        <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, magni! </p>
        <Link to='/blog/:id' className='button'>Read More</Link>
      </div>
    </div>  
  )
}

export default BlogCard