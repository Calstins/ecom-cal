import React, { useState } from 'react'
import CustomInput from "../components/CustomInput";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Addblog = () => {
    const [desc, setDesc] = useState();
    const handleDesc = (e) => {
        setDesc(e)
    }
  return (
    <div>
        <h3 className="mb-4 title">Add Blog</h3>
       <form action="">
       <div className="mt-4">
        <div>
        <CustomInput 
            type="text"
            label="Enter Blog Title"
            name="title"
        />
        <select
            name="category"
            className='form-contol py-3 mt-3 rounded-3'
          >
            <option value="">Select Blog Category</option>
          </select>
          <ReactQuill
            theme="snow"
            className="mt-3 rounded-3"
            name="description"
            value={desc}
            onChange={(evt)=>{handleDesc(evt)}}
          />
          <button
            className="btn btn-primary border-0 rounded-3 my-5"
            type="submit"
          >
            Add Blog
          </button>
          
        </div>
       </div>
       </form> 
    </div>
  )
}

export default Addblog