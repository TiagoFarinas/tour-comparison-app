//Task 2 - Gallery.jsx (Tour List Component)
import React, { useState } from 'react';
const Gallery = ({ tours, removeTour }) => {
  return (
    <div className="gallery">
      {tours.map((tour) => (
        <TourCard key={tour.id} tour={tour} removeTour={removeTour} />
      ))}
    </div>)};
const TourCard = ({ tour, removeTour }) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="tour-card">
      <img src={tour.image} alt={tour.name} />
      <div className="tour-details">
        <h2>{tour.name}</h2>
        <h4>${tour.price}</h4>
        <p>
          {showMore ? tour.info : `${tour.info.substring(0, 100)}...`}
          <button onClick={() => setShowMore(!showMore)}>
            {showMore ? 'Show Less' : 'Read More'}
          </button>
        </p>
        <button onClick={() => removeTour(tour.id)}>Not Interested</button>
      </div>
    </div>)};
export default Gallery;
