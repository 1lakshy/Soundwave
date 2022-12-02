import React from 'react'
import ChatCard from '../components/Shared/ChatCard/ChatCard'

function Chat() {
  return (
    <div>
        <div className="h-20 bg-red-100 flex items-center">
            <h1 className='HeadingFont'>Contacts</h1>
            
            </div>
        <div className="h-[5rem] bg-green-300">types</div>
        <div className="bg-slate-300 h-[calc(100vh-10rem)]">
       <ChatCard/>
        </div>
    </div>
  )
}

export default Chat