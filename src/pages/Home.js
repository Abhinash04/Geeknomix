import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Element, scroller } from 'react-scroll';
import Section1 from '../components/home/Section1';
import Section2 from '../components/home/Section2';
import Section3 from '../components/home/Section3';
import Section4 from '../components/home/Section4';
import Section5 from '../components/home/Section5';
import Section6 from '../components/home/Section6';
import Section7 from '../components/home/Section7';
import Section8 from '../components/home/Section8';
import Section9 from '../components/home/Section9';
import Section10 from '../components/home/Section10';
import Section11 from '../components/home/Section11';
import ScrollToTop from '../components/ScrollToTop';
import Empty from '../components/Empty';
import Section6Banner from '../components/home/Section6Banner';

const Home = () => {
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
        <Empty/>
        <Section2/>
      </Element>
      <Element name="Section3">
        {/* <Empty/> */}
        <Section3/>
      </Element>
      <Element name="section4">
        <Empty/>
        <Section4 />
      </Element>
      <Element name="section5">
        <Empty/>
        <Section5 />
      </Element>
      <Element name="section6">
        <Empty/>
        <Section6 />
      </Element>
      <Element name="section7">
        <Empty/>
      <Section6Banner />
      <Empty/>
        <Section7 />
      </Element>
      <Element name="section8">
        <Empty/>
        <Section8 />
      </Element>
      <Element name="section9">
        <Empty/>
        <Section9 />
      </Element>
      <Element name="section10">
        <Empty/>
        <Section10 />
      </Element>
      <Element name="section11">
        <Empty/>
        <Section11 />
      </Element>
      <ScrollToTop/>
    </>
  );
};

export default Home;
