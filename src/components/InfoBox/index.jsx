import React from "react"

const InfoBox = ({ mainText, secondaryText, image }) => {

  return (
    <div className="flex items-center justify-center flex-col gap-10 flex-shrink-0 rounded-3xl w-4/5 h-4/6 mb-25 max-w-[1180px] lg:max-w-[1210px] 2xl:max-w-[2200px] mx-auto px-2 md:px-8 lg:px-2 bg-rose-600">
      <div className="flex items-center justify-center flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row md:px-4 gap-3 w-3/5 sm:w-3/5 md:w-2/5 lg:2/5 xl:2/5 h-2/6 bg-rose-400 shadow-box_shadow rounded-2xl">
        {mainText && (
          <h1 className="text-mainBlackColor text-[32px] md:text-[36px] lg:text-5xl font-bold text-center leading-[70px] capitalize">
            {mainText}
          </h1>
        )}
        {!mainText && image && <img src={image} alt={image} className="max-w-full h-auto rounded-lg" />}
        {secondaryText && (
          <p className="text-xs sm:text-xs md:text-sm lg:text-lg xl:text-lg font-normal text-center text-gray-500">
            {secondaryText}
          </p>
        )}
      </div>
      <div className="p-6 text-black flex items-center text-center justify-center flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row md:px-4 gap-3 w-2/5 sm:w-3/5 md:w-2/5 lg:w-2/5 xl:w-2/5 bg-rose-200 opacity-50 shadow-box_shadow rounded-2xl">
        Do not refresh the page.
        <br /> You will be redirected to the dashboard in 5 seconds.
      </div>
    </div>
  )
}

export default InfoBox
