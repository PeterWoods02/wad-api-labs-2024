export const getMovies = async () => {
    const response = await  fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=ea2d36054405cd248ea22bc6b019b8a7&language=en-US&include_adult=false&page=1`
    )
    return response.json()
  };