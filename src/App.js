// src/App.js
import React from 'react';
import Card from './components/Card';
import Form from './components/Form'
const posts = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=400&h=300',
    title: 'Exploring the Mountains',
    description:
      'A journey through the winding paths and peaks of the world’s greatest ranges.',
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1499346030926-9a72daac6c63?auto=format&fit=crop&w=400&h=300',
    title: 'City Lights at Night',
    description:
      'How urban jungles come alive when the sun goes down—and the best rooftop spots to see them.',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&h=300',
    title: 'Coastal Escapes',
    description:
      'Sand, surf, and serenity: top coastal towns you need on your bucket list.',
  },
  {
    id: 4,
    image:
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&h=300',
    title: 'Forest Trails',
    description:
      'Wander through lush green canopies and listen to the symphony of nature.',
  },
  {
    id: 5,
    image:
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&h=300',
    title: 'Desert Dreams',
    description:
      'Experience the vast silence and golden sands of an endless desert landscape.',
  },
  {
    id: 6,
    image:
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=400&h=300',
    title: 'Wildlife Wonders',
    description:
      'Get up close with majestic creatures in their natural habitats.',
  },
  {
    id: 7,
    image:
      'https://images.unsplash.com/photo-1491557345352-5929e343eb89?auto=format&fit=crop&w=400&h=300',
    title: 'Architectural Marvels',
    description:
      'Admire cutting-edge designs and historic landmarks around the world.',
  },
  {
    id: 8,
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&h=300',
    title: 'Culinary Adventures',
    description:
      'Savor mouth-watering dishes and discover flavors from every corner.',
  },
  {
    id: 9,
    image:
      'https://images.unsplash.com/photo-1481277542477-ff3465f43e1e?auto=format&fit=crop&w=400&h=300',
    title: 'Art & Design',
    description:
      'Dive into creative masterpieces and cutting-edge visual trends.',
  },
  {
    id: 10,
    image:
      'https://images.unsplash.com/photo-1508264165352-258a6dbf0db5?auto=format&fit=crop&w=400&h=300',
    title: 'Wellness Retreats',
    description:
      'Rejuvenate mind and body at top spas and holistic retreats.',
  },
];


export default function App() {
  return (
    <div
      style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '2rem',
        fontFamily: 'sans-serif',
        background: '#f0f2f5',
      }}
    >
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>
        My Blog Home
      </h1>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1.5rem',
          justifyContent: 'center',
        }}
      >
        {posts.map(post => (
          <Card
            key={post.id}
            image={post.image}
            title={post.title}
            description={post.description}
          />
        ))}
      </div>

      <div>
          <Form/>
      </div>
    </div>
  );
}
