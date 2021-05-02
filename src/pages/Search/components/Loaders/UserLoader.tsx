import React from 'react';
import ImageLoader from './ImageLoader';
import InfoLoader from './InfoLoader';
import './styles.scss';

const UserLoader = () => (
  <div className="loader-container">
    <ImageLoader />
    <InfoLoader />
  </div>
);

export default UserLoader;