async function exercise6() {
    try {
        const dataAstr = await fetch("http://api.open-notify.org/astros.json");
        const astronauts = await dataAstr.json();
        const dataMov = await fetch("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json");
        const movies = await dataMov.json();
        const batteryPromise = navigator.getBattery(); // This function only works in the browser
    
        // Wait for all to resolve
        const [astr, movie, battery] = await Promise.all([astronauts, movies, batteryPromise]);
    
        console.log('Movies:', movies);
        console.log('Battery level:', battery.level * 100 + '%');
        console.log('Is charging:', battery.charging);
  
    } catch (error) {
        console.error(error);
    }
}
  
exercise6();
  