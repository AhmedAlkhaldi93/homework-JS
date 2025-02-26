
//--------------------------------------------Save a note------------------------
const notes = [];

function saveNote(content, id) {
    if(typeof content === "string" && content !== "" && typeof id === "number"){
        notes.push({content : content, id : id})
    }else{
        console.log("Please inter the correct parameters.");
    }
    return notes;
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes); 

//--------------------------------------------Get a note------------------------

function getNote(id) {
    if(typeof id === "number"){
        for(let i=0; i < notes.length; i++){
            if(notes[i].id === id){
                return notes[i].content;
            }else{
                return "The note id dose not exist."
            }
        }
    }else{
        return "Please enter a number ID."
    }
  }
  
  const firstNote = getNote(1);
  console.log(firstNote);

//--------------------------------------------Log out notes------------------------

  function logOutNotesFormatted() {
    for(let i=0; i < notes.length; i++){
        const text = "The note with id: " + notes[i].id + ", has the following note text: " + notes[i].content;
        console.log(text); 
    }
  }
  
  logOutNotesFormatted();
  
//--------------------------------------------Unique feature------------------------

function editNote(id, newContent){
    if(typeof id === "number" && typeof newContent === "string"){
        for(let i=0; i < notes.length; i++){
            if(id === notes[i].id){
                 notes[i].content = newContent;
            }
        }
        return console.log("The new update is :" + newContent);
    }else{
        return console.log("Please inter the right input.");
    }
}

editNote(2, "NEW NOTE");
console.log(notes);

