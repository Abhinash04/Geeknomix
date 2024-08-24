import React from 'react'
import fact from "../../assets/images/fact/fact.png"
import demo from "../../assets/images/icon/interested-in-demo.png"

const Section6Banner = () => {
  return (
    <div className="mx-auto max-w-[1140px] w-full p-0 pt-[50px]">
      <div
        className="p-[22px] px-[34px] md:p-[18px] rounded-lg bg-cover bg-center flex flex-wrap items-center justify-between"
        style={{ backgroundImage: `url(${fact})` }}
      >
        <div className="flex flex-wrap items-center mr-[14px]">
          <img loading="lazy" src={demo} alt="Geeknomix-demo" className="w-[30px] h-[30px] md:w-[74px] md:h-[70px] mr-[14px]" />
          <div>
            <h4 className="TV8 TV52">Interested in our program? Check out the masterclass!</h4>
          </div>
        </div>
        <div className="flex flex-wrap ml-auto md:w-full md:mt-[10px] gap-2">
        <a href="/tracks" className="button_V11 button_V8 md:w-full md:mt-[10px]">
            <div className="relative h-full">
              <div className="h-full flex items-center justify-center">Contact Us</div>
            </div>
          </a>
          <a href="/tracks" className="button_V11 button_V8 md:w-full md:mt-[10px]">
            <div className="relative h-full">
              <div className="h-full flex items-center justify-center">Try Masterclass</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Section6Banner;
