import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Element, scroller } from 'react-scroll';
import Section1 from '../components/privacypolicy/Section1'
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
        <ScrollToTop/>
      </>
    );
  };
  
  export default About;