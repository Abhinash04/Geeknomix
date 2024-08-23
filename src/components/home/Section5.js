import React, { useState } from 'react';
import img1 from '../../assets/images/icon/section5img1.png';
import detective from '../../assets/images/icon/detective.svg';
import img2 from '../../assets/images/icon/program-details-learn-from-experts.png';
import img3 from '../../assets/images/icon/program-details-learn-skills.png';
import img4 from '../../assets/images/icon/program-details-secure-a-job.png';
import img5 from '../../assets/images/icon/program-details-structure-career.png';
import img6 from '../../assets/images/icon/section5img1.png'; 
import img7 from '../../assets/images/icon/section5img1.png'; 
import img8 from '../../assets/images/icon/section5img1.png'; 

const Section5 = () => {
  const [activeTab, setActiveTab] = useState('Tab1');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const tabImages = {
    Tab1: img1,
    Tab2: img6, 
    Tab3: img7, 
    Tab4: img8  
  };

  const tabClass = (tabId) =>
    `flex items-center cursor-pointer ${activeTab === tabId ? 'bg-[#520fb7] text-white' : 'text-[#520fb7]'}`;

  return (
    <section className="Section5">
      <div className="ProgramDetails bg-custom-bg bg-no-repeat bg-custom-position bg-custom-size pt-custom-top">
        <div className="mx-auto max-w-[1140px] w-full px-6 lg:px-8 md:px-8 sm:px-4">
          <p className="m-0 p-0 text-[14px] md:text-[16px] leading-[1.7] font-extrabold text-[#ffba00]">
            GEEKNOMIX'S PROGRAM IN DETAIL
          </p>
          <h2 className="Typography m-0 p-0 text-[22px] sm:text-[22px] md:text-[30px] leading-tight font-black mb-[28px] md:mb-[68px]">
            How our program works
            <img
              loading="lazy"
              src={detective}
              alt="detective emoji"
              className="Emoji h-[1em] mb-[5px]"
            />
          </h2>
        </div>
        <div className="ProgramDetailsTabs flex font-medium sm:flex-col">
          <div className="fresnel-container hidden lg:block xl:hidden"></div>
          <div className="ProgramDetailsActiveTabs1 active-tab border-l-8 border-[#520fb7] font-bold hover:shadow-none sm:border-2 mx-auto max-w-screen-xl w-full flex">
            <div className="fresnel-container flex-grow flex-shrink basis-0 space-y-4">
              <div className="section5homelefttabs">
                <div className={tabClass('Tab1')} id="Tab1" onClick={() => handleTabClick('Tab1')}>
                  <div className="fresnel-container">
                    <img
                      loading="lazy"
                      src={img2}
                      alt="Learn skills that matter"
                      className="h-[25px] w-[25px] mr-[20px]"
                    />
                  </div>
                  <p className="Typography">Learn skills that matter</p>
                </div>

                <div className={tabClass('Tab2')} id="Tab2" onClick={() => handleTabClick('Tab2')}>
                  <div className="fresnel-container">
                    <img
                      loading="lazy"
                      src={img3}
                      alt="Learn from the experts in live classes"
                      className="h-[25px] w-[25px] mr-[20px]"
                    />
                  </div>
                  <p className="Typography">Learn from the experts <br /> in live classes</p>
                </div>

                <div className={tabClass('Tab3')} id="Tab3" onClick={() => handleTabClick('Tab3')}>
                  <div className="fresnel-container">
                    <img
                      loading="lazy"
                      src={img4}
                      alt="Have a structured career plan"
                      className="h-[25px] w-[25px] mr-[20px]"
                    />
                  </div>
                  <p className="Typography">Have a structured career plan</p>
                </div>

                <div className={tabClass('Tab4')} id="Tab4" onClick={() => handleTabClick('Tab4')}>
                  <div className="fresnel-container">
                    <img
                      loading="lazy"
                      src={img5}
                      alt="Secure a job in your dream company"
                      className="h-[25px] w-[25px] mr-[20px]"
                    />
                  </div>
                  <p className="Typography">Secure a job in <br />your dream company</p>
                </div>
              </div>
            </div>
            <div className="shadow-custom flex-grow flex-5 p-4">
              <div className="Tabcontent2 p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="Tabcontent1">
                  <div className="Tabcontent2">
                    <div className="fresnel-container fresnel-greaterThanOrEqual-tabletXS">
                      <h2 className="Typography">
                        {activeTab === 'Tab1' && 'Learn skills that matter'}
                        {activeTab === 'Tab2' && 'Learn from the experts in live classes'}
                        {activeTab === 'Tab3' && 'Have a structured career plan'}
                        {activeTab === 'Tab4' && 'Secure a job in your dream company'}
                      </h2>
                    </div>

                    <div className="grid w-full flex flex-wrap p-0 mt-4">
                    {activeTab === 'Tab1' && (
                      <>
                        <div className="flex items-start mb-5">
                          <div className="iconstyle style-svg-icon -rotate-90 mr-4 h-2.5 w-2.5" style={{ color: '#520fb7' }}></div>
                          <p>Specifically designed curriculum by industry experts</p>
                        </div>
                        <div className="flex items-start mb-5">
                          <div className="iconstyle style-svg-icon -rotate-90 mr-4 h-2.5 w-2.5" style={{ color: '#520fb7' }}></div>
                          <p>Structured courses to help you master skills from the basics</p>
                        </div>
                        <div className="flex items-start mb-5">
                          <div className="iconstyle style-svg-icon -rotate-90 mr-4 h-2.5 w-2.5" style={{ color: '#520fb7' }}></div>
                          <p>Hands-on industry projects under guidance of experts</p>
                        </div>
                        <div className="flex items-start mb-5">
                          <div className="iconstyle style-svg-icon -rotate-90 mr-4 h-2.5 w-2.5" style={{ color: '#520fb7' }}></div>
                          <p>Apply what you learn in real-life case studies</p>
                        </div>
                      </>
                    )}
                    {activeTab === 'Tab2' && (
                      <>
                        <div className="flex items-start mb-5">
                          <div className="iconstyle style-svg-icon -rotate-90 mr-4 h-2.5 w-2.5" style={{ color: '#520fb7' }}></div>
                          <p>Learn directly from experts in live classes</p>
                        </div>
                        <div className="flex items-start mb-5">
                          <div className="iconstyle style-svg-icon -rotate-90 mr-4 h-2.5 w-2.5" style={{ color: '#520fb7' }}></div>
                          <p>Access to exclusive webinars and Q&A sessions</p>
                        </div>
                        <div className="flex items-start mb-5">
                          <div className="iconstyle style-svg-icon -rotate-90 mr-4 h-2.5 w-2.5" style={{ color: '#520fb7' }}></div>
                          <p>Interact with industry leaders and gain insights</p>
                        </div>
                        <div className="flex items-start mb-5">
                          <div className="iconstyle style-svg-icon -rotate-90 mr-4 h-2.5 w-2.5" style={{ color: '#520fb7' }}></div>
                          <p>Participate in live discussions and case studies</p>
                        </div>
                      </>
                    )}
                    {activeTab === 'Tab3' && (
                      <>
                        <div className="flex items-start mb-5">
                          <div className="iconstyle style-svg-icon -rotate-90 mr-4 h-2.5 w-2.5" style={{ color: '#520fb7' }}></div>
                          <p>Structured career planning for your future</p>
                        </div>
                        <div className="flex items-start mb-5">
                          <div className="iconstyle style-svg-icon -rotate-90 mr-4 h-2.5 w-2.5" style={{ color: '#520fb7' }}></div>
                          <p>Guidance on career growth and development</p>
                        </div>
                        <div className="flex items-start mb-5">
                          <div className="iconstyle style-svg-icon -rotate-90 mr-4 h-2.5 w-2.5" style={{ color: '#520fb7' }}></div>
                          <p>Regular updates and career advice</p>
                        </div>
                        <div className="flex items-start mb-5">
                     <div className="iconstyle style-svg-icon -rotate-90 mr-4 h-2.5 w-2.5" style={{ color: '#520fb7' }}></div>
                          <p>Expert guidance to help you achieve your career goals</p>
                        </div>
                      </>
                    )}
                    {activeTab === 'Tab4' && (
                      <>
                        <div className="flex items-start mb-5">
                          <div className="iconstyle style-svg-icon -rotate-90 mr-4 h-2.5 w-2.5" style={{ color: '#520fb7' }}></div>
                          <p>Resume building and interview preparation</p>
                        </div>
                        <div className="flex items-start mb-5">
                          <div className="iconstyle style-svg-icon -rotate-90 mr-4 h-2.5 w-2.5" style={{ color: '#520fb7' }}></div>
                          <p>Job placement assistance in top companies</p>
                        </div>
                        <div className="flex items-start mb-5">
                          <div className="iconstyle style-svg-icon -rotate-90 mr-4 h-2.5 w-2.5" style={{ color: '#520fb7' }}></div>
                          <p>Connections with industry professionals</p>
                        </div>
                        <div className="flex items-start mb-5">
                          <div className="iconstyle style-svg-icon -rotate-90 mr-4 h-2.5 w-2.5" style={{ color: '#520fb7' }}></div>
                          <p>Opportunities to apply your skills in real-world projects</p>
                        </div>
                      </>
                    )}
                    </div>
                    <button className="btn btn-primary px-[22px] py-[12px] text-[14px] font-semibold sm:px-[22px] sm:py-[12px] sm:text-[14px] md:px-[22px] md:py-[15px] md:text-[16px]" id="fHoToN">
                      <div className="Buttonstyle relative h-full">
                        <div className="ButtonstyledContent h-full flex items-center justify-center">Explore Programs</div>
                      </div>
                    </button>
                  </div>
                  <div className="fresnel-container fresnel-greaterThanOrEqual-desktop flex-grow flex-3">
                    <img loading="lazy" src={tabImages[activeTab]} alt="illustration" className="h-full w-40 object-contain" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;