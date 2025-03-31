const dogImgId = document.getElementById("dogImg");

setInterval(() => {
fetch("https://dog.ceo/api/breeds/image/random")
    .then(dataRow => dataRow.json())
    .then(data => {
        const dogImgs = document.createElement("img");
        dogImgs.src = data.message;
        dogImgId.appendChild(dogImgs);
    });
}, 2000);
