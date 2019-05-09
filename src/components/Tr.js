import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import ECHO from  './ECHO.png';
import './Tr.css'



const Tr = (props) => {
  const {title, description, file_id} = props.pic;
  return (
      <tr>
        <td>
          <img src={ECHO} alt='kuva'  />
        </td>
        <td>
          <h3>{title}</h3>
          <p>{description}</p>
        </td>
        <td>
          <Link to={'single/' + file_id}><strong>Listen</strong></Link>
        </td>
      </tr>
  );
};

Tr.propTypes = {
  pic: PropTypes.object,
};
export default Tr;