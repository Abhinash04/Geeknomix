import React from 'react';
import mentoredByBest from '../../assets/images/learningtoearning/mentored-by-best.png';
import learnInLiveClasses from '../../assets/images/learningtoearning/learn-in-live-classes.png';
import levelUpResume from '../../assets/images/learningtoearning/level-up-resume.png';
import secureAJob from '../../assets/images/learningtoearning/secure-a-job.png';

const Section3 = () => {
  return (
    <section className="learingToEarning mt-24 max-w-screen-xl mx-auto px-4 pb-32">
      <div className="learingToEarning-header text-center max-w-2xl mx-auto mb-16">
        <h6 className="text-[#fd9610]">WHY GEEKNOMIX</h6>
        <h2 className="text-3xl font-bold mb-4">From learning to earning</h2>
        <p className="px-8">Take our courses and we’ll prepare you to be a talent that the industry is looking for!</p>
      </div>
      <div className="learingToEarning-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="learingToEarning-container-item border border-gray-200 p-4 rounded-lg flex flex-col items-center h-[400px]">
          <h5 className="text-xl font-semibold mb-2">Mentored by the industry's top 1%</h5>
          <p className="text-center mb-4">Learn exclusive insights on things you didn't learn in school</p>
          <img src={mentoredByBest} alt="Mentored by the best" className="w-[140px]" />
        </div>
        <div className="learingToEarning-container-item border border-gray-200 p-4 rounded-lg flex flex-col items-center h-[400px]">
          <h5 className="text-xl font-semibold mb-2">Learn in live classes</h5>
          <p className="text-center mb-4">Solve real-life problems, learn how to hack it with the experts!</p>
          <img src={learnInLiveClasses} alt="Learn in live classes" className="w-[140px]" />
        </div>
        <div className="learingToEarning-container-item border border-gray-200 p-4 rounded-lg flex flex-col items-center h-[400px]">
          <h5 className="text-xl font-semibold mb-2">Level up your resume</h5>
          <p className="text-center mb-4">Shines out your resume in a sea of candidates. Ace the interview!</p>
          <img src={levelUpResume} alt="Level up your resume" className="w-[140px]" />
        </div>
        <div className="learingToEarning-container-item border border-gray-200 p-4 rounded-lg flex flex-col items-center h-[400px]">
          <h5 className="text-xl font-semibold mb-2">Secure a job in a dream company</h5>
          <p className="text-center mb-4">We'll help you get shortlisted by top recruiters, effortlessly!</p>
          <img src={secureAJob} alt="Secure a job" className="w-[140px]" />
        </div>
      </div>
    </section>
  );
};

export default Section3;
