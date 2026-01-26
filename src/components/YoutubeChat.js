import React from 'react'
import ChatWindow from './ChatWindow'

const YoutubeChat = () => {
    return (
        <div className="flex">
            <div className='my-20 mx-2'>
                <iframe
                    width="900"
                    height="500"
                    src="https://www.youtube.com/embed/H_wkoy_SnfE?si=288gn8gPCZiA-AJg"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                ></iframe>
            </div>
            <ChatWindow />
        </div>
    )
}

export default YoutubeChat