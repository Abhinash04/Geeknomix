import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faBriefcase, faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';
import heroImage from '../../assets/images/Hero/hero.png';
import CompaniesList from './CompaniesList';

const Section1 = () => {
  return (
    <section className="relative w-full h-auto" style={{ height: 'max-content' }}>
      <div className="absolute right-[80%] top-1/2 translate-y-[-50%] w-[500px] h-[500px] bg-gradient-radial from-[#9632FF] via-[50%] to-[#ffffff] opacity-20" style={{ filter: 'blur(300px)' }}></div>
      <div className="fresnel-container fresnel-lessThan-desktop"></div>
      <div className="overflow-hidden">
        <div className="ContainerV2_1 relative z-20 mx-auto my-24 flex flex-nowrap gap-6 items-stretch h-max min-h-0 md:my-12">
          <div className="min-w-[60%] flex-basis-[60%] flex-grow flex-shrink text-center md:text-left md:mr-0">
            <div className="box1 bannerV1">
              <div className="bannerV2">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="style-svg-icon w-1/2 h-auto object-contain text-white"
                />
              </div>
              <h5 className="TV2 TV12">
                Your upskilling partner
              </h5>
            </div>
            <h1 className="TV3 bannerV3">
              Land your <span className="text-[#ff7700]">dream job</span> by learning from the top 1%
            </h1>
            <p className="TV4 TV14">
              Learn skills you didn't get in school, directly from India's best experts.
            </p>
            <a
              href="/tracks"
              className="button_V11 button_V1 BannerStyles__BannerButton-sc-14m4gzv-6 mb-[60px] md:mb-[50px]"
            >
              <div className="relative h-full">
                <div className="h-full flex items-center justify-center">
                  Explore Programs
                </div>
              </div>
            </a>
            <div className="hero-stats flex w-fit shadow-[0_0_50px_0_rgba(25,24,29,0.08)] rounded-lg bg-white items-center text-left max-w-full md:mx-auto md:w-fit sm:w-full">
              <div className="StatItemStyledStatItem flex-[1_1_0%] w-1/2 flex m-[15px_0] px-[40px] sm:px-[24px] sm:m-[0_0_5px_-8px] sm:py-[9px]">
                <div className="StatItemStatIconWrapper flex items-center mr-[20px]">
                  <FontAwesomeIcon icon={faBriefcase} className="w-8 h-10 ml-20 text-[#ff9800]" />
                </div>
                <div className="StatItemStatIconWrapper whitespace-nowrap items-center">
                  <h3 className="TV5 TV15">
                    92%
                  </h3>
                  <p className="TV4 TV16">
                    Job placement
                  </p>
                </div>
              </div>
              <div className="separator-line box1 flex h-[50px] w-0 opacity-50 border border-[#ececec]"></div>
              <div className="StatItemStyledStatItem flex-[1_1_0%] w-1/2 flex m-[15px_0] px-[40px] sm:px-[24px] sm:m-[0_0_5px_-8px] sm:py-[9px]">
                <div className="StatItemStatIconWrapper flex items-center mr-[20px]">
                  <FontAwesomeIcon icon={faIndianRupeeSign} className="w-8 h-8 ml-20 text-[#ff9800]" />
                </div>
                <div className="StatItemStatIconWrapper whitespace-nowrap items-center">
                  <h3 className="TV5 TV15">
                    30 Lac
                  </h3>
                  <p className="TV4 TV16">
                    Packages upto
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Update this div to include 'hidden' on smaller screens */}
          <div className="hero-image flex justify-center items-center lg:block hidden">
            <img src={heroImage} alt="geeknomix" className="mt-8 max-w-full h-auto" />
          </div>
        </div>
        <div className="company-list w-full mt-8">
          <CompaniesList />
        </div>
      </div>
    </section>
  );
};

export default Section1;
