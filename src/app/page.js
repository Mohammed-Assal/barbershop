import "./style.css";
export default function Home() {
  return (
    <div>
      {/* =================================== Header ================================ */}
      <header className="header">
        <img src="img/ei_1655973219297-removebg-preview.png" alt="" />
        <img src="img/icons8-menu-30.png" id="menu" className="img" alt="" />
        <nav id="nav">
          <div className="menu">
            <a href="#home">HOME</a>
            <a href="#services">SERVICES</a>
            <a href="#testimonial">TESTIMONIALS</a>
            <a href="#gallery">GALLERY</a>
            <a href="#about" className="about-a">
              ABOUT
            </a>
            <a href="#contact" className="about-a">
              CONTACT
            </a>
          </div>
          <div className="icons">
            <img src="img/icons8-search-50.png" alt="" />
            <img src="img/icons8-shopping-cart-24.png" alt="" />
          </div>
        </nav>
      </header>
      {/* =================================== End Header =============================== */}

      {/* =================================== Home =============================== */}
      <section id="home" className="home">
        <div className="content">
          <h5>WELCOME BARBER SHOP</h5>
          <h1>Achieve Your Style</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          <a href="#services" className="btn">
            Our Services <span></span>
          </a>
        </div>
      </section>
      {/* =================================== End Home =============================== */}

      {/* =================================== Services =============================== */}
      <section className="services" id="services">
        <div className="container-services">
          <div className="title-services">
            <div className="title">
              <h5 className="header-title">BARBER SHOP</h5>
              <h1>Our Services</h1>
              <span></span>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur <br /> Facilis quia aliquam
              neque.
            </p>
          </div>
          <div className="boxes">
            <div className="box">
              <img src="img/1.png" alt="" />
              <h3>Hair Styling</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur.
                <br />
              </p>
            </div>
            <div className="box">
              <img src="img/2.png" alt="" />
              <h3>Styling The Beard</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. <br />
              </p>
            </div>
            <div className="box">
              <img src="img/3.png" className="img-3" alt="" />
              <h3>Free Face Mask</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. <br />
              </p>
            </div>
            <div className="box">
              <img src="img/4.png" alt="" />
              <h3>Moustache</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. <br />
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* =================================== End Services =============================== */}

      {/* =================================== Testimonial =============================== */}
      <section className="testimonial" id="testimonial">
        <div className="title-1">
          <h5 className="header-title">BARBER SHOP</h5>
          <h1>Our Testimonials</h1>
          <p></p>
        </div>
        <div className="container-testimonial">
          <div className="box">
            <div className="user">
              <img src="img/test-1.jpg" alt="" />
              <div className="user-info">
                <h3>Gharles Alexander</h3>
                <small>@gharlesalexander</small>
              </div>
              <img src="img/icons8-twitter-48.png" className="img" alt="" />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At quis
              repellat et saepe dolores quia mollitia odio ex sed
              praesentium.Lorem ipsum dolor sit amet consectetur adipisicing
              elit. At quis repellat et saepe dolores quiaLorem ipsum dolor sit
              amet consectetur adipisicing elit. At quis repellat et saepe
              dolores quia
            </p>
          </div>
          <div className="box">
            <div className="user">
              <img src="img/test-2.jpg" alt="" />
              <div className="user-info">
                <h3>Christopher Anna</h3>
                <small>@christopheranna</small>
              </div>
              <img src="img/icons8-twitter-48.png" className="img" alt="" />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At quis
              repellat et saepe Lorem ipsum dolor sit amet consectetur
              adipisicing elit.{" "}
            </p>
          </div>
          <div className="box">
            <div className="user">
              <img src="img/test-3.jpg" alt="" />
              <div className="user-info">
                <h3>Michael Emma</h3>
                <small>@michaelemma</small>
              </div>
              <img src="img/icons8-twitter-48.png" className="img" alt="" />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At quis
              repellat et saepe dolores quia mollitia odio ex sed
              praesentium.Lorem ipsum dolor sit amet consectetur adipisicing
              elit. At quis repellat et saepe dolores quiaLorem ipsum dolor sit
              amet consectetur adipisicing elit. At quis repellat et saepe
              dolores quia
            </p>
          </div>
        </div>
      </section>
      {/* =================================== End Testimonial =============================== */}

      {/* =================================== Gallery =============================== */}
      <section className="gallery" id="gallery">
        <div className="title-1">
          <h5 className="header-title">BARBER SHOP</h5>
          <h1>Our Gallery</h1>
          <p></p>
        </div>
        <div className="container-gallery">
          <div className="img">
            <img src="img/pic-1.jpg" alt="" />
          </div>
          <div className="img">
            <img src="img/pic-2.jpg" alt="" />
          </div>
          <div className="img">
            <img src="img/pic-3.jpg" alt="" />
          </div>
          <div className="img">
            <img src="img/pic-4.jpg" alt="" />
          </div>
        </div>
      </section>
      {/* =================================== End Gallery =============================== */}

      {/* =================================== About =============================== */}
      <section className="about" id="about">
        <div className="title-1">
          <h5 className="header-title">BARBER SHOP</h5>
          <h1>About Us</h1>
          <p></p>
        </div>
        <div className="container-about">
          <div className="img">
            <img src="img/gale-3.jpg" alt="" />
          </div>
          <div className="text">
            <h1>What Do You Know About Us?</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ab
              exercitationem tenetur id, vel esse! Quaerat consequatur repellat
              hic laudantium ut aut deserunt ea assumenda culpa voluptas error
              quibusdam illum, perferendis, dignissimos nulla odit
              necessitatibus cumque totam sint harum. Dicta eligendi ad harum
              quisquam molestiae sit magni natus, porro at porro at odit.
            </p>
            <a href="#about" className="btn">
              About Us <span></span>
            </a>
          </div>
        </div>
      </section>
      {/* =================================== End About =============================== */}

      {/* =================================== Contact =============================== */}
      <section className="contact" id="contact">
        <div className="title-1">
          <h5 className="header-title">BARBER SHOP</h5>
          <h1>Contact Us</h1>
          <p></p>
        </div>
        <div className="container-contact">
          <div className="img">
            <img src="img/img-map.jpg" alt="" />
          </div>
          <div className="text">
            <h1>Get in Touch</h1>
            <div className="row">
              <div className="col">
                <p>New York</p>
                <p>NY 10253</p>
              </div>
              <div className="col">
                <p>351 123 456 7890</p>
                <p>Barber@shop.com</p>
              </div>
            </div>
            <div className="input">
              <input type="text" placeholder="Name" />
              <br />
              <input type="text" placeholder="Phone Number" />
              <br />
              <textarea
                cols="20"
                rows="3"
                placeholder="Message and time booking"
              ></textarea>
              <br />

              <label className="text-white" htmlFor="time">
                Select Time
              </label>
              <input type="time" id="time" name="time" />
              <br />

              <a href="#home" className="btn">
                SEND <span></span>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* =================================== End Contact =============================== */}

      {/* =================================== Footer =============================== */}
      <section className="footer">
        <div className="row">
          <img src="img/Footer.png" className="img" alt="" />
          <div className="col">
            <div className="head">
              <img src="img/ei_1655973219297-removebg-preview.png" alt="" />
              <div className="title">
                <h1>
                  BARBER <span> SHOP</span>
                </h1>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In harum
              maxime, possimus fuga voluptate ullam provident temporibus quas
              velit beatae odit.
            </p>
            <div className="icons">
              <img src="img/icons8-facebook-24.png" alt="" />
              <img src="img/icons8-twitter-circled-50.png" alt="" />
              <img src="img/icons8-instagram-50.png" alt="" />
              <img src="img/icons8-pinterest-50.png" alt="" />
            </div>
          </div>
          <div className="col">
            <h1 className="new">Newsletter</h1>
            <input type="text" placeholder="your@email.com" />
            <br />
            <a href="#" className="btn">
              SUBSCRIBE <span></span>
            </a>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              est praesentium labore eaque dolorem ducimus enim dolore cum sunt
              iure.
            </p>
          </div>
        </div>
        <div className="footer-end">
          <div className="copy">
            <p>
              {" "}
              <span>Barber</span> &copy; 2022. All Rights Reserved.
            </p>
          </div>
          <div className="nav">
            <a href="#home">HOME</a>
            <a href="#services">SERVICES</a>
            <a href="#testimonial">TESTIMONIALS</a>
            <a href="#gallery">GALLERY</a>
            <a href="#about">ABOUT</a>
            <a href="#contact">CONTACT</a>
          </div>
        </div>
      </section>
      {/* =================================== End Footer =============================== */}
    </div>
  );
}
