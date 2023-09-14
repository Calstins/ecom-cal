import React from 'react'
import {Link} from 'react-router-dom'
import Marquee from 'react-fast-marquee'
import BlogCard from '../components/BlogCard'
import ProductCard from '../components/ProductCard'
import SpecialProduct from '../components/SpecialProduct'
import Container from '../components/Container'
import { services} from '../utils/Data'
import MainBanner1 from '../images/main-banner-1.jpg';
import CatBanner1 from '../images/catbanner-01.jpg';
import CatBanner2 from '../images/catbanner-02.jpg';
import CatBanner3 from '../images/catbanner-03.jpg';
import CatBanner4 from '../images/catbanner-04.jpg';
import Camera from '../images/camera.jpg';
import TV from '../images/tv.jpg';
import Headphones from '../images/headphone.jpg';
import SubBanner1 from '../images/subbanner-01.webp';
import SubBanner2 from '../images/subbanner-02.webp';
import SubBanner3 from '../images/subbanner-03.webp';
import SubBanner4 from '../images/subbanner-04.webp';
import Brand1 from '../images/brand-01.png';
import Brand2 from '../images/brand-02.png';
import Brand3 from '../images/brand-03.png';
import Brand4 from '../images/brand-04.png';
import Brand5 from '../images/brand-05.png';
import Brand6 from '../images/brand-06.png';
import Brand7 from '../images/brand-07.png';
import Brand8 from '../images/brand-08.png';

