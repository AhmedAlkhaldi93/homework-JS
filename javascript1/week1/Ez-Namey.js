const firstWords = ["Easy","Awesome","Swift","Quick","Smart","Clear","Simple","Fast","Effortless","Rapid"];
const secondWords = ["Corporation","Enterprises","Solutions","Innovations","Technologies","Systems","Enterprises","company","Ventures","Networks"];
const randomNumber = Math.floor(Math.random() * 10);

const startupName = firstWords[randomNumber]+" "+secondWords[randomNumber];

console.log("The startup: \""+startupName+"\" contains "+startupName.length+" characters.");