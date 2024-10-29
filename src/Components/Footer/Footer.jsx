import React from 'react'

export default function Footer() {
  return (
    <footer>
    <div className="section__container footer__container">
      <div className="footer__col">
        <h4>Money transfer</h4>
        <ul className="footer__links">
          <li><a href="#">Send money online</a></li>
          <li><a href="#">Send money in person</a></li>
          <li><a href="#">Send money by phone</a></li>
          <li><a href="#">Currency converter</a></li>
          <li><a href="#">Receive money</a></li>
          <li><a href="#">Money orders</a></li>
        </ul>
      </div>
      <div className="footer__col">
        <h4>About Payora</h4>
        <ul className="footer__links">
          <li><a href="#">Why Payora</a></li>
          <li><a href="#">Our Story</a></li>
          <li><a href="#">Investors</a></li>
          <li><a href="#">Press Centers</a></li>
          <li><a href="#">Advertise</a></li>
        </ul>
      </div>
      <div className="footer__col">
        <h4>Resources</h4>
        <ul className="footer__links">
          <li><a href="#">Download</a></li>
          <li><a href="#">Help Centers</a></li>
          <li><a href="#">Guides</a></li>
          <li><a href="#">Partner Network</a></li>
          <li><a href="#">Contact us</a></li>
          <li><a href="#">Developer</a></li>
        </ul>
      </div>
      <div className="footer__col">
        <h4>Extras</h4>
        <ul className="footer__links">
          <li><a href="#">Terms and conditions</a></li>
          <li><a href="#">Become a agent</a></li>
          <li><a href="#">Customer care</a></li>
          <li><a href="#">My CX rewards</a></li>
          <li><a href="#">New Offers</a></li>
        </ul>
      </div>
    </div>
    <div className="section__container footer__bar">
      <h4>Payora</h4>
      <p>Copyright © 2024 Payora. All rights reserved.</p>
      <ul className="footer__socials">
        <li>
          <a href="#"><i className="ri-facebook-fill"></i></a>
        </li>
        <li>
          <a href="#"><i className="ri-twitter-fill"></i></a>
        </li>
        <li>
          <a href="#"><i className="ri-google-fill"></i></a>
        </li>
      </ul>
    </div>
  </footer>
  )
}
