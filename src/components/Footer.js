import React,{useState} from 'react'
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaLinkedinIn } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";



function Footer() {

    const [showLinks, setShowLinks] = useState({
        onlinePlatform: false,
        browsecourses: false,
        insightcommunity: false
        });

    const toggleLinks = (id) => {
        setShowLinks(prevState => ({
        ...prevState,
        [id]: !prevState[id]
        }));
    };

  return (
    <footer className='text-white' style={{background:'#090530'}}>
        <div id='footer-content-parent'>
        <div id='footer-content'>
            <div>
                <img src="https://res.cloudinary.com/da2lvku5u/image/upload/f_auto,q_auto/v1/Project_X_certi/rmyvvxl3hbfysmwdreyp" alt='footer-logo' /> 
                <p className='mt-3' id='footer-content-item1-text'>Great lesson ideas and lesson plans for ESL teachers! Educators can customize lessons as best plans to knowledge.</p>
                <div id='footer-social-icons'>
                <a href="https://facebook.com/geeknomixacademy"><FaFacebookSquare className='h-9 w-9 text-white '/></a>
                <a href="https://twitter.com/geeknomixacademy"><FaTwitterSquare className='h-9 w-9 text-white'/></a>
                <a href="https://instagram.com/geeknomixacademy"><FaInstagramSquare className='h-9 w-9 text-white'/></a>
                <a href="https://linkedin.com/company/geeknomixacademy"><FaLinkedinIn className='h-9 w-9 text-white'/></a>
                </div>
            </div>
            <div>
                <div className='footer-content-heading cursor-pointer flex align-items-center justify-content-between' onClick={() => toggleLinks('onlinePlatform')}>Online Platform
                {showLinks.onlinePlatform ? <IoIosArrowUp className='lg:hidden' /> : <IoIosArrowDown className='lg:hidden'/>}
                </div>
                <div className={`footer-links ${showLinks.onlinePlatform ? 'show' : ''}`}>Proper Guidelines</div>
                <div className={`footer-links ${showLinks.onlinePlatform ? 'show' : ''}`}>Digital Library</div>
                <div className={`footer-links ${showLinks.onlinePlatform ? 'show' : ''}`}>Compare Us</div>
                <div className={`footer-links ${showLinks.onlinePlatform ? 'show' : ''}`}>Build Career</div>
                <div className={`footer-links ${showLinks.onlinePlatform ? 'show' : ''}`}>Become Instructor</div>
            </div>
            <div>
                <div className='footer-content-heading cursor-pointer flex align-items-center justify-content-between' onClick={() => toggleLinks('browsecourses')}>Browse Courses
                {showLinks.onlinePlatform ? <IoIosArrowUp className='lg:hidden'/> : <IoIosArrowDown className='lg:hidden'/>}
                </div>
                <div className={`footer-links ${showLinks.browsecourses ? 'show' : ''}`}>Java Fullstack</div>
                <div className={`footer-links ${showLinks.browsecourses ? 'show' : ''}`}>Mern Stack</div>
                <div className={`footer-links ${showLinks.browsecourses ? 'show' : ''}`}>Mean Stack</div>
                <div className={`footer-links ${showLinks.browsecourses ? 'show' : ''}`}>Python Fullstack</div>
                <div className={`footer-links ${showLinks.browsecourses ? 'show' : ''}`}>Data Structure & Algorithm</div>
                <div className={`footer-links ${showLinks.browsecourses ? 'show' : ''}`}>Data Science</div>
                <div className={`footer-links ${showLinks.browsecourses ? 'show' : ''}`}>Data Analyst</div>
                <div className={`footer-links ${showLinks.browsecourses ? 'show' : ''}`}>Devops Engineer</div>
            </div>
            <div>
                <div className='footer-content-heading cursor-pointer flex align-items-center justify-content-between' onClick={() => toggleLinks('insightcommunity')}>Insight Community
                {showLinks.onlinePlatform ? <IoIosArrowUp className='lg:hidden'/> : <IoIosArrowDown className='lg:hidden'/>}
                </div>
                <div className={`footer-links ${showLinks.insightcommunity ? 'show' : ''}`}>Global Partners</div>
                <div className={`footer-links ${showLinks.insightcommunity ? 'show' : ''}`}>Forum</div>
                <div className={`footer-links ${showLinks.insightcommunity ? 'show' : ''}`}>Help & Support</div>
                <div className={`footer-links ${showLinks.insightcommunity ? 'show' : ''}`}>Community</div>
                <div className={`footer-links ${showLinks.insightcommunity ? 'show' : ''}`}>Documentation</div>
             </div>
        </div>
        <div className='w-full border-1' style={{borderColor:'#3E3B5B'}}></div>
        <div className='text-center py-7'>© 2023 : Geeknomix Academy Inc.</div>
        </div>
    </footer>
  )
}

export default Footer
