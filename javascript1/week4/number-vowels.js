const vowelsLetter = ["a", "e", "i", "o", "u"];

function getCount(str) {
  str = str.toLowerCase();
  str = str.replace(/\s+/g, "");
  let countLetter = 0;
  for(let i=0; i < str.length; i++){
    if(str[i] === vowelsLetter[0] || str[i] === vowelsLetter[1] || str[i] === vowelsLetter[2] || str[i] === vowelsLetter[3] || str[i] === vowelsLetter[4]){
        countLetter = countLetter + 1;
    }
  }
    return countLetter;
  }

  console.log(getCount("Ahmed Alkhaldi"));