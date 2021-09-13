import React from 'react';
import P from 'prop-types';
import './style.css';

function InfoData({ children, value }) {
  return (
    <div className="info">
      <h1>{value}</h1>
      <p>{children}</p>
    </div>
  );
}

InfoData.propTypes = {
  children: P.string.isRequired,
  value: P.string.isRequired,
};

export { InfoData };
