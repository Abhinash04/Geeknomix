import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate, faChalkboardTeacher, faUsers, faStar } from '@fortawesome/free-solid-svg-icons';

const Section2 = () => {
  return (
    <section className="courseStats py-12 mt-5">
      <div className="container mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="item flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg">
            <div className="ico mb-4 text-4xl text-blue-500">
              <FontAwesomeIcon icon={faUserGraduate} className="mt-4"/>
            </div>
            <h1 className="text-3xl font-bold">650+</h1>
            <span className="text-lg font-medium mb-4">STUDENT ENROLLED</span>
          </div>
          <div className="item flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg">
            <div className="ico mb-4 text-4xl text-blue-500">
              <FontAwesomeIcon icon={faChalkboardTeacher} className="mt-4"/>
            </div>
            <h1 className="text-3xl font-bold">250</h1>
            <span className="text-lg font-medium mb-4">CLASSES COMPLETED</span>
          </div>
          <div className="item flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg">
            <div className="ico mb-4 text-4xl text-blue-500">
              <FontAwesomeIcon icon={faUsers} className="mt-4"/>
            </div>
            <h1 className="text-3xl font-bold">7+</h1>
            <span className="text-lg font-medium mb-4">TOP INSTRUCTORS</span>
          </div>
          <div className="item flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg">
            <div className="ico mb-4 text-4xl text-blue-500">
              <FontAwesomeIcon icon={faStar} className="mt-4"/>
            </div>
            <h1 className="text-3xl font-bold">99%</h1>
            <span className="text-lg font-medium mb-4">SATISFACTION RATE</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;