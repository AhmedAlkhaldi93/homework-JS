
const positiveWords = ["happy", "awesome", "super"];
const negativeWords = ["bad", "terrible", "boring"];


function getSentimentScore(theSentence){
    const sentimentScoreObject={};
    if(typeof theSentence === "string"){
        sentimentScoreObject.score  = 0;
        sentimentScoreObject.positiveWor =[];
        sentimentScoreObject.negativeWor =[];

        for(let i = 0; i < positiveWords.length; i++){
            if(theSentence.includes(positiveWords[i])){
                sentimentScoreObject.score = sentimentScoreObject.score + 1;
                sentimentScoreObject.positiveWor.push(positiveWords[i]);
            }
            }
        for(let i = 0; i < negativeWords.length; i++){
            if(theSentence.includes(negativeWords[i])){
                sentimentScoreObject.score = sentimentScoreObject.score - 1;
                sentimentScoreObject.negativeWor.push(negativeWords[i]);
            }
            }
    }else{
        return "Please inter your sentence."
    }
    return sentimentScoreObject;
}

console.log(getSentimentScore("I am mega super awesome happy bad")); 
