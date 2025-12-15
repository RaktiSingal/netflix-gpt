import React, { useRef } from 'react'
import {BACKGROUND_URL} from '../utils/constants';
import client from '../utils/OpenAi';

const GPTSearchBar = () => {
    const searchQuery = useRef();

    const handleGptSearch = async() => {
        console.log('search', searchQuery.current.value);

        // if you get subscription
        // const results = await client.chat.completions.create({
        //     model: 'gpt-3.5-turbo',
        //     messages: [
        //         { role: 'user', content: 'Are semicolons optional in JavaScript?' },
        //     ],
        // });

    }

    return (
        <div>
            <div className="w-full h-full">
                <img
                    className="absolute w-full h-full"
                    alt="logo"
                    src={BACKGROUND_URL}
                />
            </div>
            <form className="absolute p-12 bg-black/85 w-9/12 my-40 mx-auto right-0 left-0">
                <input
                    type="text"
                    placeholder="What would you like to watch today"
                    className="p-4 m-2 w-[80%] rounded-md bg-gray-300"
                    ref={searchQuery}
                />
                <button
                    type="button"
                    onClick={handleGptSearch}
                    className="bg-red-600 p-4 m-2 text-white rounded-md pl-8 pr-8"
                >
                    Search
                </button>
            </form>
        </div>
    )
}

export default GPTSearchBar