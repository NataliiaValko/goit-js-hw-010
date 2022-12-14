const filterResponse = '?fields=name,capital,population,languages,flags';

export const fetchCountries = searchQuery => {
  return fetch(
    `https://restcountries.com/v3.1/name/${searchQuery}${filterResponse}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};
