import React from 'react';
import contactIcon from '../../assets/images/icon/download.svg';
import contactIllustration from '../../assets/images/icon/home-contact-us-illustration.png';

const Section10 = () => {
  return (
    <div className="Styles__BgWrapper-y9pkh8-0 bUnHFa">
      <div className="styles__ContactUsContainer-sc-1s1mvg8-0 cYziEW">
        <div className="ContainerV2 ContainerV2_1">
          <p className="Typography bfkOxr Typography bDuBSQ">
            CONTACT US
          </p>
          <h2 className="Typography kQPqoH Typography hRoESd">
            Ready to get that dream job?{' '}
            <img
              loading="lazy"
              src={contactIcon}
              alt="shirt emoji"
              className="Emoji cUEhtz"
              mb="5px"
            />
          </h2>
          <div className="Box bPKObZ">
            <div className="fresnel-container fresnel-greaterThanOrEqual-desktop lWXxh">
              <img
                loading="lazy"
                src={contactIllustration}
                alt="Get your dream job"
                className="styles__StyledImage-sc-1s1mvg8-1 hPcRfc"
              />
            </div>
            <div className="styles__StyledFormContainer-sc-1s1mvg8-2 fkFuOr">
              <div className="ContactUsFromV2__ContactUsWrapper-sc-1otoqyq-0 dJeAiU">
                <p className="Typography__StyledText-txjhuo-0 bfkOxr Typography__StyledTypography-txjhuo-1 uAtEA">
                  Sit tight! Our experts will get back to you within 24 hrs
                </p>
                <form className="ContactUsFromV2__Form-sc-1otoqyq-1 jUVqis">
                  <div className="Grid__StyledRow-sc-9pjveq-0 fzKGFV">
                    <div className="Grid__StyledColumn-sc-9pjveq-1 llFfPR">
                      <div className="InputContainer__InputWrapper-p328aa-0 cIXWJM">
                        <span className="InputContainer__StyledLabel-p328aa-1 cJQfgc input-label" required>
                          Name
                        </span>
                        <div className="InputContainer__ContentWrapper-p328aa-2 kIlYpd">
                          <input
                            name="name"
                            maxLength="50"
                            className="Input__StyledInput-sc-1wojd01-0 dGEMma"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="Grid__StyledColumn-sc-9pjveq-1 llFfPR">
                      <div className="InputContainer__InputWrapper-p328aa-0 cIXWJM">
                        <span className="InputContainer__StyledLabel-p328aa-1 cJQfgc input-label" required>
                          Mobile Number
                        </span>
                        <div className="InputContainer__ContentWrapper-p328aa-2 kIlYpd">
                          <div className="MobileNumberInput__MobileInputWrapper-sc-1aqxf3p-0 bdPpOi">
                            <input
                              type="tel"
                              maxLength="10"
                              name="mobile"
                              className="Input__StyledInput-sc-1wojd01-0 dGEMma"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="Grid__StyledColumn-sc-9pjveq-1 llFfPR">
                      <div className="InputContainer__InputWrapper-p328aa-0 cIXWJM">
                        <span className="InputContainer__StyledLabel-p328aa-1 cJQfgc input-label" required>
                          Email ID
                        </span>
                        <div className="InputContainer__ContentWrapper-p328aa-2 kIlYpd">
                          <input
                            name="email"
                            maxLength="253"
                            className="Input__StyledInput-sc-1wojd01-0 dGEMma"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    className="Button__StyledButtonLayout-sc-17vqiw1-0 Button__StyledButton-sc-17vqiw1-1 luFLY bLlegd contact-us-form-btn"
                    type="submit"
                  >
                    <div className="Button__StyledLoaderWrapper-sc-17vqiw1-4 chDexi">
                      <div className="Button__StyledContent-sc-17vqiw1-3 ljxRdJ">Submit</div>
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
                        transition: 'right 0.3s ease 0s',
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
                          name="a-8ys7j9vbgxze"
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
    </div>
  );
};

export default Section10;
