import React from 'react';

export const metadata = {
  title: 'Dashboard',
  description: 'Inside dashboard page',
};

const Dashboard = async () => {
  return (
    <div style={styles.card}>
      <h2>Dashboard</h2>
      <p>You are inside the dashboard.</p>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: '#000',
    padding: '2rem',
    border: '1px solid #d3d3d3',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    margin: '2rem auto',
    textAlign: 'center',
  },
};

export default Dashboard;
