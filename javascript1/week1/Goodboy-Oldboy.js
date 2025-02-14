const dogYearOfBirth = 2010;
const dogYearFuture = 2080;
let dogYear = dogYearFuture-dogYearOfBirth;
const shouldShowResultInDogYears = true;

if (shouldShowResultInDogYears){
}else {
    dogYear = dogYear/7;
}
console.log("Your dog will be " + dogYear + " dog years old in " + dogYearFuture);