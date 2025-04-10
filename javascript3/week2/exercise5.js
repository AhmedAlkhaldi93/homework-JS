async function getMovies(){
    try {
        const astronauts = await fetch("http://api.open-notify.org/astros.json");
        const data = await fetch("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json");
        const movies = await data.json();
        movies.forEach(element => {
            console.log(element.title); 
        });    
    } catch (error) {
        console.error(error);
    }
}

getMovies();