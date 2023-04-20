import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { fetchListOfFilms } from 'helpers/api';
import ListOfFilms from 'components/ListOfFilms/ListOfFilms';
import { AlternativeMessage } from 'components/ListOfFilms/ListOfFilms.styled';
import SearchForm from 'components/SearchForm/SearchForm';
import { toast } from 'react-toastify';

const Movies = () => {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [filteredValue, setFilteredValue] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const onSearch = e => {
    e.preventDefault();
    setSearchParams({ query: e.target.input.value.trim().toLowerCase() });
  };

  const onFilter = filterValue => {
    setFilteredValue(filterValue);
  };
  useEffect(() => {
    if (query) {
      fetchListOfFilms(`/search/movie?query=${query}`).then(response => {
        if (!response.length) {
          toast('We can not find the film');
        }
        setSearchedMovies(response);
      });
    }
  }, [query]);

  useEffect(() => {
    if (searchedMovies.length) {
      const filteredArrayOfMovies = searchedMovies.filter(({ title }) =>
        title.toLowerCase().includes(filteredValue.toLowerCase())
      );
      setFilteredMovies(filteredArrayOfMovies);
    } else {
      setFilteredMovies([]);
    }
  }, [filteredValue, searchedMovies, searchedMovies.length]);

  return (
    <>
      <SearchForm onSearch={onSearch} onFilter={onFilter} />
      <ListOfFilms arrayOfFilms={filteredMovies} />
      {!filteredMovies.length && (
        <AlternativeMessage>
          Search result will be displayed here
        </AlternativeMessage>
      )}
    </>
  );
};

export default Movies;
