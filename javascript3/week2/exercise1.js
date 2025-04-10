
async function firstExe(url) {
    // const data = await fetch(url);
    // const result = await data.json().catch();
    // return console.log(result);

    try {                               // This is the same 
        const data = await fetch(url);
        const result = await data.json();
        return console.log(result.answer);
    } catch (error) {
        return console.log(error);
    }
}

firstExe("https://yesno.wtf/api");