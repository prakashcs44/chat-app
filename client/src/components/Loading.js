
import React, { useContext, useEffect, useState } from 'react';
import { chatContext } from '../contexts/ChatContext';

function Loading() {
 const {colorMode}  = useContext(chatContext)
   
  const initialColor = colorMode === "dark"?"white":"black";

  const [spanProp1, setSpanProp1] = useState({color:initialColor,sizeX:"1",sizeY:"1",jumpY:"0px"});
  const [spanProp2, setSpanProp2] = useState({color:initialColor,sizeX:"1",sizeY:"1",jumpY:"0px"});
  const [spanProp3, setSpanProp3] = useState({color:initialColor,sizeX:"1",sizeY:"1",jumpY:"0px"});
  
  const spans = [setSpanProp1, setSpanProp2, setSpanProp3];
  let index = 0;

  const changeColor = () => {
    for (let i = 0; i < 3; i++) {
      if (i !== index) spans[i]({color:initialColor,sizeX:"1",sizeY:"1",jumpY:"0px"});
    }

    spans[index]({color:"green",sizeX:"1.3",sizeY:"1.3",jumpY:"-2px"});
    index = (index + 1) % 3;
  };

  useEffect(() => {
    const intervalId = setInterval(changeColor, 500); // Change color every 1 second
   
    return () => {
      clearInterval(intervalId); // Clear the interval when the component unmounts
    };
  }, []);

  return (
    <div className="loading"
    
    style={{
        margin:"auto",
        display:"flex",
        justifyContent:"center",
        alignItems: "center",
        gap: "10px",
        marginTop: "5px"
    }}
    
    >
      <span id="span-1" style={{ backgroundColor:spanProp1.color,
        transform:`scale(${spanProp1.sizeX},${spanProp1.sizeY}) translateY(${spanProp1.jumpY})`,
        width:"10px",
        height:"10px",
        borderRadius: "10px",
        
        }}></span>
      <span id="span-2" style={{ backgroundColor:spanProp2.color,
         transform:`scale(${spanProp2.sizeX},${spanProp2.sizeY}) translateY(${spanProp2.jumpY})`,
          width:"10px",
          height:"10px",
          borderRadius: "10px",
        
         }}></span>
      <span id="span-3" style={{ backgroundColor:spanProp3.color,
         transform:`translateY(${spanProp3.jumpY}) scale(${spanProp3.sizeX},${spanProp3.sizeY})`,
          width:"10px",
          height:"10px",
          borderRadius: "10px",
         
       }}></span>
    </div>
  );
}

export default Loading;
