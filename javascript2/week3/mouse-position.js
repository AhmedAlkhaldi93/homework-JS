function logKey(event){
    console.log("screen: " + event.screenX + " and "+event.screenY);
    console.log("client: " + event.clientX + " and "+event.clientY);
}

document.addEventListener("mousemove", logKey);
