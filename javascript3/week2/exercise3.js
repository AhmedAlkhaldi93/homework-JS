const textPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve(console.log("Hello!"));
        reject("error message!");
    }, 4000);
});