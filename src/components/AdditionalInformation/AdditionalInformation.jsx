import { VscPreview } from 'react-icons/vsc';
import { MdRecentActors } from 'react-icons/md';

import { LinkToInfo } from './AdditionalInformation.styled';
import { useLocation } from 'react-router-dom';

const AdditionalInformation = () => {
  const location = useLocation();
  const backdropRef = location.state?.from ?? '/';
  return (
    <>
      <h3>Additional information</h3>
      <ul>
        <li>
          <LinkToInfo to="cast" state={{ from: backdropRef }}>
            <MdRecentActors /> Cast
          </LinkToInfo>
        </li>
        <li>
          <LinkToInfo to="reviews" state={{ from: backdropRef }}>
            <VscPreview /> Reviews
          </LinkToInfo>
        </li>
      </ul>
    </>
  );
};

export default AdditionalInformation;
