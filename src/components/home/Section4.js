import React from "react";
import backgroundImg from "../../assets/images/careertrack/homepage-tracks-bg.png";
import shirtEmoji from "../../assets/images/careertrack/career.png";
import liveClassesIcon from "../../assets/images/icon/live-classes.svg";
import projectsIcon from "../../assets/images/icon/projects.svg";
import durationIcon from "../../assets/images/icon/duration.svg";
import trackIcon from "../../assets/images/icon/geek-icon-2.png";
import limitedSeatsIcon from "../../assets/images/icon/limited.svg";
import offerIcon from "../../assets/images/icon/offer.svg";
import learnerImage1 from "../../assets/images/icon/2023-08-09_19-31-58_g2kk8VBqx4cnSiPoY7fhhJ.png";
import learnerImage2 from "../../assets/images/icon/2023-08-09_19-31-58_8GB5DDofWMT6TerLaQ7m13.png";
import learnerImage3 from "../../assets/images/icon/2023-08-09_19-31-58_aXgfm9dta89ZVWPcjfsbXF.png";
import expertImage1 from "../../assets/images/icon/2023-08-10_19-19-02_6XbPrmLFxkGKAqryWMV2Co.png";
// import expertImage2 from "../../assets/images/icon/2023-08-10_19-19-02_1JaCKuzJxzsvUTQdEEmWiQ.png";
import expertImage3 from "../../assets/images/icon/2023-08-10_19-19-02_cDabvbpufohik1ohyaT6ne.svg";

