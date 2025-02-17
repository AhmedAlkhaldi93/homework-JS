const dogYearOfBirth = 2010;
const dogYearFuture = 2080;
let dogYear = dogYearFuture-dogYearOfBirth;
const shouldShowResultInDogYears = true;

if (shouldShowResultInDogYears){
    dogYear = dogYear + " human years";
}else {
    dogYear = dogYear/7 + " dog years";
}
console.log("Your dog will be " + dogYear + " old in " + dogYearFuture);