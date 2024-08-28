import React from 'react';

const styles = {
  footer: {
    padding: '1rem',
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    position: 'fixed',
    width: '100%',
    bottom: 0,
  },
};

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2024 All rights reserved.</p>
    </footer>
  );
};

export default Footer;
