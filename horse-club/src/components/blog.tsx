import '../index.css'

import blogImage from '../assets/images/blog-img-1.jpg'
import blogImage2 from '../assets/images/blog-img-2.jpg'
import blogImage3 from '../assets/images/blog-img-3.jpg'
import blogImage4 from '../assets/images/blog-img-4.jpg'
import blogImage5 from '../assets/images/blog-img-5.jpg'
import blogImage6 from '../assets/images/blog-img-6.jpg'

function Blog(){
    return(
        <>
        <section className="blog-section" id="blog">
      <div className="title">
        <p className="title-sub">latest from our blog</p>
        <h2 className="title-main">our blog</h2>
      </div>
      <div className="blog-cards-container">
        
        <div className="blog-card">
          <div className="blog-card-img-wrapper">
            <img
              src={blogImage}
              alt="featured image"
              className="blog-card-featured-image"
            />
          </div>
          <div className="blog-card-chips-container">
            <a href="#" className="blog-card-chip">travel</a>
            <a href="#" className="blog-card-chip">lifestyle</a>
          </div>
          <a href="#" className="blog-card-title">
            <h3 className="blog-card-title-title">Lorem ipsum dolor sit amet.</h3>
          </a>
          <p className="blog-synopsis">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
            aspernatur voluptas repellat similique odio eveniet aliquam quam
            animi beatae eligendi.
          </p>
          <div className="blog-card-meta-information">
            <div className="blog-card-meta">
              <i className="fa-solid fa-calendar-days"></i>
              <p>31<sup>st</sup> September 2025</p>
            </div>
            <div className="blog-card-meta">
              <i className="fa-solid fa-user"></i>
              <a href="#">john doe</a>
            </div>
          </div>
        </div>
        
        <div className="blog-card">
          <div className="blog-card-img-wrapper">
            <img
              src={blogImage2}
              alt="featured image"
              className="blog-card-featured-image"
            />
          </div>
          <div className="blog-card-chips-container">
            <a href="#" className="blog-card-chip">travel</a>
            <a href="#" className="blog-card-chip">lifestyle</a>
            <a href="#" className="blog-card-chip">animals</a>
            <a href="#" className="blog-card-chip">accomodation</a>
          </div>
          <a href="#" className="blog-card-title">
            <h3 className="blog-card-title-title">
              amet consectetur adipisicing elit
            </h3>
          </a>
          <p className="blog-synopsis">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
            aspernatur voluptas repellat similique odio eveniet aliquam quam
            animi beatae eligendi.
          </p>
          <div className="blog-card-meta-information">
            <div className="blog-card-meta">
              <i className="fa-solid fa-calendar-days"></i>
              <p>30<sup>th</sup> September 2025</p>
            </div>
            <div className="blog-card-meta">
              <i className="fa-solid fa-user"></i>
              <a href="#">emma clerk</a>
            </div>
          </div>
        </div>
        
        <div className="blog-card">
          <div className="blog-card-img-wrapper">
            <img
              src={blogImage3}
              alt="featured image"
              className="blog-card-featured-image"
            />
          </div>
          <div className="blog-card-chips-container">
            <a href="#" className="blog-card-chip">travel</a>
            <a href="#" className="blog-card-chip">lifestyle</a>
            <a href="#" className="blog-card-chip">accommodation</a>
          </div>
          <a href="#" className="blog-card-title">
            <h3 className="blog-card-title-title">eveniet aliquam quam animi</h3>
          </a>
          <p className="blog-synopsis">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
            aspernatur voluptas repellat similique odio eveniet aliquam quam
            animi beatae eligendi.
          </p>
          <div className="blog-card-meta-information">
            <div className="blog-card-meta">
              <i className="fa-solid fa-calendar-days"></i>
              <p>28<sup>th</sup> September 2025</p>
            </div>
            <div className="blog-card-meta">
              <i className="fa-solid fa-user"></i>
              <a href="#">brad paisley</a>
            </div>
          </div>
        </div>
        
        <div className="blog-card">
          <div className="blog-card-img-wrapper">
            <img
              src={blogImage4}
              alt="featured image"
              className="blog-card-featured-image"
            />
          </div>
          <div className="blog-card-chips-container">
            <a href="#" className="blog-card-chip">accommodation</a>
          </div>
          <a href="#" className="blog-card-title">
            <h3 className="blog-card-title-title">
              similique odio eveniet aliquam quam
            </h3>
          </a>
          <p className="blog-synopsis">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
            aspernatur voluptas repellat similique odio eveniet aliquam quam
            animi beatae eligendi.
          </p>
          <div className="blog-card-meta-information">
            <div className="blog-card-meta">
              <i className="fa-solid fa-calendar-days"></i>
              <p>27<sup>st</sup> September 2025</p>
            </div>
            <div className="blog-card-meta">
              <i className="fa-solid fa-user"></i>
              <a href="#">charlie pride</a>
            </div>
          </div>
        </div>
        
        <div className="blog-card">
          <div className="blog-card-img-wrapper">
            <img
              src={blogImage5}
              alt="featured image"
              className="blog-card-featured-image"
            />
          </div>
          <div className="blog-card-chips-container">
            <a href="#" className="blog-card-chip">lifestyle</a>
            <a href="#" className="blog-card-chip">animals</a>
          </div>
          <a href="#" className="blog-card-title">
            <h3 className="blog-card-title-title">
              similique odio eveniet aliquam quam
            </h3>
          </a>
          <p className="blog-synopsis">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
            aspernatur voluptas repellat similique odio eveniet aliquam quam
            animi beatae eligendi.
          </p>
          <div className="blog-card-meta-information">
            <div className="blog-card-meta">
              <i className="fa-solid fa-calendar-days"></i>
              <p>26<sup>th</sup> September 2025</p>
            </div>
            <div className="blog-card-meta">
              <i className="fa-solid fa-user"></i>
              <a href="#">george washington</a>
            </div>
          </div>
        </div>
        
        <div className="blog-card">
          <div className="blog-card-img-wrapper">
            <img
              src={blogImage6}
              alt="featured image"
              className="blog-card-featured-image"
            />
          </div>
          <div className="blog-card-chips-container">
            <a href="#" className="blog-card-chip">lifestyle</a>
            <a href="#" className="blog-card-chip">animals</a>
            <a href="#" className="blog-card-chip">accommodation</a>
          </div>
          <a href="#" className="blog-card-title">
            <h3 className="blog-card-title-title">quam animi beatae eligendi.</h3>
          </a>
          <p className="blog-synopsis">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
            aspernatur voluptas repellat similique odio eveniet aliquam quam
            animi beatae eligendi.
          </p>
          <div className="blog-card-meta-information">
            <div className="blog-card-meta">
              <i className="fa-solid fa-calendar-days"></i>
              <p>25<sup>th</sup> September 2025</p>
            </div>
            <div className="blog-card-meta">
              <i className="fa-solid fa-user"></i>
              <a href="#">martin luther</a>
            </div>
          </div>
        </div>
      </div>
    </section>
        </>
    )
}
export default Blog
