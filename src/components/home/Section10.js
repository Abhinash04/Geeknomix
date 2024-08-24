import React from 'react';
import contactIcon from '../../assets/images/contact/shirt.png';
import contactIllustration from '../../assets/images/icon/home-contact-us-illustration.png';

const Section10 = () => {
  return (
    <div className="contactUsContainer">
      <div className="ContainerV2_1">
        <p className="TV4 TV29">CONTACT US</p>
        <h2 className="TV7 TV57 flex align-items-left justify-content-left gap-2">
          Ready to get that dream job?{' '}
          <img
            loading="lazy"
            src={contactIcon}
            alt="shirt emoji"
            className="Emoji h-[1em] mb-[5px]"
          />
        </h2>
        <div className="Box box1">
        {/* review */}
          <div className="fresnel-container fresnel-greaterThanOrEqual-desktop ResponsiveStyleMediaWrapperV9 hidden lg:block">
            <img
              loading="lazy"
              src={contactIllustration}
              alt="Get your dream job"
              className="stylesStyledImage h-[115%] w-full object-contain"
            />
          </div>
          <div className="StyledFormContainer">
            <div className="relative">
              <p className="TV58">
                Sit tight! Our experts will get back to you within 24 hrs
              </p>
              <form className="ContactUsFromV2">
                <div className="GridStyledRow w-full flex flex-wrap">
                  <div className="GridStyledColumnV3">
                    <div className="InputContainerInputWrapper relative p-[0_15px] border border-[#c5c4cd] rounded-[4px] bg-white w-full sm:p-[0_10px]">
                      <span className="InputContainerStyledLabel input-label" required="">
                        Name
                      </span>
                      <div className="InputContainerContentWrapper relative z-20 flex justify-between items-center w-full">
                        <input
                          name="name"
                          maxlength="50"
                          className="StyledInput"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="GridStyledColumnV3">
                    <div className="InputContainerInputWrapper relative p-[0_15px] border border-[#c5c4cd] rounded-[4px] bg-white w-full sm:p-[0_10px]">
                      <span className="InputContainerStyledLabel input-label" required="">
                        Mobile Number
                      </span>
                      <div className="InputContainerContentWrapper relative z-20 flex justify-between items-center w-full">
                        <div className="bdPpOi">
                          <input
                            type="tel"
                            maxlength="10"
                            name="mobile"
                            className="StyledInput"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="GridStyledColumnV3">
                    <div className="InputContainerInputWrapper relative p-[0_15px] border border-[#c5c4cd] rounded-[4px] bg-white w-full sm:p-[0_10px]">
                      <span className="InputContainerStyledLabel input-label" required="">
                        Email ID
                      </span>
                      <div className="InputContainerContentWrapper relative z-20 flex justify-between items-center w-full">
                        <input
                          name="email"
                          maxlength="253"
                          className="StyledInput"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="button_V11 button_V1 contact-us-form-btn"
                  type="submit"
                >
                  <div className="ButtonStyledLoaderWrapper relative h-full">
                    <div className="ButtonStyledContent h-full flex items-center justify-center">Submit</div>
                  </div>
                </button>
              </form>
              <div>
                <div>
                  <div
                    className="grecaptcha-badge"
                    data-style="bottomright"
                    style={{
                      width: '256px',
                      height: '60px',
                      display: 'block',
                      transition: 'right 0.3s',
                      position: 'fixed',
                      bottom: '14px',
                      right: '-186px',
                      boxShadow: 'gray 0px 0px 5px',
                      borderRadius: '2px',
                      overflow: 'hidden',
                    }}
                  >
                    <div className="grecaptcha-logo">
                      <iframe
                        title="reCAPTCHA"
                        width="256"
                        height="60"
                        role="presentation"
                        name="a-ohqmizfo33dd"
                        frameBorder="0"
                        scrolling="no"
                        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                        src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LcaiHEaAAAAAJqeqqxgQhLOSaGPBWcpE6otRGcK&amp;co=aHR0cHM6Ly93d3cuc2tpbGxvdmlsbGEuY29tOjQ0Mw..&amp;hl=en&amp;type=image&amp;v=Xv-KF0LlBu_a0FJ9I5YSlX5m&amp;theme=light&amp;size=invisible&amp;badge=bottomright&amp;cb=h7ilduxn94bu"
                      ></iframe>
                    </div>
                    <div className="grecaptcha-error"></div>
                    <textarea
                      id="g-recaptcha-response"
                      name="g-recaptcha-response"
                      className="g-recaptcha-response"
                      style={{
                        width: '250px',
                        height: '40px',
                        border: '1px solid rgb(193, 193, 193)',
                        margin: '10px 25px',
                        padding: '0px',
                        resize: 'none',
                        display: 'none',
                      }}
                    ></textarea>
                  </div>
                  <iframe style={{ display: 'none' }}></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section10;
