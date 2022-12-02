import React from 'react'
import People from '../People/People'

function PeopleNav() {

 
  return (
    <div className=' h-24 flex overflow-x-auto pt-2 border-y-4 border-slate-300 border-solid scrollbar-hide'>
  <People/>
    </div>
  )
}

export default PeopleNav