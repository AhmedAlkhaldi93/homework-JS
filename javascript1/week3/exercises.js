
//--------------------------------------------Color Association---------------------------------

let array = [["white", "goodness"],["red", "energy"]];
function colourAssociation(array){
    // We <3 colours..
    const resultArray = [];
    for (let i=0; i < array.length; i++){
      const key = array[i][0];
      const value = array[i][1];
      const obj = {
        [key]: value
      };
      resultArray.push(obj);
    }
    return resultArray;
    
  }

  console.log(colourAssociation(array));


//--------------------------------------------Is this my tail---------------------------------

  function correctTail(bod, tail){
  
    if (typeof bod === "string" && bod !== "" && typeof tail === "string" && tail !== ""){
      const lastLetter = bod[bod.length-1];
      if (lastLetter === tail){
        return true
      }else{
        return false
      }  
    }else{
      return "The arguments are not string or empty."
    }  
    }
  
  console.log(correctTail("lion","n"));


//----------------------------------------------Longest word---------------------------------

  function findLongest(str){
  
    var spl = str.split(" ");
    var longest = 0;
    
    for (var i = 0; i < spl.length; i++){
      if (spl[i].length > longest) {
        longest = spl[i].length;
      }
      }
      return longest;
  }
  console.log("The longest word is " + findLongest("ahmed alkhaldi ali") +" letters.");


//-----------------------------------------------Who's Online----------------------------

const theList = [{
  username: 'David',
  status: 'online',
  lastActivity: 10
}, {
  username: 'Lucy', 
  status: 'offline',
  lastActivity: 25
}, {
  username: 'Bob', 
  status: 'online',
  lastActivity: 104
}, {
  username: 'Ahmed',
  status: 'online',
  lastActivity: 5
}]



function whosOnline(theList){
  const resultObj = {};
  resultObj.online = [];
  resultObj.offline = [];
  resultObj.away = [];

  for(let i = 0; i < theList.length; i++){
    if (typeof theList[i].username === "string" && theList[i].username !== "" && (theList[i].status === "online" || theList[i].status === "offline") && theList[i].lastActivity >= 0 ){
      if(theList[i].status === "online" && theList[i].lastActivity <= 10){
        resultObj.online.push(theList[i].username);
      }else if(theList[i].status === "online" && theList[i].lastActivity > 10){
        resultObj.away.push(theList[i].username);
      }else{
        resultObj.offline.push(theList[i].username);
      }
    }else{
      console.log("Please fill all information right.");
    }

  }

  if(resultObj.online.length === 0){
      delete resultObj.online;
  }
  if(resultObj.offline.length === 0){
    delete resultObj.offline;
  }
  if(resultObj.away.length === 0){
    delete resultObj.away;
  }
  console.log(resultObj);
  return resultObj;
  
}
whosOnline(theList);
whosOnline(theList);