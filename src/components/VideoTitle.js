import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className="w-screen aspect-video px-10 pt-[20%] absolute text-white bg-gradient-to-r from-black">
      <div className="font-bold text-6xl">{title}</div>
      <p className="text-sm w-1/4">{overview}</p>
      <div className="flex mt-4">
        <button type="button" className="bg-white p-2 pl-8 pr-8 rounded-sm text-black">▶︎ Play</button>
        <button type="button" className="ml-4 bg-gray-600 pl-8 pr-8 opacity-80 p-2 rounded-sm text-white">ⓘ More info</button>
      </div>
    </div>
  )
}

export default VideoTitle