// src/components/Preloader.js
import React from 'react';
import { EarthCanvas, StarsCanvas } from './canvas';

const Preloader = ({ slideUp }) => {
  return (
    <div id='loader-div' style={{ ...styles.loaderContainer, ...(slideUp && styles.slideUp) }}>
      <div id='loader-circle' style={styles.loader}></div>
      <div className='loader' style={styles.loaderText}></div>
      <StarsCanvas/>
    </div>
  );
};

const styles = {
  loaderContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#000000',
    transition: 'transform 1.5s ease',
    transform: 'translateY(0)',
  },
  slideUp: {
    transform: 'translateY(-100%)',
  },
  loader: {
    width: '100px',
    height: '100px',
    border: '7px solid #C7C8B5',
    borderTop: '7px solid #8e7cc3',
    borderRadius: '50%',
    animation: 'spin 1.5s linear infinite',
  },
  loaderText: {
    marginTop: '20px'
  }
};

export default Preloader;
