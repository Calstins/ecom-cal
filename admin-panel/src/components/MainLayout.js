import React, { useState } from 'react';
import {
  DashboardOutlined,
  ShoppingCartOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons';
import { SiBrandfolder } from "react-icons/si";
import { BiCategoryAlt, BiPurchaseTagAlt, BiAddToQueue } from "react-icons/bi";
import {
  AiOutlineBgColors,
} from "react-icons/ai";
import { BsViewList, BsInfoSquare } from "react-icons/bs";
import { LiaUsersCogSolid } from "react-icons/lia";
import { TfiLayoutListPost } from "react-icons/tfi";
import { RxSpeakerLoud } from "react-icons/rx";
import { MdPostAdd } from "react-icons/md";
import {MdOutlineAddShoppingCart} from 'react-icons/md'
import { ImBlog } from "react-icons/im";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RiMenuFoldLine, RiMenuUnfoldLine } from "react-icons/ri";
import { FaBloggerB } from "react-icons/fa";
import { Link, useNavigate, Outlet } from "react-router-dom";
import { Layout, Menu, Button, theme } from 'antd';


const { Header, Sider, Content } = Layout;

const MainLayout= () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <h2 className="fs-5 text-center py-3 mb-0">
            <span className="sm-logo">BJJ</span>
            <span className="lg-logo">BUYJEJE.COM</span>
          </h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          onClick={({ key }) => {
            if (key === "signout") {
            } else {
              navigate(key);
            }
          }}
          items={[
            {
              key: '',
              icon: <DashboardOutlined  />,
              label: 'Dashboard',
            },
            {
              key: 'customers',
              icon: <LiaUsersCogSolid />,
              label: 'Customers',
            },
            {
              key: "Catalog",
              icon: <ShoppingCartOutlined />,
              label: "Catalog",
              children: [
                {
                  key: "product",
                  icon: <MdOutlineAddShoppingCart/>,
                  label: "Add Product",
                },
                {
                  key: "list-product",
                  icon: <UnorderedListOutlined />,
                  label: "Product List",
                },
                {
                  key: "brand",
                  icon: <SiBrandfolder />,
                  label: "Brand",
                },
                {
                  key: "list-brand",
                  icon: <UnorderedListOutlined />,
                  label: "Brand List ",
                },
                {
                  key: "category",
                  icon: <BiCategoryAlt />,
                  label: "Category",
                },
                {
                  key: "list-category",
                  icon: <UnorderedListOutlined />,
                  label: "Category List",
                },
                {
                  key: "color",
                  icon: <AiOutlineBgColors />,
                  label: "Color",
                },
                {
                  key: "list-color",
                  icon: <UnorderedListOutlined />,
                  label: "Color List",
                },
              ],
            },
            {
              key: "orders",
              icon: <BiPurchaseTagAlt />,
              label: "Orders",
            },
            {
              key: "marketing",
              icon: <RxSpeakerLoud />,
              label: "Marketing",
              children: [
                {
                  key: "coupon",
                  icon: <ImBlog />,
                  label: "Add Coupon",
                },
                {
                  key: "coupon-list",
                  icon: <UnorderedListOutlined />,
                  label: "Coupon List",
                },
              ],
            },
            {
              key: "blogs",
              icon: <FaBloggerB />,
              label: "Blogs",
              children: [
                {
                  key: "blog",
                  icon: <MdPostAdd />,
                  label: "Add Blog",
                },
                {
                  key: "blog-list",
                  icon: <TfiLayoutListPost />,
                  label: "Blog List",
                },
                {
                  key: "blog-category",
                  icon: <BiAddToQueue />,
                  label: "Add Blog Category",
                },
                {
                  key: "blog-category-list",
                  icon: <BsViewList />,
                  label: "Blog Category List",
                },
              ],
            },
            {
              key: "enquiries",
              icon: <BsInfoSquare />,
              label: "Enquiries",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          className="d-flex justify-content-between ps-1 pe-5"
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <RiMenuUnfoldLine /> : <RiMenuFoldLine /> }
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          <div className="d-flex gap-4 align-items-center">
            <div className="position-relative">
              <IoIosNotificationsOutline className="fs-4" />
              <span className="badge bg-warning rounded-circle p-1 position-absolute">
                3
              </span>
            </div>

            <div className="d-flex gap-3 align-items-center dropdown">
              <div>
                <img
                  width={32}
                  height={32}
                  src="https://scontent.flos1-2.fna.fbcdn.net/v/t1.6435-9/131270966_4264356886913662_412641147247558977_n.jpg?_nc_cat=104&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeG-IPwsWMVK_Gy1v9R1QK6JzDyycwwb7c_MPLJzDBvtz-sz8lJx8R9zKhuYg2UUHAAmtNDNJVVaBrtd9ZlFHszk&_nc_ohc=MRybO_bSDp4AX_ceRAA&_nc_ht=scontent.flos1-2.fna&oh=00_AfAkLrK-R0o74_NEDITRXX0Ik4qKYYZfuSu1LbzkfHR9aw&oe=64FC4143"
                  alt=""
                />
              </div>
              <div
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <h5 className="mb-0">Caleb</h5>
                <p className="mb-0">opulecalebtins@gmail.com</p>
              </div>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <Link
                    className="dropdown-item py-1 mb-1"
                    style={{ height: "auto", lineHeight: "20px" }}
                    to="/"
                  >
                    View Profile
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item py-1 mb-1"
                    style={{ height: "auto", lineHeight: "20px" }}
                    to="/"
                  >
                    Signout
                  </Link>
                </li>
              </div>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
           <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout