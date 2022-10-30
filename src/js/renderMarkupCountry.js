import { refs } from './refs';

export const clearResultMarkup = () => {
  refs.itemResult.innerHTML = '';
  refs.listResult.innerHTML = '';
};

export const createCountries = array => {
  const markup = array
    .map(country => {
      return `<li class="country-list__item">
      <div class="country-list__img-box">          
      <img class="country-list__img" src="${country.flags.svg}" alt="${country.name}"></div>
                <p class="country-list__name">${country.name.common} </p>
              </li>`;
    })
    .join('');
  return (refs.listResult.innerHTML = markup);
};

export const createCountry = array => {
  const markup = array
    .map(country => {
      return `<div aria-label="country card"><div class="country-list__img-box">          
      <img class="country-list__img" src="${country.flags.svg}" alt="${
        country.name
      }"></div>
        <h2 class="country-list__name">${country.name.common}</h2>
    <p class="country-list__capital">Capital: ${country.capital}</p>
    <p class="country-list__population">Population: ${country.population}</p>
    <p class="country-list__languages">Languages: ${Object.values(
      country.languages
    )}</p></div>`;
    })
    .join('');
  return (refs.itemResult.innerHTML = markup);
};
