import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import emoji from "../../assets/images/contact/emoji.png";
import img1 from "../../assets/images/icon/requestCallbackBannerIcon.svg"

const faqs = [
  {
    question: "What is the difference between Tracks and Courses?",
    answer: "Tracks are career-focused programmes that include multiple courses to enhance a graduate’s expertise in a particular domain. Job placement assistance including resume building, interview preparation, and connecting with top companies is exclusively provided in a track without additional cost. However, a course does not provide employment assistance and is designed for people who are looking to upskill themselves in particular areas of expertise or technologies."
  },
  {
    question: "Can you elaborate on the employment assistance that I will receive?",
    answer: "Once the courses in a track are completed, exclusive employment assistance is provided, which includes: i) Resume Building: A personal career coach is assigned to help you craft an effective resume. ii) Mock Interviews: Multiple mock interviews with industry experts will prepare you to be interview-ready. iii) Connecting with top companies: Help in securing interview invites at 300+ top partner companies to land your dream job."
  },
  {
    question: "What is the mode of teaching?",
    answer: "We follow a multi-format mode of teaching. All concepts will be taught through videos, live classes from industry experts, reading materials, quizzes, projects, and more." 
  },
  {
    question: "Will there be live classes?",
    answer: "Yes, live classes are one of the key components of our curriculum. It will be conducted by industry experts who work at leading companies. In these live classes the concepts are taught as to how it can be applied to real-life situations, thus giving a holistic understanding of the work that you are expected to perform on the job." 
  },
  {
    question: "Will I receive a certificate for completion of the course/track?",
    answer: "Yes. Once you have completed all the courses and all the projects in a track, a specialization certificate that is recognized across the industry will be awarded to you. Individual certificates will also be granted for every course included in the track." 
  },
  {
    question: "Will I get lifetime access to the content?",
    answer: "Yes. You will get lifetime access to the content of the courses. Concepts, works, documents and videos can be accessed at any time for reference, ensuring a lifetime of learning." 
  },
  {
  question: "Do you guarantee a job at the end of the track?",
  answer: "We make you able enough to secure the job of your dreams. We provide exclusive placement assistance, prepare you to be interview-ready, help you nail the industry expectations and get interview invites for you in top companies. We are your companions in your journey from learning to earning and will never leave your side throughout this journey. But beyond our support, only you can land the job of your dreams."
  },
  {
    question: "Why should I choose Geeknomix's Data Analytics career track over other online analytics courses / online data analytics certification program?",
    answer: "Our Data Science career track focuses on enhancing a graduate's expertise in the field of data science and helping him/her land their dream job. Whereas, most online data science degree courses focus only on the theoretical part with little to no job placement assistance. Moreover, Geeknomix's career track fee is less than one-fourth of any online data science degree. Our Data Science career track is the only data science full course that you will need to land your dream job."
  },
  {
    question: "Why should I choose Geeknomix's Data Science career track over other online data science certification?",
    answer: "Our Data Science career track comes with an industry-aligned curriculum designed by the top 1% of the industry experts, weekly live classes, quick doubt resolution, placement support to help you land your dream job, and a 2-year alumni membership. You get all of this is at a one-fourth price of any other online data science certification course."
  },
];

const Section11 = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="faq py-12">
      <div className="section-header text-center mb-8">
        <h2 className="Typography V4 font-bold text-[rgb(255,186,0)] flex align-items-center justify-content-center">FREQUENTLY ASKED QUESTIONS?
        <img loading="lazy" src={emoji} alt="point emoji" className="h-[1em] lg:block hidden" />
        </h2>
        <p className="Typography V4 text-gray-600">
          Take our courses and we’ll prepare you to be a talent that the industry is looking for!
        </p>
      </div>
      <div className="container mx-auto px-4">
        {faqs.map((faq, index) => (
          <div className="item mb-4 border border-gray-300 rounded-lg shadow-sm" key={index}>
            <div
              className="itemHeading p-4 cursor-pointer flex justify-between items-center bg-gray-50 hover:bg-gray-100"
              onClick={() => toggleFaq(index)}
            >
              <h4 className="text-lg font-medium m-0">{faq.question}</h4>
              <FontAwesomeIcon icon={faChevronDown} className={`${openFaq === index ? 'rotate-180' : ''} transition-transform`} />
            </div>
            <div className={`itemBody ${openFaq === index ? 'block' : 'hidden'} px-4 py-2 bg-gray-50`}>
              <p className="m-0 text-gray-700">{faq.answer}</p>
            </div>
          </div>
        ))}

        <div className="ContainerV2_1 p-0">
          <div className="box1 rounded-xl bg-[#6CE9A6]/20 flex flex-wrap items-center justify-between p-[22px] px-[34px] md:flex-wrap md:p-[18px]">
            <div className="flex flex-wrap items-center">
              <img loading="lazy" src={img1} alt="Geeknomix-requestCallback-banner-icon" className="w-[74px] h-[70px] mr-[14px]" />
              <div>
                <h3 className="TV5 TV60 TV62">Still have questions?</h3>
                <h5 className="TV2 TV61 TV63">Request a callback to get in touch with our academic counsellors.</h5>
              </div>
            </div>
            <button type="button" className="button_V11 button_V9 w-[100%] mt-[10px]">
              <div className="relative h-full">
                <div className="h-full text-wrap">Request a Callback</div>
              </div>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Section11;