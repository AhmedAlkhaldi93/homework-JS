
let array = [["white", "goodness"],["red", "aaaa"]];
function colourAssociation(array){
    // We <3 colours..
    const resultArray = [];
    for (let i=0; i < array.length; i++){
      const a = array[i][0];
      const b = array[i][1];
      const obj = {
        [a]: b
      };
      resultArray.push(obj);
    }
    return resultArray;
    
  }

  console.log(colourAssociation(array));

  //---------------------------------------------------------------------------------------------

  function correctTail(bod, tail){
  
    if (typeof bod === "string" && bod !== "" && typeof tail === "string" && tail !== ""){
      const x = bod[bod.length-1];
      if (x === tail){
        return true
      }else{
        return false
      }  
    }else{
      return "The arguments are not string or empty."
    }  
    }
  
  console.log(correctTail("lion","n"));

  //---------------------------------------------------------------------------------------------

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
  console.log(findLongest("ahmed alkhaldi ali"));

  //---------------------------------------------------------------------------------------------

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

const resultObj = {};
resultObj.online = [];
resultObj.offline = [];
resultObj.away = [];

function whosOnline(){
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
whosOnline();