export const getMovies = () => {
  return fetch(`/api/movies`);
};

export const getSeries = () => {
  return fetch(`/api/seriess`);
};
