import React from "react";
import "../Entry.css"

export default function Entry({ img, title, country, googleMapsLink, dates, text }) {
    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <img 
                    className="main-image"
                    src={img.src}
                    alt="mount fuji" 
                />
            </div>
            <div className="info-container">
                <img 
                    className="marker"
                    src="/marker.png" 
                    alt="map marker icon"
                />
                <span className="country">{country}</span>
                <a href={googleMapsLink}>View on Google Maps</a>
                <h2 className="entry-title">{title}</h2>
                <p className="trip-dates">{dates}</p>
                <p className="entry-text">{text}</p>
            </div>
            
        </article>
    )
}