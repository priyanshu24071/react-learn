import React from 'react';

export default function Card({ image, title, description }) {
  return (
    <div
      style={{
        borderRadius: 8,
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <img
        src={image}
        alt={title}
        style={{ width: '100%', height: 180, objectFit: 'cover' }}
      />
      <div style={{ padding: '1rem', flexGrow: 1 }}>
        <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.25rem' }}>{title}</h3>
        <p style={{ margin: 0, color: '#555' }}>{description}</p>
      </div>
      <div style={{ padding: '0 1rem 1rem' }}>
        <button
          style={{
            padding: '0.5rem 1rem',
            border: 'none',
            borderRadius: 4,
            background: '#007bff',
            color: '#fff',
            cursor: 'pointer',
          }}
        >
          Read more
        </button>
      </div>
    </div>
  );
}
