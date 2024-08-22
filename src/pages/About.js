import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Element, scroller } from 'react-scroll';
import Section1 from '../components/about/Section1'
import Section2 from '../components/about/Section2'
import Section3 from '../components/about/Section3'
import Section4 from '../components/about/Section4'
import ScrollToTop from '../components/ScrollToTop';

const About = () => {
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
        <ScrollToTop/>
      </>
    );
  };
  
  export default About;