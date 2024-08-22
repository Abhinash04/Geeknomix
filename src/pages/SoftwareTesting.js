import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Element, scroller } from 'react-scroll';

import Section1 from '../components/softwaretesting/Section1';
import Section2 from '../components/softwaretesting/Section2';
import Section3 from '../components/softwaretesting/Section3';
import Section4 from '../components/softwaretesting/Section4';
import Section5 from '../components/softwaretesting/Section5';
import Section6 from '../components/softwaretesting/Section6';
import Section7 from '../components/softwaretesting/Section7';
import Section8 from '../components/softwaretesting/Section8';
import Section9 from '../components/softwaretesting/Section9';
import Section10 from '../components/softwaretesting/Section10';
import ScrollToTop from '../components/ScrollToTop';

const SoftwareTesting = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.section) {
      scroller.scrollTo(location.state.section, {
        duration: 0,
        delay: 0,
        smooth: 'easeInOutQuart',
      });
    }
  }, [location.state]);

  return (
    <>
      <Element name="section1">
        <Section1 />
      </Element>
      <Element name="section2">
        <Section2/>
      </Element>
      <Element name="Section3">
        <Section3/>
      </Element>
      <Element name="section4">
        <Section4 />
      </Element>
      <Element name="section5">
        <Section5 />
      </Element>
      <Element name="section6">
        <Section6 />
      </Element>
      <Element name="section7">
        <Section7 />
      </Element>
      <Element name="section8">
        <Section8 />
      </Element>
      <Element name="section9">
        <Section9 />
      </Element>
      <Element name="section10">
        <Section10 />
      </Element>
      <ScrollToTop/>
    </>
  );
};

export default SoftwareTesting;
