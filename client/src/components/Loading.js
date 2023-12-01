
import React, { useEffect, useState } from 'react';

function Loading() {
  const [spanProp1, setSpanProp1] = useState({color:"black",sizeX:"1",sizeY:"1"});
  const [spanProp2, setSpanProp2] = useState({color:"black",sizeX:"1",sizeY:"1"});
  const [spanProp3, setSpanProp3] = useState({color:"black",sizeX:"1",sizeY:"1"});

  const spans = [setSpanProp1, setSpanProp2, setSpanProp3];
  let index = 0;

  const changeColor = () => {
    for (let i = 0; i < 3; i++) {
      if (i !== index) spans[i]({color:"black",sizeX:"1",sizeY:"1"});
    }

    spans[index]({color:"green",sizeX:"1.3",sizeY:"1.3"});
    index = (index + 1) % 3;
  };

  useEffect(() => {
    const intervalId = setInterval(changeColor, 500); // Change color every 1 second
   
    return () => {
      clearInterval(intervalId); // Clear the interval when the component unmounts
    };
  }, []);

  return (
    <div className="container"
    
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
        transform:`scale(${spanProp1.sizeX},${spanProp1.sizeY})`,
        width:"10px",
        height:"10px",
        borderRadius: "10px",
        
        }}></span>
      <span id="span-2" style={{ backgroundColor:spanProp2.color,
          width:"10px",
          height:"10px",
          borderRadius: "10px",
        transform:`scale(${spanProp2.sizeX},${spanProp2.sizeY})` }}></span>
      <span id="span-3" style={{ backgroundColor:spanProp3.color,
          width:"10px",
          height:"10px",
          borderRadius: "10px",
        transform:`scale(${spanProp3.sizeX},${spanProp3.sizeY})`}}></span>
    </div>
  );
}

export default Loading;
