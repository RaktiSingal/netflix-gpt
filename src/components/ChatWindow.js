import React, { useEffect, useRef, useState } from 'react'
import ChatMessage from './ChatMessage';


const originalMessages = [
    { id: 1, name: 'Rakti', photoUrl: 'https://randomuser.me/api/portraits/women/44.jpg', message: 'Hi chat 👋' },
    { id: 2, name: 'Aman', photoUrl: 'https://randomuser.me/api/portraits/men/32.jpg', message: 'Hello everyone!' },
    { id: 3, name: 'Sneha', photoUrl: 'https://randomuser.me/api/portraits/women/65.jpg', message: 'Good morning ☀️' },
    { id: 4, name: 'Rahul', photoUrl: 'https://randomuser.me/api/portraits/men/45.jpg', message: 'Hey folks' },
    { id: 5, name: 'Priya', photoUrl: 'https://randomuser.me/api/portraits/women/21.jpg', message: 'Nice to meet you all' },
    { id: 6, name: 'Karan', photoUrl: 'https://randomuser.me/api/portraits/men/51.jpg', message: 'What’s up?' },
    { id: 7, name: 'Neha', photoUrl: 'https://randomuser.me/api/portraits/women/12.jpg', message: 'Good to be here' },
    { id: 8, name: 'Arjun', photoUrl: 'https://randomuser.me/api/portraits/men/67.jpg', message: 'Hello hello 👋' },
    { id: 9, name: 'Anjali', photoUrl: 'https://randomuser.me/api/portraits/women/36.jpg', message: 'How’s everyone doing?' },
    { id: 10, name: 'Vikram', photoUrl: 'https://randomuser.me/api/portraits/men/28.jpg', message: 'All good!' },

    { id: 11, name: 'Pooja', photoUrl: 'https://randomuser.me/api/portraits/women/49.jpg', message: 'Happy Wednesday 😊' },
    { id: 12, name: 'Rohit', photoUrl: 'https://randomuser.me/api/portraits/men/60.jpg', message: 'Busy day today' },
    { id: 13, name: 'Simran', photoUrl: 'https://randomuser.me/api/portraits/women/33.jpg', message: 'Same here!' },
    { id: 14, name: 'Sahil', photoUrl: 'https://randomuser.me/api/portraits/men/19.jpg', message: 'Let’s catch up later' },
    { id: 15, name: 'Kavya', photoUrl: 'https://randomuser.me/api/portraits/women/70.jpg', message: 'Sure 👍' },
    { id: 16, name: 'Aditya', photoUrl: 'https://randomuser.me/api/portraits/men/40.jpg', message: 'Any updates?' },
    { id: 17, name: 'Isha', photoUrl: 'https://randomuser.me/api/portraits/women/58.jpg', message: 'Nothing major yet' },
    { id: 18, name: 'Manish', photoUrl: 'https://randomuser.me/api/portraits/men/74.jpg', message: 'Work in progress' },
    { id: 19, name: 'Nidhi', photoUrl: 'https://randomuser.me/api/portraits/women/9.jpg', message: 'Sounds good' },
    { id: 20, name: 'Deepak', photoUrl: 'https://randomuser.me/api/portraits/men/83.jpg', message: 'Let’s sync soon' },

    { id: 21, name: 'Aarti', photoUrl: 'https://randomuser.me/api/portraits/women/41.jpg', message: 'Joining a bit late' },
    { id: 22, name: 'Suresh', photoUrl: 'https://randomuser.me/api/portraits/men/11.jpg', message: 'No worries' },
    { id: 23, name: 'Megha', photoUrl: 'https://randomuser.me/api/portraits/women/27.jpg', message: 'I’ll take notes' },
    { id: 24, name: 'Varun', photoUrl: 'https://randomuser.me/api/portraits/men/90.jpg', message: 'Thanks!' },
    { id: 25, name: 'Tanvi', photoUrl: 'https://randomuser.me/api/portraits/women/17.jpg', message: 'Good plan' },
    { id: 26, name: 'Nikhil', photoUrl: 'https://randomuser.me/api/portraits/men/23.jpg', message: 'Agreed' },
    { id: 27, name: 'Shreya', photoUrl: 'https://randomuser.me/api/portraits/women/64.jpg', message: 'Looks fine to me' },
    { id: 28, name: 'Mohit', photoUrl: 'https://randomuser.me/api/portraits/men/38.jpg', message: 'Deploying now' },
    { id: 29, name: 'Rina', photoUrl: 'https://randomuser.me/api/portraits/women/55.jpg', message: 'Monitoring logs' },
    { id: 30, name: 'Akash', photoUrl: 'https://randomuser.me/api/portraits/men/72.jpg', message: 'No issues so far' },

    { id: 31, name: 'Swati', photoUrl: 'https://randomuser.me/api/portraits/women/5.jpg', message: 'Great news 🎉' },
    { id: 32, name: 'Harsh', photoUrl: 'https://randomuser.me/api/portraits/men/14.jpg', message: 'Well done team' },
    { id: 33, name: 'Payal', photoUrl: 'https://randomuser.me/api/portraits/women/62.jpg', message: 'Nice collaboration' },
    { id: 34, name: 'Gaurav', photoUrl: 'https://randomuser.me/api/portraits/men/66.jpg', message: 'Wrapping up' },
    { id: 35, name: 'Rupal', photoUrl: 'https://randomuser.me/api/portraits/women/18.jpg', message: 'See you tomorrow' },
    { id: 36, name: 'Yash', photoUrl: 'https://randomuser.me/api/portraits/men/53.jpg', message: 'Bye 👋' },
    { id: 37, name: 'Komal', photoUrl: 'https://randomuser.me/api/portraits/women/29.jpg', message: 'Take care' },
    { id: 38, name: 'Abhishek', photoUrl: 'https://randomuser.me/api/portraits/men/48.jpg', message: 'Logging off' },
    { id: 39, name: 'Sonia', photoUrl: 'https://randomuser.me/api/portraits/women/77.jpg', message: 'Have a good day!' },
    { id: 40, name: 'Pranav', photoUrl: 'https://randomuser.me/api/portraits/men/6.jpg', message: 'Catch you later' },

    { id: 41, name: 'Divya', photoUrl: 'https://randomuser.me/api/portraits/women/88.jpg', message: 'Bye everyone' },
    { id: 42, name: 'Kunal', photoUrl: 'https://randomuser.me/api/portraits/men/95.jpg', message: 'Signing off' },
    { id: 43, name: 'Bhavya', photoUrl: 'https://randomuser.me/api/portraits/women/73.jpg', message: 'Good night 🌙' },
    { id: 44, name: 'Ritesh', photoUrl: 'https://randomuser.me/api/portraits/men/31.jpg', message: 'See ya!' },
    { id: 45, name: 'Alka', photoUrl: 'https://randomuser.me/api/portraits/women/39.jpg', message: 'Talk soon' },
    { id: 46, name: 'Siddharth', photoUrl: 'https://randomuser.me/api/portraits/men/87.jpg', message: 'Done for today' },
    { id: 47, name: 'Monika', photoUrl: 'https://randomuser.me/api/portraits/women/16.jpg', message: 'Same here' },
    { id: 48, name: 'Naveen', photoUrl: 'https://randomuser.me/api/portraits/men/57.jpg', message: 'Closing laptop 💻' },
    { id: 49, name: 'Pallavi', photoUrl: 'https://randomuser.me/api/portraits/women/82.jpg', message: 'Good night all' },
    { id: 50, name: 'Tarun', photoUrl: 'https://randomuser.me/api/portraits/men/8.jpg', message: 'Bye!' },
];

const ChatWindow = () => {
    const [messages, setMessages] = useState([]);
    const indexRef = useRef(0);

    useEffect(() => {

        const interval = setInterval(() => {
            setMessages((prev) => {
                if (indexRef.current >= originalMessages.length) {
                    clearInterval(interval);
                    return prev;
                }

                const updated = [originalMessages[indexRef.current], ...prev];
                indexRef.current += 1;
                return updated;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-[500px] w-full border border-black my-20 mx-2 p-2 overflow-y-scroll flex flex-col-reverse">
            {messages?.map((message) => {
                return <ChatMessage user={message} key={message.id} />
            })}
        </div>
    )
}

export default ChatWindow