import React from 'react';
import PropTypes from 'prop-types';

const mediaUrl = 'http://media.mw.metropolia.fi/wbma/uploads/';

const Profile = (props) => {
  const {username, email, full_name, picture} = props.user;
  return (
      <React.Fragment>
        <h1>Profile</h1>
        <p>Username: {username}</p>
        <p>email: {email}</p>
        <p>Full name: {full_name}</p>
        <img src={mediaUrl + picture.filename} alt='käyttäjä kuva'/>

      </React.Fragment>
  );
};

Profile.propTypes = {
  user: PropTypes.object,
};

export default Profile;