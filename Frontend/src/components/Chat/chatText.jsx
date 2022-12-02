import React from 'react'

function chatText() {
  return (
    <>
    <div className='bg-green-100 h-20'></div>
    <div className='messageArea'>

        <div className="mesageDiv flex mb-8 h-28 items-center mt-2 ">
            <div className="avatar">
                <img src="/Photo/avatar.png" alt="" srcset="" className='w-full h-full'/>
            </div>
            <div className="message ">
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga assumenda voluptas modi voluptate. Ducimus hic illo consequatur, nam sequi incidunt?</p>
            </div>
        </div>

        <div className="mesageDiv flex">
         
            <div className="message ">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, odit?</p>
            </div>
            <div className="avatar">
                <img src="/images/A5.png" alt="" srcset="" className='h-12 w-12 rounded-full'/>
            </div>
        </div>
    </div>
    <div className='bg-yellow-100 h-20'>
        <input type="text" name="message" id="" className='my-2 h-12 w-56 ml-4' />
    </div>
    </>
  )
}

export default chatText