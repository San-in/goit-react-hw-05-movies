import PropTypes from 'prop-types';
import { FcFilmReel } from 'react-icons/fc';
import {
  StyledLink,
  StyledList,
} from 'components/ListOfFilms/ListOfFilms.styled';
import { useLocation } from 'react-router-dom';

const ListOfFilms = ({ arrayOfFilms }) => {
  const location = useLocation();
  return (
    <StyledList>
      {arrayOfFilms.map(({ id, title }) => (
        <li key={id}>
          <StyledLink to={`/movies/${id}`} state={{ from: location }}>
            <FcFilmReel /> {title}
          </StyledLink>
        </li>
      ))}
    </StyledList>
  );
};
ListOfFilms.propTypes = {
  arrayOfFilms: PropTypes.arrayOf(
    PropTypes.exact({
      img: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ListOfFilms;
