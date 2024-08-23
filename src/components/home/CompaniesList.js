import React from 'react';
import razorpay from '../../assets/images/brand/Razorpay.png';
import swiggy from '../../assets/images/brand/swiggytext.png';
import accenture from '../../assets/images/brand/accenture.png';
import shadowFax from '../../assets/images/brand/shadowfax.png';
import deloitte from '../../assets/images/brand/Deloitte.png';
import axisBank from '../../assets/images/brand/asixbank.png';
import citibank from '../../assets/images/brand/Citi_Bank.png';
import zomato from '../../assets/images/brand/zomato.png';
import mamaearth from '../../assets/images/brand/Mama_earth.png';
import flipkart from '../../assets/images/brand/flipkart.png';
import exl from '../../assets/images/brand/exl.png';
import zs from '../../assets/images/brand/zs.png';
import virtusa from '../../assets/images/brand/virtusa.png';
import paypal from '../../assets/images/brand/paypal.png';
import campk12 from '../../assets/images/brand/Camp.png';

const companies = [
  razorpay, swiggy, accenture, shadowFax, deloitte, axisBank, citibank, zomato,
  mamaearth, flipkart, exl, zs, virtusa, paypal, campk12
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
        <div className="overflow-hidden">
          <div className="flex items-center gap-4 animate-marquee">
            {companies.map((company, index) => (
              <img
                key={index}
                src={company}
                alt="Company Logo"
                className="h-16 mx-4"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompaniesList;
