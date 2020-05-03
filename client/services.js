export const getMovies = () => {
  return fetch(`/api/movies?limit=21`);
};

export const getSeries = () => {
  return fetch(`/api/series?limit=21`);
};
