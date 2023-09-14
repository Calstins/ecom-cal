import React, { useEffect, useState } from "react";
import { Input, Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../features/product/productSlice";
import { Link } from "react-router-dom";


const Productlist = () => {
  const [searchTitle, setSearchTitle] = useState("")

  const columns = [
    {
      title: "S/No",
      dataIndex: "key",
    },
    {
      title: "Title",
      dataIndex: "title",
      sorter: (a, b) => a.title.length - b.title.length,
      filterValue: [searchTitle],
      onFilter: (value, record) => {
        return (
          String(record.title)
            .toLowerCase()
            .includes(value.toLowerCase()) ||
          String(record.brand)
            .toLowerCase()
            .includes(value.toLowerCase()) ||
          String(record.color)
            .toLowerCase()
            .includes(value.toLowerCase()) ||
          String(record.category)
            .toLowerCase()
            .includes(value.toLowerCase()) 
        );
      }
    },
    {
      title: "Brand",
      dataIndex: "brand",
      sorter: (a, b) => a.brand.length - b.brand.length,
    },
    {
      title: "Category",
      dataIndex: "category",
      sorter: (a, b) => a.category.length - b.category.length,
    },
    {
      title: "Color",
      dataIndex: "color",
    },
    {
      title: "Price",
      dataIndex: "price",
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: "Action",
      dataIndex: "action",
    },
  ];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  const productState = useSelector((state) => state.product.products);
  const data1 = [];
  for (let i = 0; i < productState.length; i++) {
    data1.push({
      key: i + 1,
      title: productState[i].title,
      brand: productState[i].brand,
      category: productState[i].category,
      color: productState[i].color,
      price: `${productState[i].price}`,
      action: (
        <>
          <Link to="/" className=" fs-3 text-primary">
            <BiEdit />
          </Link>
          <Link className="ms-3 fs-3 text-danger" to="/">
            <RiDeleteBinLine />
          </Link>
        </>
      ),
    });
  }
  return (
    <div>
      <h3 className="mb-4 title">Products</h3>
      <div>
        <Input.Search 
          placeholder="Easy search here..." 
          className="mt-3 w-50 mb-3"
          onSearch={(value)=>{
            setSearchTitle(value)
          }}
          onChange={(e)=>{
            setSearchTitle(e.target.value)
          }}
        />
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default Productlist;
