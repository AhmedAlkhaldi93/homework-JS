function notThisFunctionName(imageUrl, elementToAppendImageTo) {
    const img = document.createElement("img");
    img.src = imageUrl;
    elementToAppendImageTo.appendChild(img);
}

notThisFunctionName("https://avatars.githubusercontent.com/u/36824945?s=200&v=4", document.querySelector("body"));