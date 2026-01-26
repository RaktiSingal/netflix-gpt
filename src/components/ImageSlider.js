import React, { useEffect, useState } from 'react'
import { ImagesData } from '../utils/constants'

const ImageSlider = () => {
    const [active, setActiveImage] = useState(0);

    useEffect(() => {
      let interval = setInterval(() => {
        setActiveImage((image) => {
          if (image+1 === ImagesData.length) {
            return 0
          } else {
            return image+1;
          }
        })
      }, 4000);

      return () => clearInterval(interval);
    }, []);

  return (
    <div className="p-2 h-90 w-[50%] m-auto mt-6 flex justify-center items-center">
        <div
          className="pr-2 cursor-pointer"
          onClick={() => setActiveImage((image) => {
            if (image-1 === -1) {
              return ImagesData.length-1
            } else {
              return image-1
            }
          })}
        >◀️</div>
        <img
            src={ImagesData[active]}
            alt='slider'
            className="w-[500px] h-70"
        />
        <div
          className="pl-2 cursor-pointer"
          onClick={() => setActiveImage((image) => {
            if (image+1 === ImagesData.length) {
              return 0
            } else {
              return image+1;
            }
          })}
        >▶️</div>
    </div>
  )
}

export default ImageSlider