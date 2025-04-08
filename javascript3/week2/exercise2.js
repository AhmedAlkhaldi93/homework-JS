async function secondExe(url) {
    try { 
        const data = await fetch(url);
        const result = await data.json();
        return console.log(result.answer);
    } catch (error) {
        return console.log(error);
    }
}

secondExe("https://yesno.wtf/api");

setTimeout(() => {
    fetch("https://knajskdskj.jasdk")
    .then(data => data.json())
    .then(result => console.log(result))
    .catch(error => console.log(error)) 
}, 1000);
