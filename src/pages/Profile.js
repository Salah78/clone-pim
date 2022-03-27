import React from 'react';
import Log from '../components/Log';

const Profile = () => {
  return (
    <div className="profil-page">
      <div className="log-container">
        <Log />
        <div className="img-container">
          <img src="./img/connexion.png" alt="img-log" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
