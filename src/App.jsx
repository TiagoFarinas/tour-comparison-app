//Task 1 - App.jsx (Root Component)
import React, { useState, useEffect } from 'react';
import Gallery from './Gallery';
const App = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => { // Fetch tour data on mount
    const fetchTours = async () => {
      try {
        const response = await fetch('https://course-api.com/react-tours-project');
        if (!response.ok) {
          throw new Error('Failed to fetch tours')};
        const data = await response.json();
        setTours(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false)}};
    fetchTours()},[]);
  const removeTour = (id) => {  // Remove tour by ID
    setTours(tours.filter((tour) => tour.id !== id))};
  if (loading) {
    return <h2>Loading...</h2>};
  if (error) {
    return <h2>Error: {error}</h2>};
  return (
    <div>
      <h1>Tour Comparison App</h1>
      <Gallery tours={tours} removeTour={removeTour} />
    </div>)};
export default App;