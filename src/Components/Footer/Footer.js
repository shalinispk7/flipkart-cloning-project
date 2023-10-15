import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './Footer.css'
const Footer = () => {
  return (
    <footer>
      <section className='footer-sec'>
        <div className='container'>
          <div className='footer-head d-flex justify-content-center flex-wrap-wrap py-3 px-0'>
            <div className='footer-list '>
              <h5>ABOUT</h5>
              <a href='#'>contact us</a>
              <a href='#'>about us</a>
              <a href='#'>careers us</a>
              <a href='#'>flipkart stories</a>
              <a href='#'>press</a>
              <a href='#'>flipkart wholesale</a>
              <a href='#'>corporate information</a>
            </div>
            <div className='footer-list'>
              <h5>HELP</h5>
              <a href='#'>payments</a>
              <a href='#'>shipping</a>
              <a href='#'>cancellation & returns</a>
              <a href='#'>FAQ</a>
              <a href='#'>report infringement</a>
            </div>
            <div className='footer-list'>
              <h5>CUSTOMER POLICY</h5>
              <a href='#'>cancellation & returns</a>
              <a href='#'>terms of use</a>
              <a href='#'>security</a>
              <a href='#'>privacy</a>
              <a href='#'>sitemap</a>
              <a href='#'>grievance redressal</a>
              <a href='#'>EPR complilance</a>
            </div>
            <div className='footer-list'>
              <h5>SOCIAL</h5>
              <a href='#'>facebook</a>
              <a href='#'>twitter</a>
              <a href='#'>youTube</a>
            </div>
            <div className='footer-list mail-line pe-1 ps-2'>
              <h5>Mail us:</h5>
              <p>Flipkart Internet Private Limited,</p>
              <p>Building Alyssa,Begonia &</p>
              <p>Clove Ring Road,Devarabeesanahalli Village,</p>
              <p>Bengaluru,560103,</p>
              <p>Karnataka,India</p>
            </div>
            <div className='footer-list ps-1'>
              <h5>Registered Office:</h5>
              <p>Flipkart Internet Private Limited,</p>
              <p>Building Alyssa,Begonia &</p>
              <p>Clove Ring Road,Devarabeesanahalli Village,</p>
              <p>Bengaluru,560103,</p>
              <p>Karnataka,India</p>
              <p>CIN:U51109KA2012PTC066107</p>
              <p>
                Telephone: <span>044-45614700</span>
              </p>
            </div>
          </div>
          {/* footer border */}
          <div className='foot-add'>
            <div className='add-list'>
              {/* <img src={seller} alt='cart Logo' /> */}
              <a href='#'>Become a Seller</a>
            </div>

            <div className='add-list'>
              {/* <img src={advertise} alt='cart Logo' /> */}
              <a href='#'>Advertise</a>
            </div>
            <div className='add-list'>
              {/* <img src={gift} alt='cart Logo' /> */}
              <a href='#'>Gift Cards</a>
            </div>
            <div className='add-list'>
              {/* <img src={help} alt='cart Logo' /> */}
              <a href='#'>Help Center</a>
            </div>
            <div className='add-list'>
              <a href='#'>
                © 2007-2023 <a href='https://www.flipkart.com/'>Flipkart.com</a>
              </a>
            </div>
            <div className='add-list'>
              {/* <img src={payments} alt='cart Logo' /> */}
            </div>
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer
