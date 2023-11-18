import React  from 'react'
import RoomDetails from '../components/RoomDetails'
import Chat from '../components/Chat'

function Room() {


  return (
    <div className='room'>
      <RoomDetails/>
      <Chat/>
    </div>
  )
}

export default Room
