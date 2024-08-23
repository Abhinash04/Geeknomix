import React from 'react';
import mentoredByBest from '../../assets/images/learningtoearning/mentored-by-best.png';
import learnInLiveClasses from '../../assets/images/learningtoearning/learn-in-live-classes.png';
import levelUpResume from '../../assets/images/learningtoearning/level-up-resume.png';
import secureAJob from '../../assets/images/learningtoearning/secure-a-job.png';

const Section3 = () => {
  return (
    <div className="LearningToEarningStylesWrapper">
      <div className="ContainerV2_1">
        <p className="TV4 TV22 text-[#ffba00] font-black leading-[2.5]">WHY GEEKNOMIX?</p>
        <h2 className="TV7 TV23">From learning to earning</h2>
        <p className="TV4 TV24">Take our courses and we’ll prepare you to be a talent that the industry is looking for!</p>
        <div className="LearningToEarningStylesContentWrapper">
          <div className="IllustrationCardStyledIllustrationCard">
            <h3 className="TV5 TV25">Mentored by the industry's top 1%</h3>
            <p className="TV4 TV26">Learn exclusive insights on things you didn't learn in school</p>
            <div className="fresnel-container fresnel-greaterThanOrEqual-desktop">
              <img loading="lazy" src={mentoredByBest} alt="Mentored by the industry's top 1%" className="IllustrationCardStyledIllustration" />
            </div>
            <div className="fresnel-container fresnel-lessThan-desktop"></div>
          </div>
          <div className="IllustrationCardStyledIllustrationCard">
            <h3 className="TV5 TV25">Learn in live classes</h3>
            <p className="TV4 TV26">Solve real-life problems, learn how to hack it with the experts!</p>
            <div className="fresnel-container fresnel-greaterThanOrEqual-desktop">
              <img loading="lazy" src={learnInLiveClasses} alt="Learn in live classes" className="IllustrationCardStyledIllustration" />
            </div>
            <div className="fresnel-container fresnel-lessThan-desktop"></div>
          </div>
          <div className="IllustrationCardStyledIllustrationCard">
            <h3 className="TV5 TV25">Level up your resume</h3>
            <p className="TV4 TV26">Shines out your resume in a sea of candidates. Ace the interview!</p>
            <div className="fresnel-container fresnel-greaterThanOrEqual-desktop">
              <img loading="lazy" src={levelUpResume} alt="Level up your resume" className="IllustrationCardStyledIllustration" />
            </div>
            <div className="fresnel-container fresnel-lessThan-desktop"></div>
          </div>
          <div className="IllustrationCardStyledIllustrationCard">
            <h3 className="TV5 TV25">Secure a job in a dream company</h3>
            <p className="TV4 TV26">We'll help you get shortlisted by top recruiters, effortlessly!</p>
            <div className="fresnel-container fresnel-greaterThanOrEqual-desktop">
              <img loading="lazy" src={secureAJob} alt="Secure a job in a dream company" className="IllustrationCardStyledIllustration" />
            </div>
            <div className="fresnel-container fresnel-lessThan-desktop"></div>
          </div>
        </div>
        <div className="LearningToEarningStylesActionsWrapper">
          <button type="button" className="button_V11 button_V2">
          {/* ButtonStyledLoaderWrapper relative h-full --> chDexi */}
            <div className="ButtonStyledLoaderWrapper relative h-full">
            {/* ButtonStyledContent h-full flex items-center justify-center --> ljxRdJ */}
              <div className="ButtonStyledContent h-full flex items-center justify-center">Learn More</div>
            </div>
          </button>
          <a href="/tracks" className="button_V11 button_V1">
            <div className="ButtonStyledLoaderWrapper relative h-full">
              <div className="ButtonStyledContent h-full flex items-center justify-center">Explore Programs</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Section3;
