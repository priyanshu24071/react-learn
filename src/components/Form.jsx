import React, { useState } from 'react';

export default function Form() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(null);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(form);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div
      style={{
        maxWidth: 500,
        margin: '2rem auto',
        padding: '1.5rem',
        border: '1px solid #ddd',
        borderRadius: 8,
        background: '#fff',
        fontFamily: 'sans-serif',
      }}
    >
      <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>
        Contact Us
      </h2>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <label style={{ display: 'block', marginBottom: 8 }}>
          Name:
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '0.5rem',
              marginTop: '4px',
              marginBottom: '1rem',
              borderRadius: 4,
              border: '1px solid #ccc',
            }}
          />
        </label>

        {/* Email */}
        <label style={{ display: 'block', marginBottom: 8 }}>
          Email:
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '0.5rem',
              marginTop: '4px',
              marginBottom: '1rem',
              borderRadius: 4,
              border: '1px solid #ccc',
            }}
          />
        </label>

        {/* Message */}
        <label style={{ display: 'block', marginBottom: 8 }}>
          Message:
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            required
            style={{
              width: '100%',
              padding: '0.5rem',
              marginTop: '4px',
              marginBottom: '1rem',
              borderRadius: 4,
              border: '1px solid #ccc',
              resize: 'vertical',
            }}
          />
        </label>

        <button
          type="submit"
          style={{
            padding: '0.5rem 1rem',
            border: 'none',
            borderRadius: 4,
            background: '#28a745',
            color: '#fff',
            cursor: 'pointer',
          }}
        >
          Submit
        </button>
      </form>

      {submitted && (
        <div
          style={{
            marginTop: '2rem',
            padding: '1rem',
            background: '#f9f9f9',
            borderRadius: 4,
            border: '1px solid #eee',
          }}
        >
          <h3>Submitted Data:</h3>
          <p>
            <strong>Name:</strong> {submitted.name}
          </p>
          <p>
            <strong>Email:</strong> {submitted.email}
          </p>
          <p>
            <strong>Message:</strong> {submitted.message}
          </p>
        </div>
      )}
    </div>
  );
}
