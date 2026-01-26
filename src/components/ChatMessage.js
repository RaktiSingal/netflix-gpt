import React from 'react'

const ChatMessage = ({ user }) => {
    return (
        <div className="flex gap-1 p-1 items-center text-ellipsis">
            <img
                className="h-5 w-5 rounded-full border border-black"
                src={user.photoUrl}
                alt={user.name}
            />
            <div className="font-light">{user.name}</div>
            <div className="text-ellipsis">{user.message}</div>
        </div>
    )
}

export default ChatMessage