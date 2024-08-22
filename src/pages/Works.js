import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Element, scroller } from 'react-scroll';
import Section1 from '../components/works/Section1'
import Section2 from '../components/works/Section2'
import Section3 from '../components/works/Section3'
import Section4 from '../components/works/Section4'
import ScrollToTop from '../components/ScrollToTop';

const Works = () => {
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
  
  export default Works;