const Home = () => {
  return (
    <>
    <Container class1="home-wrapper-1 py-5">
      <div className="row">
        <div className="col-6">
          <div className="main-banner position-relative">
            <img src={MainBanner1} alt="main banner" className='img-fluid rounded-3'/>
            <div className="main-banner-content position-absolute">
              <h4>SUPERCHARGED FOR PROS</h4>
              <h5>iPad S13+ Pro</h5>
              <p>From ₦44 or ₦566/mo</p>
              <Link className='button'>BUY NOW</Link>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="d-flex flex-wrap justify-content-between align-items-center gap-10">
            <div className="small-banner position-relative">
              <img src={CatBanner1} alt="small banner" className='img-fluid rounded-3'/>
              <div className="small-banner-content position-absolute">
                <h4>SUPERCHARGED FOR PROS</h4>
                <h5>iPad S13+ Pro</h5>
                <p>From ₦44 <br /> or ₦566/mo</p>
              </div>
            </div>
            <div className="small-banner position-relative">
              <img src={CatBanner2} alt="small banner" className='img-fluid rounded-3'/>
              <div className="small-banner-content position-absolute">
                <h4>NEW ARRIVAL</h4>
                <h5>But Ipad Air</h5>
                <p>From ₦44 <br /> or ₦566/mo</p>
              </div>
            </div>
            <div className="small-banner position-relative">
              <img src={CatBanner3} alt="small banner" className='img-fluid rounded-3'/>
              <div className="small-banner-content position-absolute">
                <h4>NEW ARRIVAL</h4>
                <h5>But Ipad Air</h5>
                <p>From ₦44 <br />or ₦566/mo</p>
              </div>
            </div>
            <div className="small-banner position-relative">
              <img src={CatBanner4} alt="small banner" className='img-fluid rounded-3'/>
              <div className="small-banner-content position-absolute">
                <h4>NEW ARRIVAL</h4>
                <h5>But Ipad Air</h5>
                <p>From ₦44 <br /> or ₦566/mo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
    <Container class1="home-wrapper-1 py-5">
      <div className="row">
        <div className="col-12">
          <div className="services d-flex align-items-center justify-content-between gap-15">
            {
              services?.map((i,j) => {
                return (
                  <div className="d-flex align-items-center gap-15" key={j}>
                    <img src={i.image} alt="services"/>
                    <div>
                      <h6>{i.title}</h6>
                      <p className="mb-0">{i.tagline}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </Container>
    <Container class1='home-wrapper-2 py-5'>
      <div className="row">
        <div className="col-12">
          <div className="categories d-flex justify-content-between align-items-center flex-wrap">
            <div className='d-flex align-items-center'>
              <div>
                <h6>Cameras</h6>
                <p>10 Items</p>
              </div>
              <img src={Camera} alt='camera' />
            </div>
            <div className='d-flex align-items-center'>
              <div>
                <h6>Music & Gaming</h6>
                <p>10 Items</p>
              </div>
              <img src={Camera} alt='camera' />
            </div>
            <div className='d-flex align-items-center'>
              <div>
                <h6>Smart TV</h6>
                <p>10 Items</p>
              </div>
              <img src={TV} alt='camera' />
            </div>
            <div className='d-flex align-items-center'>
              <div>
                <h6>Cameras</h6>
                <p>10 Items</p>
              </div>
              <img src={Camera} alt='camera' />
            </div>
            <div className='d-flex align-items-center'>
              <div>
                <h6>Music & Gaming</h6>
                <p>10 Items</p>
              </div>
              <img src={Camera} alt='camera' />
            </div>
            <div className='d-flex align-items-center'>
              <div>
                <h6>Smart TV</h6>
                <p>10 Items</p>
              </div>
              <img src={TV} alt='camera' />
            </div>
            <div className='d-flex align-items-center'>
              <div>
                <h6>Head Phones</h6>
                <p>10 Items</p>
              </div>
              <img src={Headphones} alt='camera' />
            </div>
            <div className='d-flex align-items-center'>
              <div>
                <h6>Cameras</h6>
                <p>10 Items</p>
              </div>
              <img src={Camera} alt='camera' />
            </div>
          </div>
        </div>
      </div>    
    </Container>
    <Container class1='featured-wrapper-2 py-5 home-wrapper-2'>
      <div className="row">
        <div className="col-12">
          <h3 className="section-heading">
            Featured Collection
          </h3>
        </div>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </div>
    </Container>
    <Container class1='famous-wrapper-2 py-5 home-wrapper-2'>
      <div className="row">
        <div className="col-3">
          <div className="famous-card position-relative">
            <img src={SubBanner1} alt="famous" className='img-fluid'/>
            <div className="famous-content position-absolute">
              <h5>Big Screen</h5>
              <h6>Smart Watch Series</h6>
              <p>From ₦100.76 ₦67/mo for 24 mo.</p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="famous-card position-relative">
            <img src={SubBanner2} alt="famous" className='img-fluid'/>
            <div className="famous-content position-absolute">
              <h5 className='text-dark'>Studio Display</h5>
              <h6 className='text-dark'>600 nits of brightness.</h6>
              <p className='text-dark'>27-inch 5K Retina display</p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="famous-card position-relative">
            <img src={SubBanner3} alt="famous" className='img-fluid'/>
            <div className="famous-content position-absolute">
              <h5 className='text-dark'>smartphones</h5>
              <h6 className='text-dark'>Smart Watch Series</h6>
              <p className='text-dark'>
                Now in Green. From $999.00 or $41.62/mo.for 24 mo. Footnote*
              </p>
            </div>
          </div>
        </div>
        <div className="col-3">
          < div className="famous-card position-relative">
            <img src={SubBanner4} alt="famous" className='img-fluid'/>
            <div className="famous-content position-absolute">
              <h5 className='text-dark'>home speakers</h5>
              <h6 className='text-dark'>Room-filling sound.</h6>
              <p className='text-dark'>From $699 or $116.58/mo. for 12 mo.*</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
    <Container class1='special-wrapper py-5 home-wrapper-2'>
      <div className="row">
        <div className="col-12">
          <h3 className="section-heading">Special Products</h3>
        </div>
        <div className="row">
          <SpecialProduct/>
          <SpecialProduct/>
          <SpecialProduct/>
        </div>
      </div>
    </Container>
    <Container class1='popular-wrapper-2 py-5 home-wrapper-2'>
      <div className="row">
        <div className="col-12">
          <h3 className="section-heading">
            Our Popular Products
          </h3>
        </div>
      </div>
      <div className="row">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </div>
    </Container>
    <Container class1='marque-wrapper-2 home-wrapper-2 py-5'>
      <div className="row">
        <div className="col-12">
          <div className="marquee-inner-wrapper card-wrapper">
            <Marquee className='d-flex'>
              <div className="mx-4 w-25">
                <img src={Brand1} alt="brand"/>
              </div>
              <div className="mx-4 w-25">
                <img src={Brand2} alt="brand"/>
              </div>
              <div className="mx-4 w-25">
                <img src={Brand3} alt="brand"/>
              </div>
              <div className="mx-4 w-25">
                <img src={Brand4} alt="brand"/>
              </div>
              <div className="mx-4 w-25">
                <img src={Brand5} alt="brand"/>
              </div>
              <div className="mx-4 w-25">
                <img src={Brand6} alt="brand"/>
              </div>
              <div className="mx-4 w-25">
                <img src={Brand7} alt="brand"/>
              </div>
              <div className="mx-4 w-25">
                <img src={Brand8} alt="brand"/>
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </Container>
    <Container class1='blog-wrapper-2 py-5 home-wrapper-2'>
      <div className="row">
        <div className="col-12">
          <h3 className="section-heading">
            Our latest News
          </h3>
        </div>
        <div className="row">
          <div className="col-3">
            <BlogCard/>
          </div>
          <div className="col-3">
            <BlogCard/>
          </div>
          <div className="col-3">
            <BlogCard/>
          </div>
          <div className="col-3">
            <BlogCard/>
          </div>
        </div>
      </div>
    </Container>
    </>
  )
}

export default Home