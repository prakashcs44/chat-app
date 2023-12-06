import React from 'react'
import Loading from './Loading'

function Writing({writer}) {
  return (
    <div className = "loader" >
    <div
    style={{
    fontSize:"20px",
    margin:"auto",
    textAlign:"center"
  
  }}
    >
      <p>{writer} is writing...</p>
    </div>
    <Loading/>
    </div>
  )
}

export default Writing
