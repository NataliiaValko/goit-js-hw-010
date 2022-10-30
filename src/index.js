import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

import { fetchCountries } from './js/fetchCountries';
import { refs } from './js/refs';
import { createCountries, createCountry } from './js/renderMarkupCountry';

import './css/styles.css';

const DEBOUNCE_DELAY = 300;

const clearResultMarkup = () => {
  refs.itemResult.innerHTML = '';
  refs.listResult.innerHTML = '';
};
const handleInput = event => {
  clearResultMarkup();
  const searchQuery = event.target.value.trim().toLowerCase();

  fetchCountries(searchQuery)
    .then(result => {
      console.log(result);
      if (result.length > 10) {
        Notiflix.Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      } else if (result.length >= 2 && result.length <= 10) {
        createCountries(result);
      } else {
        createCountry(result);
      }
    })
    .catch(error => {
      console.log(error);
      Notiflix.Notify.failure('Oops, there is no country with that name');
    });
};

refs.inputSearch.addEventListener(
  'input',
  debounce(handleInput, DEBOUNCE_DELAY)
);
