const PeterHouseVolume = 8*10*10;
const JuliaHouseVolume = 5*11*8;
const PeterGardenSize = 100;
const JuliaGardenSize = 70;

const PeterHousePrice = PeterHouseVolume * 2.5 * 1000 + PeterGardenSize * 300;
const JuliaHousePrice = JuliaHouseVolume * 2.5 * 1000 + JuliaGardenSize * 300;

if (PeterHousePrice >= 2500000){
    console.log("Peter's house costs too much.");
}else{
    console.log("Peter's house costs too little.");
}

if (JuliaHousePrice >= 1000000){
    console.log("Julia's house costs too much.");
}else{
    console.log("Julia's house costs too little.");
}