import React from 'react';
import heroImage from '../../assets/images/Hero/hero.png';
import CompaniesList from './CompaniesList';
import briefcase from "../../assets/images/Hero/briefcase-colored.svg"
import ruppee from "../../assets/images/Hero/rupee-colored.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Section1 = () => {
  return (
    <div className="BannerStylesBannerWrapper relative w-full h-auto">
      <div className="BannerLeftBlurEffect"></div>
      <div className="fresnel-container fresnel-lessThan-desktop"></div>
      <div className="BannerStylesStyledBannerWrapper overflow-hidden">
        <div className="ContainerV2_1 BannerStylesStyledAppContainer">
          <div className="BannerStylesBannerInfoWrapper">
            <div className="BannerPartnerText box1 bannerV1">
              <div className="BannerIconWrapper bannerV2">
                <FontAwesomeIcon icon={faCheckCircle} className="style-svg-icon w-1/2 h-auto object-contain text-white"/>
              </div>
              <h5 className="TV2 TV12">
                Your upskilling partner
              </h5>
            </div>
            <h1 className="TV3 BannerStylesBannerTitle TV13">
              Land your{' '}
              <span className="text-[#ffbc00]">
                dream job
              </span>{' '}
              by learning from the top 1%
            </h1>
            <div className="fresnel-container fresnel-lessThan-mobile"></div>
            <p className="TV4 TV14">
              Learn skills you didn't get in school, directly from India's best experts
            </p>
            <a
              className="button_V11 button_V1 mb-[60px]"
              href="/tracks"
            >
              <div className="relative h-full">
                <div className="ButtonStyledContent">Explore Programs</div>
              </div>
            </a>
            <div className="PlacementStatsPlacementStatsWrapper">
              <div className="StatItemStyledStatItem">
                <div className="StatItemStatIconWrapper">
                  <img
                    loading="lazy"
                    src={briefcase}
                    alt="Job placement"
                    className="StatItemStyledStatIcon"
                  />
                </div>
                <div className="whitespace-nowrap">
                  <h3 className="TV5 TV15">
                    92%
                  </h3>
                  <p className="TV4 Typography__StyledTypography-txjhuo-1 TV16">
                    Job placement
                  </p>
                </div>
              </div>
              <div className="h-[63px] w-0 opacity-50 border border-[#D4D7DC]"></div>
              <div className="StatItemStyledStatItem">
                <div className="StatItemStatIconWrapper">
                  <img
                    loading="lazy"
                    src={ruppee}
                    alt="Packages upto"
                    className="StatItemStyledStatIcon"
                  />
                </div>
                <div className="whitespace-nowrap">
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
          <div className="fresnel-greaterThanOrEqual-desktopXL ResponsiveStyleMediaWrapperV3">
            <div className="h-full w-full relative z-10 flex justify-center items-center lg:block hidden">
              <picture className="BannerStylesStyledIllustration absolute top-0 left-0 h-full w-auto">
                <img
                  src={heroImage}
                  alt="Upskill your career with Geeknomix"
                  className=""
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
      <div className="company-list w-full mt-8">
        <CompaniesList />
      </div>
      <div className="BannerRightBlurEffect"></div>
    </div>
  );
};

export default Section1;
