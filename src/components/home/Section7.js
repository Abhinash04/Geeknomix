// Section7.js
import React from 'react';
import biplab from '../../assets/images/teacher/biplab.png';
import satya from '../../assets/images/teacher/satya.png';
import ayush from '../../assets/images/teacher/ayush.png';
import basanta from '../../assets/images/teacher/basanta.png';
import jaya from '../../assets/images/teacher/jaya.png';
import swaraj from '../../assets/images/teacher/swaraj.png';
import aryan from '../../assets/images/teacher/aryan.png';
import tusar from '../../assets/images/teacher/tusar.png';
import '../../styles.css';

const teachers = [
  { img: biplab, name: 'Biplab Parida', designation: 'Solutions Architect' },
  { img: satya, name: 'Satya', designation: 'Senior Test Engineer' },
  { img: ayush, name: 'Ayush Pradhan', designation: 'Senior DevOps Engineer' },
  { img: basanta, name: 'Basanta Moharana', designation: 'Lead UI/UX Designer' },
  { img: jaya, name: 'Jaya Narayan', designation: 'Senior Software Engineer, TCS' },
  { img: swaraj, name: 'Swaraj Sahu', designation: 'Founder & CEO, Accustra' },
  { img: aryan, name: 'Ranjan', designation: 'Lead Performance Testing, Salesforce' },
  { img: tusar, name: 'Tusarkant', designation: 'Senior Software Engineer' },
];

const Section7 = () => {
  return (
    <section className="teacher">
      <div className="flex flex-col gap-[0.85rem] w-full max-w-[600px] text-center mx-auto px-4">
        <h6 className='text-[#fd9610] uppercase'>Geeknomix Teachers</h6>
        <h2 className='capitalize leading-[1.2]'>
          Meet the teacher<br /><span className='text-[#3d088b] font-extrabold'>Who teaches</span> you Online
        </h2>
        <p className='px-8'>
          Take our courses and we’ll prepare you to be a talent that the industry is looking for!
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 mx-auto">
        {teachers.map((teacher, index) => (
          <div key={index} className="relative flex flex-col items-center">
            <div className="relative h-[275px] w-[275px] rounded-full p-[27px] mx-auto mb-5">
              <figure className="relative h-[220px] w-[220px] rounded-full overflow-hidden mb-0 z-10">
                <a href="#">
                  <img src={teacher.img} alt={teacher.name} className="w-full h-full object-cover" />
                </a>
              </figure>
              <div className="absolute inset-x-0 bottom-0 w-full h-1/2 border-b-0 border-8 border-blue-50 rounded-b-[200px] transition-all duration-700 ease-in-out hover:border-clip-polygon"></div>
              <div className="absolute inset-x-0 bottom-0 w-full h-1/2 border-b-0 border-8 border-blue-50 rounded-b-[200px] clip-path-polygon transition-all duration-700 ease-in-out hover:clip-path-polygon"></div>
            </div>
            <div className="text-center flex flex-col items-center gap-1">
              <h4 className="text-lg font-bold">
                <a href="#">{teacher.name}</a>
              </h4>
              <span className="text-base text-gray-700 font-medium">{teacher.designation}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section7;
