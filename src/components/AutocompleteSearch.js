import React, { useState } from 'react'

const AutocompleteSearch = () => {
    const [data, setAutoCompleteData] = useState([]);
    const [focus, setFocus] = useState(false);

    const fetchData = async (query) => {
        const data = await fetch("https://www.google.com/complete/search?client=firefox&q=$" + query);
        const json = await data.json();
        setAutoCompleteData(json[1] || []);
    }

    return (
        <div className="flex justify-center mt-52">
            <div className="flex flex-col w-[50%]">
                <input
                    type="text"
                    className='w-full border border-black p-5'
                    placeholder="Search on web"
                    onChange={(e) => fetchData(e.target.value)}
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                />

                {!!focus && data?.length > 0 && (
                    <ul className="h-48 overflow-y-scroll">
                        {data?.map((a, index) => {
                            return <li key={index} className='border border-b-gray-200 py-1 hover:bg-gray-200'>{a}</li>
                        })}
                    </ul>
                )}
            </div>
        </div>
    )
}

export default AutocompleteSearch