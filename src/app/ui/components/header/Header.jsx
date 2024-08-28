import React from 'react';
import Link from 'next/link';

const styles = {
  header: {
    padding: '1rem',
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
  },
};

const Header = () => {
  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <Link href='/' style={styles.link}>
          Home
        </Link>
        <Link href='/dashboard' style={styles.link}>
          Dashboard
        </Link>
        <Link href='/dashboard/todos' style={styles.link}>
          Todos
        </Link>
      </nav>
    </header>
  );
};

export default Header;
