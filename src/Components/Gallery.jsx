//task 2
import React, { useState, useEffect } from "react";
import "../style/Galery.css";

const Gallery = () => { // display data
    const [tours, settours] = useState([]); //store data
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 

    useEffect(() => {
        const fetchTours = async () => {//fetch data
            try {
                const response = await fetch("https://www.course-api.com/react-tours-project"); // call API 
                if (!response.ok) {
                    throw new Error('Error: fetch failed'); //display error message if fetch fails
                }
                const data = await response.json();
                // data fetched into state
                settours(data); 
                //loading to false after fetching data
                setLoading(false); 
            } catch (error) {
                //error message if fetch fails
                setError(error.message); 
                //loading to false to stop
                setLoading(false); 
            }
    }
        fetchTours();//call fetch function 
    },[]); //empty array so it run
    const removeTour = (id) => {
        settours(tours.filter((tour) => tour.id !== id)); //remove tour 
    };
    if (loading) return <p>Loading...</p> // render loading
    if (error) return <p>Error: {error}</p> // render error
    return (
        <div className="gallery-container">
            {tours.map((tour) => (
                <div key={tour.id} className="tour-container">
                    <img src={tour.image} alt={tour.name} className="tour-img" />
                    <h2>{tour.name}</h2>
                    <p>${tour.price}</p>
                    <p>{tour.description}</p>
                    <button onClick={() => removeTour(tour.id)}>Not Interessed</button>
                </div>
            ))}
        </div>
    ); 
};
export default Gallery; 