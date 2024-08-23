import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faBriefcase, faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';
// import briefcase from "../../assets/images/icon/briefcase-colored.svg"
import heroImage from '../../assets/images/Hero/hero.png';
import CompaniesList from './CompaniesList';

const Section1 = () => {
  return (
    <section className="hero bg-[#ede7f4] h-[600px] flex flex-col">
      <div className="container mx-auto px-16 max-w-screen-xl grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="hero-content flex flex-col items-start justify-center gap-2 py-8">
          <div className="hero-text1 flex">
            <div className="hero-text1-icon w-[25px] h-[25px] rounded-full bg-gradient-radial from-teal-400 to-teal-600 mr-2.5 flex items-center justify-center">
              <FontAwesomeIcon icon={faCheckCircle} className="w-full h-full text-green-500 text-xl" />
            </div>
            <h5 className="font-bold text-xl leading-6">Your upskilling partner</h5>
          </div>
          <h1 className="mt-4 text-4xl font-bold leading-tight capitalize">
            Land Your <span className="text-[#fd9610] font-extrabold">dream job</span> by learning from the top 1%
          </h1>
          <p className="text-lg text-gray-600">
            Take your learning organization to the next level. Who'll share their knowledge to people around in India.
          </p>
          <a href="./courses.html" className="btn btn-primary">View All Courses</a>

          <div className="hero-stats flex w-full shadow-[0_0_50px_0_rgba(25,24,29,0.08)] rounded-lg bg-white items-center text-left mt-4">
            <div className="job-placement flex-[1_1_0%] w-1/2 flex my-3 px-10">
              <div className="job-placement-icon flex items-center mr-3">
              <FontAwesomeIcon icon={faBriefcase} className="w-8 h-10 ml-20 text-[#ff9800]" />
              </div>
              <div className="job-placement-text whitespace-nowrap items-center">
                <h3 className="text-[20px] font-semibold text-[#333]">92%</h3>
                <p className="text-[14px] text-[#666]">Job placement</p>
              </div>
            </div>

            <div className="separator-line flex h-[50px] w-0 opacity-50 border border-[#ececec]"></div>

            <div className="placement-upto flex-[1_1_0%] w-1/2 flex my-3 px-10">
              <div className="placement-upto-icon flex items-center mr-3">
                <FontAwesomeIcon icon={faIndianRupeeSign} className="w-8 h-8 ml-20 text-[#ff9800]" />
              </div>
              <div className="placement-upto-text whitespace-nowrap">
                <h3 className="text-[20px] font-semibold text-[#333]">30 Lac</h3>
                <p className="text-[14px] text-[#666]">Packages upto</p>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-image flex justify-center items-center">
          <img src={heroImage} alt="geeknomix" className="mt-8 max-w-full h-auto" />
        </div>
      </div>

      <div className="company-list w-full mt-8">
        <CompaniesList />
      </div>
    </section>
  );
};

export default Section1;