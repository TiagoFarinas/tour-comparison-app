//Task 2 - Gallery.jsx (Tour List Component)
import React, { useState } from 'react';

function Gallery({ tours, removeTour }) {
  const [toggledTours, setToggledTours] = useState({});

  const toggleDescription = (id) => {
    setToggledTours({
      ...toggledTours,
      [id]: !toggledTours[id],
    });
  };

  return (
    <div className="gallery">
      {tours.map((tour) => (
        <div className="tour" key={tour.id}>
          <img src={tour.image} alt={tour.name} />
          <h3>{tour.name}</h3>
          <p>{tour.price}</p>
          <p>
            {toggledTours[tour.id]
              ? tour.description
              : `${tour.description.substring(0, 100)}...`}
          </p>
          <button onClick={() => removeTour(tour.id)}>Not Interested</button>
          <button onClick={() => toggleDescription(tour.id)}>
            {toggledTours[tour.id] ? 'Show Less' : 'Read More'}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Gallery;
