import React from 'react';
import accenture from "../../assets/images/brand/accenture.png";
import Lenskart from "../../assets/images/brand/Lenskart.png";
import swiggytext from "../../assets/images/brand/swiggytext.png";
import OLA from "../../assets/images/brand/OLA.png";
import Google from "../../assets/images/brand/Google.png";
import Deloitte from "../../assets/images/brand/Deloitte.png";

const Companies = () => {
  return (
    <section className="companies">
      <div className="flex flex-col gap-3.5 w-full max-w-[600px] text-center mx-auto px-4">
        <h2 className="capitalize leading-[1.2]">
          Top Tech Companies Hire <br />
          <span className="text-[#3d088b] font-extrabold">Our Students</span>
        </h2>
        <p className="text-[15px] px-8 opacity-90 leading-[1.7]">
          Take our courses and we’ll prepare you to be a talent that the industry is looking for!
        </p>
      </div>
      <div className="flex flex-row gap-8 items-center justify-around mt-8 mb-8 flex-wrap gap-y-8">
        <div className="item">
          <img src={Deloitte} className="m-0 w-[150px] h-[42px] object-contain" alt="Deloitte" />
        </div>
        <div className="item">
          <img src={accenture} className="m-0 w-[150px] h-[42px] object-contain" alt="accenture" />
        </div>
        <div className="item">
          <img src={Lenskart} className="m-0 w-[150px] h-[42px] object-contain" alt="Lenskart" />
        </div>
        <div className="item">
          <img src={swiggytext} className="m-0 w-[150px] h-[42px] object-contain" alt="swiggytext" />
        </div>
        <div className="item">
          <img src={OLA} className="m-0 w-[150px] h-[42px] object-contain" alt="OLA" />
        </div>
        <div className="item">
          <img src={Google} className="m-0 w-[150px] h-[42px] object-contain" alt="Google" />
        </div>
        <div>
          <span className="text-[18px] text-black font-bold">+100 More</span>
        </div>
      </div>
    </section>
  );
};

export default Companies;
