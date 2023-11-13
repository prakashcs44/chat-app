

function currentTime(){
    const currentDate = new Date();

    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    
    // Pad single-digit minutes and seconds with a leading zero
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    
    
    const time = `${hours}:${formattedMinutes}`;
    return time
}




export default currentTime
