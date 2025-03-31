const namesId = document.getElementById("names");

fetch("http://api.open-notify.org/astros.json")
.then(dataRow => dataRow.json())
.then(data => {
    const names = data.people;
    let num = 0;
    for (let i = 0; i < names.length; i++) {
        const pushName = document.createElement("p")
        pushName.innerHTML = names[i].name;
        namesId.appendChild(pushName);
        num = num + 1;            
    }
    const pushName = document.createElement("p")
    pushName.innerHTML = "The number of people is : " + num;
    namesId.appendChild(pushName);
});