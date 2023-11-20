import React from 'react'
import Loading from './Loading'

function Writing({writer}) {
  return (
    <div style={{marginBottom:"10px"}}>
    <div
    style={{marginLeft:"150px",
    fontSize:"20px",
    margin:"auto",
    textAlign:"center"
  
  }}
    >
      {writer} is writing...
    </div>
    <Loading/>
    </div>
  )
}

export default Writing
