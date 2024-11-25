//Task 1 - 
import React, { useState, useEffect } from 'react';
import Gallery from './Gallery';
import './App.css';

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch data from API
    const fetchTours = async () => {
      try {
        const response = await fetch('https://www.course-api.com/react-tours-project');
        if (!response.ok) {
          throw new Error('Failed to fetch tours');
        }
        const data = await response.json();
        setTours(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="app">
      <h1>Our Tours</h1>
      <Gallery tours={tours} setTours={setTours} />
    </div>
  );
}

export default App;
