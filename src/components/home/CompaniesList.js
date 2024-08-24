import React from 'react';
import Slider from './Slider';

import razorpay from '../../assets/images/brand/Razorpay.png';
import swiggy from '../../assets/images/brand/swiggytext.png';
import accenture from '../../assets/images/brand/accenture.png';
import shadowFax from '../../assets/images/brand/shadowfax.png';
import deloitte from '../../assets/images/brand/Deloitte.png';
import google from '../../assets/images/brand/Google.png';
import Sunstone from '../../assets/images/brand/Sunstone.png';
import zomato from '../../assets/images/brand/zomato.png';
import mamaearth from '../../assets/images/brand/Mama_earth.png';
import flipkart from '../../assets/images/brand/flipkart.png';
import Vedantu from '../../assets/images/brand/Vedantu.png';
import CRED from '../../assets/images/brand/CRED.png';
import Lendingkart from '../../assets/images/brand/Lendingkart.png';
import propertypistol from '../../assets/images/brand/propertypistol.png';
import campk12 from '../../assets/images/brand/Camp.png';

const companies = [
  razorpay, swiggy, accenture, shadowFax, deloitte, google, Sunstone, zomato, mamaearth, flipkart, Vedantu, CRED, Lendingkart, propertypistol, campk12
];

const CompaniesList = () => {
  return (
    <section className="relative z-10">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h5 className="text-xl font-bold">
            These companies are waiting for you! (300+ Companies)
          </h5>
        </div>
        <Slider 
          duration={180} 
          toRight={true} 
          pauseOnHover={true} 
          // blurBorders={true} 
          // blurBoderColor="#eee"
        >
          {companies.map((companyLogo, index) => (
            <Slider.Slide key={index}>
              <img 
                src={companyLogo} 
                alt={`Company Logo ${index + 1}`} 
                style={{ 
                  width: '100%', 
                  height: 'auto',
                  filter: 'grayscale(100%)',
                  transition: 'filter 0.3s ease'
                }} 
                onMouseOver={e => e.currentTarget.style.filter = 'grayscale(0%)'}
                onMouseOut={e => e.currentTarget.style.filter = 'grayscale(100%)'}
              />
            </Slider.Slide>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CompaniesList;
