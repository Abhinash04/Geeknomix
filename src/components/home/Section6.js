import React from 'react'
import experts from "../../assets/images/teacher/experts.png";

const Section6 = () => {
  return (
    <div className="ContainerV2_1 pt-[100px]">
      <p className="TV4 TV29">MENTORS</p>
      <h2 className="TV7 TV43">
        Connecting you to the top 1% experts
      </h2>
      <p className="TV6 TV44">
        Learn only from the best with Geeknomix
      </p>
      <div className="box1">
        <div className="MentorsContentWrapper">
          <div className="MentorsInfoContainer">
            <div className="MentorsInfoTags">
              <img loading="lazy" src="assets/icon/mentors-experience.png" alt="home" className="MentorsInfo__InfoImage-fhkr4c-2 eSTWuc" />
              <div className="MentorsInfo__InfoText-fhkr4c-3 glPnUs">
                <h4 className="Typography__StyledText-txjhuo-0 hMTHao TV43">15+</h4>
                <p className="Typography__StyledText-txjhuo-0 dOYA-dd Typography__StyledTypography-txjhuo-1 cJqEjb">Mentors</p>
              </div>
            </div>
            <div className="MentorsInfoTags">
              <img loading="lazy" src="assets/icon/mentors-industries.png" alt="home" className="MentorsInfo__InfoImage-fhkr4c-2 eSTWuc" />
              <div className="MentorsInfo__InfoText-fhkr4c-3 glPnUs">
                <h4 className="Typography__StyledText-txjhuo-0 hMTHao TV43">20+</h4>
                <p className="Typography__StyledText-txjhuo-0 dOYA-dd Typography__StyledTypography-txjhuo-1 cJqEjb">Industries</p>
              </div>
            </div>
          </div>
          <p className="TV6 Typography__StyledTypography-txjhuo-1 eIFPZQ">
            Specifically designed curriculum by industry experts
          </p>
          <a href="/tracks" className="Button__StyledButtonLayout-sc-17vqiw1-0 Button__StyledButton-sc-17vqiw1-1 luFLY bLlegd">
            <div className="Button__StyledLoaderWrapper-sc-17vqiw1-4 chDexi">
              <div className="Button__StyledContent-sc-17vqiw1-3 ljxRdJ">Try Masterclass</div>
            </div>
          </a>
        </div>
        <div className="fresnel-container fresnel-greaterThanOrEqual-desktop Responsive__StyledMediaWrapper-v7nvuu-0 iuuEf">
          <div className="Box-sc-1yamx5u-0 MentorsAnimation__AnimationContainer-sc-1x0o9g1-0 bPKObZ">
            <div title="" role="button" aria-label="animation" tabIndex="0" style={{ width: '615px', height: '375px', overflow: 'hidden', margin: '0px auto', outline: 'none' }}>
              <img src={experts} alt="Experts" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section6;
