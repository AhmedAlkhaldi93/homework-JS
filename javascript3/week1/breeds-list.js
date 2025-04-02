const breedsListId = document.getElementById("breeds");

fetch("https://dog.ceo/api/breeds/list/all")
    .then(dataRow => dataRow.json())
    .then(data => {
        const list = Object.keys(data.message);                    // Here we get all breeds list
        const randomBreed = list[Math.floor(Math.random() * list.length)];
        const linkImg = `https://dog.ceo/api/breed/${randomBreed}/images/random`;
        fetch(linkImg)                                            // Here we  pass the link to get the dog img 
            .then(linkRow => linkRow.json())
            .then(link => {
                const randomImg = document.createElement("img");    
                randomImg.src = link.message;
                breedsListId.appendChild(randomImg);
                
                const breedName = document.createElement("p");
                breedName.innerHTML = randomBreed;
                breedsListId.appendChild(breedName);
            });
    });
