import React, { useEffect } from 'react'
import './Home.css'
// import './Home'
import ScrollReveal from 'scrollreveal';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
export default function Home() {

  useEffect(() => {
    const menuBtn = document.getElementById("menu-btn");
    const navLinks = document.getElementById("nav-links");
    const menuBtnIcon = menuBtn.querySelector("i");

    // menuBtn.addEventListener("click", (e) => {
    //   console.log('=================')
    //   navLinks.classList.toggle("open");

    //   const isOpen = navLinks.classList.contains("open");
    //   menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
    // });

    // navLinks.addEventListener("click", (e) => {
    //   navLinks.classList.remove("open");
    //   menuBtnIcon.setAttribute("class", "ri-menu-line");
    // });

    const scrollRevealOption = {
      distance: "50px",
      origin: "bottom",
      duration: 1000,
    };

    ScrollReveal().reveal(".header__image img", {
      ...scrollRevealOption,
      origin: "right",
    });
    ScrollReveal().reveal(".header__content h1", {
      ...scrollRevealOption,
      delay: 500,
    });
    ScrollReveal().reveal(".header__content p", {
      ...scrollRevealOption,
      delay: 1000,
    });
    ScrollReveal().reveal(".header__links", {
      ...scrollRevealOption,
      delay: 1500,
    });

    ScrollReveal().reveal(".steps__card", {
      ...scrollRevealOption,
      interval: 500,
    });

    ScrollReveal().reveal(".service__image img", {
      ...scrollRevealOption,
      origin: "left",
    });
    ScrollReveal().reveal(".service__content .section__subheader", {
      ...scrollRevealOption,
      delay: 500,
    });
    ScrollReveal().reveal(".service__content .section__header", {
      ...scrollRevealOption,
      delay: 1000,
    });
    ScrollReveal().reveal(".service__list li", {
      ...scrollRevealOption,
      delay: 1500,
      interval: 500,
    });

    ScrollReveal().reveal(".experience__card", {
      duration: 1000,
      interval: 500,
    });

    ScrollReveal().reveal(".download__image img", {
      ...scrollRevealOption,
      origin: "right",
    });
    ScrollReveal().reveal(".download__content .section__header", {
      ...scrollRevealOption,
      delay: 500,
    });
    ScrollReveal().reveal(".download__content p", {
      ...scrollRevealOption,
      delay: 1000,
    });
    ScrollReveal().reveal(".download__links", {
      ...scrollRevealOption,
      delay: 1500,
    });
    // ---------------------------------------------------------
    const crazyButtons = document.querySelectorAll(".btn-crazy");

    // define our functions
    function goCrazy() {
      // get a random number for the left offset
      // random num for top offset
      const offsetLeft = Math.random() * (window.innerWidth - this.clientWidth);
      const offsetTop = Math.random() * (window.innerHeight - this.clientHeight);

      console.log(offsetLeft, offsetTop);

      // apply those numbers to the button
      this.style.top = offsetTop + "px";
      this.style.left = offsetLeft + "px";
    }

    // add event listeners
    crazyButtons.forEach((button) =>
      button.addEventListener("mouseenter", goCrazy)
    );
  }, [])


  return (
    <>
      <Header/>
      
      <section className="section__container steps__container" id="rent">
        <p className="section__subheader">HOW IT WORKS</p>
        <h2 className="section__header">Payora following 3 working steps</h2>
        <div className="steps__grid">
          <div className="steps__card">
            <span><i className="ri-map-pin-fill"></i></span>
            <h4>Send online</h4>
            <p>
              Log in or sign up and create
              your profile for free to send
              money online.
            </p>
          </div>
          <div className="steps__card">
            <span><i className="ri-calendar-check-fill"></i></span>
            <h4>Send with our app</h4>
            <p>
              Send money, pay bills, check exchange rates, or start a transfer in the app and pay in-store-all on the go.
            </p>
          </div>
          <div className="steps__card">
            <span><i className="ri-bookmark-3-fill"></i></span>
            <h4>Send in person</h4>
            <p>
              Transfer money in person from more than 2 Payora® U.S. agent locations3..
            </p>
          </div>
        </div>
      </section>

      <section className="section__container service__container" id="service">
        <div className="service__image">
          <img src="https://zil.us/wp-content/uploads/2022/08/Experience-The-Best-International-Money-Transfer-with-Zil-ZB.png" alt="service" />
        </div>
        <div className="service__content mx-1">
          <p className="section__subheader">BEST SERVICES</p>
          <h2 className="section__header">
            Feel the best experience with Payora
          </h2>
          <ul className="service__list">
            <li>
              <span><i className="ri-price-tag-3-fill"></i></span>
              <div>
                <h4>Deals for every budget</h4>
                <p>
                  With Payora, your funds arrive quickly and easily
                </p>
              </div>
            </li>
            <li>
              <span><i className="ri-wallet-fill"></i></span>
              <div>
                <h4>Best price guarantee</h4>
                <p>
                  We ensure you get competitive rates in the market, so you can
                  book with confidence knowing you're getting the best deal.
                </p>
              </div>
            </li>
            <li>
              <span><i className="ri-customer-service-fill"></i></span>
              <div>
                <h4>Support 24/7</h4>
                <p>
                  Our dedicated team is available 24/7 to assist you with any
                  questions or concerns, ensuring a smooth rental experience.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="section__container experience__container" id="ride">
        <p className="section__subheader">CUSTOMER EXPERIENCE</p>
        <h2 className="section__header">
          We are ensuring the best customer experience
        </h2>
        <div className="experience__content">
          <div className="experience__card">
            <span><i className="ri-price-tag-3-fill"></i></span>
            <h4>Competitive pricing</h4>
          </div>
          <div className="experience__card">
            <span><i className="ri-money-rupee-circle-fill"></i></span>
            <h4>Easier sender</h4>
          </div>
          <div className="experience__card">
            <span><i className="ri-bank-card-fill"></i></span>
            <h4>Most Felxible Payment Plans</h4>
          </div>
          <div className="experience__card">
            <span><i className="ri-award-fill"></i></span>
            <h4>The Best Extended security Warranties</h4>
          </div>
          <div className="experience__card">
            <span><i className="ri-customer-service-2-fill"></i></span>
            <h4>Customer Assistance 24/7</h4>
          </div>
          <div className="experience__card">
            <span><i className="ri-car-fill"></i></span>
            <h4>Your Choice to make someone happy</h4>
          </div>
          <img src="https://a3e.com/wp-content/uploads/2020/10/Customer-Experience.png" alt="experience" />
        </div>
      </section>

      <section className="section__container download__container" id="contact">
        <div className="download__grid">
          <div className="download__content">
            <h2 className="section__header">Download the free Payora app</h2>
            <p>
              Download the Payora app to send money easily, find exclusive
              deals, and access 24/7 support, all from your mobile device.
            </p>
            <div className="download__links">
              <a href="#">
                <img src="https://www.gov.br/pt-br/imagens-de-servicos/apple.png" alt="app store" />
              </a>
              <a href="#">
                <img src="https://fireship.io/lessons/pwa-to-play-store/img/googleplay-badge.png" alt="play" />
              </a>
            </div>
          </div>
          <div className="download__image">
            <img src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/78/bd/15/78bd1551-b0f0-8acc-56d4-005556198794/aaef25cd-1d22-470d-ac21-1ce46846da45_hb-6.png/300x0w.jpg" alt="download" />
          </div>
        </div>
      </section>
      <Footer/> 

      {/* <script src="https://unpkg.com/scrollreveal"></script> */}
      {/* <script src="main.js"></script> */}
    </>



  )
}