const Section4 = () => {
  return (
    <div className="TracksWrapperrelative pt-[45px]">
      <div className="TracksStyledBackgroundWrapper">
        <img
          loading="lazy"
          src={backgroundImg}
          alt="Career Tracks SkilloVilla"
        />
      </div>
      <div className="ContainerV2_3">
        <p className="TV4 TV29">
          CAREER TRACKS
        </p>
        <h2 className="TV7 TV30 flex align-items-left justify-content-left gap-2">
          Build your career
          <img
            loading="lazy"
            src={shirtEmoji}
            alt="shirt emoji"
            className="h-[1em]"
            mb="5px"
          />
        </h2>

        <div className="StyledTrackContainer flex gap-7 w-full flex-wrap h-fit">
          <div className="GridStyledRow w-full flex flex-wrap">
            {/* First Card */}
            <div className="GridStyledColumnV1">
              <div className="styleCardWrapper h-full">
                <div className="Pill CardsStyledPill">
                  <div className="flex items-center">
                    <div className="ImageListStyledLearnerImageWrapper w-[calc(100%+4px)] h-[calc(100%+4px)] -ml-[2px]">
                      <img
                        loading="lazy"
                        src="https://images.skillovilla.com/tracks/description-page/2023-08-09_19-31-58_g2kk8VBqx4cnSiPoY7fhhJ.png?auto=format&amp;q=35&amp;cs=srgb"
                        alt="skillovilla-learner-image"
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div className="ImageListStyledLearnerImageWrapper w-[calc(100%+4px)] h-[calc(100%+4px)] -ml-[2px]">
                      <img
                        loading="lazy"
                        src="https://images.skillovilla.com/tracks/description-page/2023-08-09_19-31-58_8GB5DDofWMT6TerLaQ7m13.png?auto=format&amp;q=35&amp;cs=srgb"
                        alt="skillovilla-learner-image"
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div className="ImageListStyledLearnerImageWrapper w-[calc(100%+4px)] h-[calc(100%+4px)] -ml-[2px]">
                      <img
                        loading="lazy"
                        src="https://images.skillovilla.com/tracks/description-page/2023-08-09_19-31-58_aXgfm9dta89ZVWPcjfsbXF.png?auto=format&amp;q=35&amp;cs=srgb"
                        alt="skillovilla-learner-image"
                        className="h-full w-full object-contain"
                      />
                    </div>
                  </div>
                  <p className="TV1 TV10">
                    5k+ enrollments
                  </p>
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex w-full mb-4 px-7.5">
                    <img
                      loading="lazy"
                      src="https://images.skillovilla.com/tracks/description-page/2023-08-09_19-26-41_vLYdn42UgpNK8Qirx6tMF8.jpg?auto=format&amp;q=35&amp;cs=srgb"
                      alt="skillovilla-track-icon"
                      className="styleTrackIcon"
                    />
                    <div className="box5">
                      <div className="flex justify-end text-white mb-5">
                        <div className="flex items-center whitespace-nowrap bg-gradient-to-r from-orange-500 to-yellow-400 px-3 py-1 rounded-md">
                          <div className="fresnel-container fresnel-greaterThanOrEqual-tabletXS">
                            <div className="h-4 w-4 mr-1.5 md:hidden">
                              <img
                                loading="lazy"
                                src="https://static-artifacts-assets.skillovilla.com/assets/icons/limited.svg?auto=format&amp;q=35&amp;cs=srgb"
                                alt="skillovilla-track-limited-icon"
                                className="h-[17px] w-[17px]"
                              />
                            </div>
                          </div>
                          <p className="TV1 TV31">
                            Limited Seats
                          </p>
                        </div>
                        <div className="styleOfferTag">
                          <div className="h-4 w-4 mr-1.5 md:hidden">
                            <img
                              loading="lazy"
                              src="https://static-artifacts-assets.skillovilla.com/assets/icons/offer.svg?auto=format&amp;q=35&amp;cs=srgb"
                              alt="skillovilla-track-offer-icon"
                              className="h-[17px] w-[17px]"
                            />
                          </div>
                          <p className="TV1 TV32">
                            20% Off
                          </p>
                        </div>
                      </div>
                      <div className="expertsInfoWrapper">
                        <p className="TV6 TV33">
                          Designed by experts from
                        </p>
                        <div className="flex items-center">
                          <div className="ImageListStyledLearnerImageWrapper ExpertsOverlappingImage">
                            <img
                              loading="lazy"
                              src="https://images.skillovilla.com/tracks/description-page/2023-08-09_19-26-41_ek3kbsNiGRY5rQJ9KUwzdm.svg?auto=format&amp;q=35&amp;cs=srgb"
                              alt="skillovilla-learner-image"
                              className="h-full w-full object-contain"
                            />
                          </div>
                          <div className="ImageListStyledLearnerImageWrapper ExpertsOverlappingImage">
                            <img
                              loading="lazy"
                              src="https://images.skillovilla.com/tracks/description-page/2023-08-09_19-26-41_nshXRSZZN7iNzxd7Dq83R8.png?auto=format&amp;q=35&amp;cs=srgb"
                              alt="skillovilla-learner-image"
                              className="h-full w-full object-contain"
                            />
                          </div>
                          <div className="ImageListStyledLearnerImageWrapper ExpertsOverlappingImage">
                            <img
                              loading="lazy"
                              src="https://images.skillovilla.com/tracks/description-page/2023-08-09_19-26-41_qy5hYZHYSco3S2vX2mKtUB.png?auto=format&amp;q=35&amp;cs=srgb"
                              alt="skillovilla-learner-image"
                              className="h-full w-full object-contain"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="TV6">
                  Web Development Bootcamp
                </p>
                <button className="btn btn-primary">
                  Join Now
                </button>
              </div>
            </div>
            {/* Repeat similar blocks for other cards */}
            {/* Second Card */}
            <div className="GridStyledColumnV1">
              <div className="styleCardWrapper h-full">
                <div className="Pill CardsStyledPill">
                  <div className="flex items-center">
                    <div className="ImageListStyledLearnerImageWrapper w-[calc(100%+4px)] h-[calc(100%+4px)] -ml-[2px]">
                      <img
                        loading="lazy"
                        src="https://images.skillovilla.com/tracks/description-page/2023-08-09_19-31-58_g2kk8VBqx4cnSiPoY7fhhJ.png?auto=format&amp;q=35&amp;cs=srgb"
                        alt="skillovilla-learner-image"
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div className="ImageListStyledLearnerImageWrapper w-[calc(100%+4px)] h-[calc(100%+4px)] -ml-[2px]">
                      <img
                        loading="lazy"
                        src="https://images.skillovilla.com/tracks/description-page/2023-08-09_19-31-58_8GB5DDofWMT6TerLaQ7m13.png?auto=format&amp;q=35&amp;cs=srgb"
                        alt="skillovilla-learner-image"
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div className="ImageListStyledLearnerImageWrapper w-[calc(100%+4px)] h-[calc(100%+4px)] -ml-[2px]">
                      <img
                        loading="lazy"
                        src="https://images.skillovilla.com/tracks/description-page/2023-08-09_19-31-58_aXgfm9dta89ZVWPcjfsbXF.png?auto=format&amp;q=35&amp;cs=srgb"
                        alt="skillovilla-learner-image"
                        className="h-full w-full object-contain"
                      />
                    </div>
                  </div>
                  <p className="TV1 TV10">
                    4k+ enrollments
                  </p>
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex w-full mb-4 px-7.5">
                    <img
                      loading="lazy"
                      src="https://images.skillovilla.com/tracks/description-page/2023-08-09_19-26-41_vLYdn42UgpNK8Qirx6tMF8.jpg?auto=format&amp;q=35&amp;cs=srgb"
                      alt="skillovilla-track-icon"
                      className="styleTrackIcon"
                    />
                    <div className="box5">
                      <div className="flex justify-end text-white mb-5">
                        <div className="flex items-center whitespace-nowrap bg-gradient-to-r from-orange-500 to-yellow-400 px-3 py-1 rounded-md">
                          <div className="fresnel-container fresnel-greaterThanOrEqual-tabletXS">
                            <div className="h-4 w-4 mr-1.5 md:hidden">
                              <img
                                loading="lazy"
                                src="https://static-artifacts-assets.skillovilla.com/assets/icons/limited.svg?auto=format&amp;q=35&amp;cs=srgb"
                                alt="skillovilla-track-limited-icon"
                                className="h-[17px] w-[17px]"
                              />
                            </div>
                          </div>
                          <p className="TV1 TV31">
                            Limited Seats
                          </p>
                        </div>
                        <div className="styleOfferTag">
                          <div className="h-4 w-4 mr-1.5 md:hidden">
                            <img
                              loading="lazy"
                              src="https://static-artifacts-assets.skillovilla.com/assets/icons/offer.svg?auto=format&amp;q=35&amp;cs=srgb"
                              alt="skillovilla-track-offer-icon"
                              className="h-[17px] w-[17px]"
                            />
                          </div>
                          <p className="TV1 TV32">
                            30% Off
                          </p>
                        </div>
                      </div>
                      <div className="expertsInfoWrapper">
                        <p className="TV6 TV33">
                          Designed by experts from
                        </p>
                        <div className="flex items-center">
                          <div className="ImageListStyledLearnerImageWrapper ExpertsOverlappingImage">
                            <img
                              loading="lazy"
                              src="https://images.skillovilla.com/tracks/description-page/2023-08-09_19-26-41_ek3kbsNiGRY5rQJ9KUwzdm.svg?auto=format&amp;q=35&amp;cs=srgb"
                              alt="skillovilla-learner-image"
                              className="h-full w-full object-contain"
                            />
                          </div>
                          <div className="ImageListStyledLearnerImageWrapper ExpertsOverlappingImage">
                            <img
                              loading="lazy"
                              src="https://images.skillovilla.com/tracks/description-page/2023-08-09_19-26-41_nshXRSZZN7iNzxd7Dq83R8.png?auto=format&amp;q=35&amp;cs=srgb"
                              alt="skillovilla-learner-image"
                              className="h-full w-full object-contain"
                            />
                          </div>
                          <div className="ImageListStyledLearnerImageWrapper ExpertsOverlappingImage">
                            <img
                              loading="lazy"
                              src="https://images.skillovilla.com/tracks/description-page/2023-08-09_19-26-41_qy5hYZHYSco3S2vX2mKtUB.png?auto=format&amp;q=35&amp;cs=srgb"
                              alt="skillovilla-learner-image"
                              className="h-full w-full object-contain"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="TV6">
                  Data Science Bootcamp
                </p>
                <button className="btn btn-primary">
                  Join Now
                </button>
              </div>
            </div>
            {/* Third Card */}
            <div className="GridStyledColumnV1">
              <div className="styleCardWrapper h-full">
                <div className="Pill CardsStyledPill">
                  <div className="flex items-center">
                    <div className="ImageListStyledLearnerImageWrapper w-[calc(100%+4px)] h-[calc(100%+4px)] -ml-[2px]">
                      <img
                        loading="lazy"
                        src="https://images.skillovilla.com/tracks/description-page/2023-08-09_19-31-58_g2kk8VBqx4cnSiPoY7fhhJ.png?auto=format&amp;q=35&amp;cs=srgb"
                        alt="skillovilla-learner-image"
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div className="ImageListStyledLearnerImageWrapper w-[calc(100%+4px)] h-[calc(100%+4px)] -ml-[2px]">
                      <img
                        loading="lazy"
                        src="https://images.skillovilla.com/tracks/description-page/2023-08-09_19-31-58_8GB5DDofWMT6TerLaQ7m13.png?auto=format&amp;q=35&amp;cs=srgb"
                        alt="skillovilla-learner-image"
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div className="ImageListStyledLearnerImageWrapper w-[calc(100%+4px)] h-[calc(100%+4px)] -ml-[2px]">
                      <img
                        loading="lazy"
                        src="https://images.skillovilla.com/tracks/description-page/2023-08-09_19-31-58_aXgfm9dta89ZVWPcjfsbXF.png?auto=format&amp;q=35&amp;cs=srgb"
                        alt="skillovilla-learner-image"
                        className="h-full w-full object-contain"
                      />
                    </div>
                  </div>
                  <p className="TV1 TV10">
                    3k+ enrollments
                  </p>
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex w-full mb-4 px-7.5">
                    <img
                      loading="lazy"
                      src="https://images.skillovilla.com/tracks/description-page/2023-08-09_19-26-41_vLYdn42UgpNK8Qirx6tMF8.jpg?auto=format&amp;q=35&amp;cs=srgb"
                      alt="skillovilla-track-icon"
                      className="styleTrackIcon"
                    />
                    <div className="box5">
                      <div className="flex justify-end text-white mb-5">
                        <div className="flex items-center whitespace-nowrap bg-gradient-to-r from-orange-500 to-yellow-400 px-3 py-1 rounded-md">
                          <div className="fresnel-container fresnel-greaterThanOrEqual-tabletXS">
                            <div className="h-4 w-4 mr-1.5 md:hidden">
                              <img
                                loading="lazy"
                                src="https://static-artifacts-assets.skillovilla.com/assets/icons/limited.svg?auto=format&amp;q=35&amp;cs=srgb"
                                alt="skillovilla-track-limited-icon"
                                className="h-[17px] w-[17px]"
                              />
                            </div>
                          </div>
                          <p className="TV1 TV31">
                            Limited Seats
                          </p>
                        </div>
                        <div className="styleOfferTag">
                          <div className="h-4 w-4 mr-1.5 md:hidden">
                            <img
                              loading="lazy"
                              src="https://static-artifacts-assets.skillovilla.com/assets/icons/offer.svg?auto=format&amp;q=35&amp;cs=srgb"
                              alt="skillovilla-track-offer-icon"
                              className="h-[17px] w-[17px]"
                            />
                          </div>
                          <p className="TV1 TV32">
                            15% Off
                          </p>
                        </div>
                      </div>
                      <div className="expertsInfoWrapper">
                        <p className="TV6 TV33">
                          Designed by experts from
                        </p>
                        <div className="flex items-center">
                          <div className="ImageListStyledLearnerImageWrapper ExpertsOverlappingImage">
                            <img
                              loading="lazy"
                              src="https://images.skillovilla.com/tracks/description-page/2023-08-09_19-26-41_ek3kbsNiGRY5rQJ9KUwzdm.svg?auto=format&amp;q=35&amp;cs=srgb"
                              alt="skillovilla-learner-image"
                              className="h-full w-full object-contain"
                            />
                          </div>
                          <div className="ImageListStyledLearnerImageWrapper ExpertsOverlappingImage">
                            <img
                              loading="lazy"
                              src="https://images.skillovilla.com/tracks/description-page/2023-08-09_19-26-41_nshXRSZZN7iNzxd7Dq83R8.png?auto=format&amp;q=35&amp;cs=srgb"
                              alt="skillovilla-learner-image"
                              className="h-full w-full object-contain"
                            />
                          </div>
                          <div className="ImageListStyledLearnerImageWrapper ExpertsOverlappingImage">
                            <img
                              loading="lazy"
                              src="https://images.skillovilla.com/tracks/description-page/2023-08-09_19-26-41_qy5hYZHYSco3S2vX2mKtUB.png?auto=format&amp;q=35&amp;cs=srgb"
                              alt="skillovilla-learner-image"
                              className="h-full w-full object-contain"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="TV6">
                  Full Stack Web Development
                </p>
                <button className="btn btn-primary">
                  Join Now
                </button>
              </div>
            </div>
            {/* Fourth Card */}
            <div className="GridStyledColumnV1">
              <div className="styleCardWrapper h-full">
                <div className="Pill CardsStyledPill">
                  <div className="flex items-center">
                    <div className="ImageListStyledLearnerImageWrapper w-[calc(100%+4px)] h-[calc(100%+4px)] -ml-[2px]">
                      <img
                        loading="lazy"
                        src="https://images.skillovilla.com/tracks/description-page/2023-08-09_19-31-58_g2kk8VBqx4cnSiPoY7fhhJ.png?auto=format&amp;q=35&amp;cs=srgb"
                        alt="skillovilla-learner-image"
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div className="ImageListStyledLearnerImageWrapper w-[calc(100%+4px)] h-[calc(100%+4px)] -ml-[2px]">
                      <img
                        loading="lazy"
                        src="https://images.skillovilla.com/tracks/description-page/2023-08-09_19-31-58_8GB5DDofWMT6TerLaQ7m13.png?auto=format&amp;q=35&amp;cs=srgb"
                        alt="skillovilla-learner-image"
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div className="ImageListStyledLearnerImageWrapper w-[calc(100%+4px)] h-[calc(100%+4px)] -ml-[2px]">
                      <img
                        loading="lazy"
                        src="https://images.skillovilla.com/tracks/description-page/2023-08-09_19-31-58_aXgfm9dta89ZVWPcjfsbXF.png?auto=format&amp;q=35&amp;cs=srgb"
                        alt="skillovilla-learner-image"
                        className="h-full w-full object-contain"
                      />
                    </div>
                  </div>
                  <p className="TV1 TV10">
                    5k+ enrollments
                  </p>
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex w-full mb-4 px-7.5">
                    <img
                      loading="lazy"
                      src="https://images.skillovilla.com/tracks/description-page/2023-08-09_19-26-41_vLYdn42UgpNK8Qirx6tMF8.jpg?auto=format&amp;q=35&amp;cs=srgb"
                      alt="skillovilla-track-icon"
                      className="styleTrackIcon"
                    />
                    <div className="box5">
                      <div className="flex justify-end text-white mb-5">
                        <div className="flex items-center whitespace-nowrap bg-gradient-to-r from-orange-500 to-yellow-400 px-3 py-1 rounded-md">
                          <div className="fresnel-container fresnel-greaterThanOrEqual-tabletXS">
                            <div className="h-4 w-4 mr-1.5 md:hidden">
                              <img
                                loading="lazy"
                                src="https://static-artifacts-assets.skillovilla.com/assets/icons/limited.svg?auto=format&amp;q=35&amp;cs=srgb"
                                alt="skillovilla-track-limited-icon"
                                className="h-[17px] w-[17px]"
                              />
                            </div>
                          </div>
                          <p className="TV1 TV31">
                            Limited Seats
                          </p>
                        </div>
                        <div className="styleOfferTag">
                          <div className="h-4 w-4 mr-1.5 md:hidden">
                            <img
                              loading="lazy"
                              src="https://static-artifacts-assets.skillovilla.com/assets/icons/offer.svg?auto=format&amp;q=35&amp;cs=srgb"
                              alt="skillovilla-track-offer-icon"
                              className="h-[17px] w-[17px]"
                            />
                          </div>
                          <p className="TV1 TV32">
                            20% Off
                          </p>
                        </div>
                      </div>
                      <div className="expertsInfoWrapper">
                        <p className="TV6 TV33">
                          Designed by experts from
                        </p>
                        <div className="flex items-center">
                          <div className="ImageListStyledLearnerImageWrapper ExpertsOverlappingImage">
                            <img
                              loading="lazy"
                              src="https://images.skillovilla.com/tracks/description-page/2023-08-09_19-26-41_ek3kbsNiGRY5rQJ9KUwzdm.svg?auto=format&amp;q=35&amp;cs=srgb"
                              alt="skillovilla-learner-image"
                              className="h-full w-full object-contain"
                            />
                          </div>
                          <div className="ImageListStyledLearnerImageWrapper ExpertsOverlappingImage">
                            <img
                              loading="lazy"
                              src="https://images.skillovilla.com/tracks/description-page/2023-08-09_19-26-41_nshXRSZZN7iNzxd7Dq83R8.png?auto=format&amp;q=35&amp;cs=srgb"
                              alt="skillovilla-learner-image"
                              className="h-full w-full object-contain"
                            />
                          </div>
                          <div className="ImageListStyledLearnerImageWrapper ExpertsOverlappingImage">
                            <img
                              loading="lazy"
                              src="https://images.skillovilla.com/tracks/description-page/2023-08-09_19-26-41_qy5hYZHYSco3S2vX2mKtUB.png?auto=format&amp;q=35&amp;cs=srgb"
                              alt="skillovilla-learner-image"
                              className="h-full w-full object-contain"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="TV6">
                  AI & ML Masterclass
                </p>
                <button className="btn btn-primary">
                  Join Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;