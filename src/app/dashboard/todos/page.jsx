import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Todos',
  description: 'Inside todos page',
};

const fetchTodos = async () => {
  await new Promise((res) => setTimeout(res, 5000));
  return fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => response.json())
    .then((json) => json);
};

const Todos = async () => {
  const todos = await fetchTodos();

  return (
    <div style={{ padding: 10 }}>
      <ul style={styles.cardList}>
        {todos.map((todo) => (
          <li key={todo.id} style={styles.card}>
            <Link href={''} style={styles.link}>
              <h3>{todo.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  cardList: {
    listStyleType: 'none',
    padding: 0,
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  card: {
    backgroundColor: '#000',
    border: '1px solid #d3d3d3',
    padding: '1rem',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    flex: '1 1 calc(33.333% - 1rem)',
    maxWidth: 'calc(33.333% - 1rem)',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
};

export default Todos;
