//Task 1 - 
import React, { useState, useEffect } from 'react';
import Gallery from './Gallery';
import './App.css';

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from API when the component mounts
  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await fetch('https://course-api.com/react-tours-project');
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

  // Remove a tour when user clicks "Not Interested"
  const removeTour = (id) => {
    setTours(tours.filter(tour => tour.id !== id));
  };

  // Loading or error state
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="app">
      <h1>Tour Comparison</h1>
      <Gallery tours={tours} removeTour={removeTour} />
    </div>
  );
}

export default App;
