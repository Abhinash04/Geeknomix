import React from 'react';
import experts from "../../assets/images/teacher/experts.png";
import experience from "../../assets/images/teacher/mentors-industries.png";

const Section6 = () => {
  return (
    <div className="ContainerV2_1 pt-[100px]">
      <p className="TV4 TV29">MENTORS</p>
      <h2 className="TV7 TV43">
        Connecting you to the top 1% experts
      </h2>
      <p className="TV6 TV44">
        Learn only from the best with Geeknomix
      </p>
      <div className="flex">
        <div className="MentorsContentWrapper flex flex-col items-center justify-center w-full">
          <div className="MentorsInfoContainer grid grid-cols-1 sm:grid-cols-2 gap-[20px] mt-[56px] sm:mt-[30px]">
            <div className="MentorsInfoTags flex items-center border border-[#e7e7eb] rounded-[8px] p-[21px] sm:p-[10px]">
              <img loading="lazy" src={experience} alt="home" className="mr-[28px] h-[28px] w-[28px]" />
              <div className="whitespace-nowrap">
                <h4 className="TV8 TV43">15+</h4>
                <p className="TV1 TV26">Mentors</p>
              </div>
            </div>
            <div className="MentorsInfoTags flex items-center border border-[#e7e7eb] rounded-[8px] p-[21px] sm:p-[10px]">
              <img loading="lazy" src={experience} alt="home" className="mr-[28px] h-[28px] w-[28px]" />
              <div className="whitespace-nowrap">
                <h4 className="TV8 TV43">20+</h4>
                <p className="TV1 TV26">Industries</p>
              </div>
            </div>
          </div>
          <p className="TV6 TV45 text-center mt-[20px]">
            Specifically designed curriculum by industry experts
          </p>
          <a href="/tracks" className="button_V11 button_V1 mt-[20px]">
            <div className="relative h-full">
              <div className="ButtonStyledContent">Try Masterclass</div>
            </div>
          </a>
        </div>
        <div className="flex">
          <div className="flex hidden lg:block">
            <div title="" role="button" aria-label="animation" tabIndex="0" className="w-[615px] h-[375px] overflow-hidden mx-auto outline-none">
              <img src={experts} alt="Experts" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
