import React from "react";
import "../Entry.css"

export default function Entry({ entry }) {
    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <img 
                    className="main-image"
                    src={entry.img.src}
                    alt={entry.img.alt}
                />
            </div>
            <div className="info-container">
                <img 
                    className="marker"
                    src="/marker.png" 
                    alt="map marker icon"
                />
                <span className="country">{entry.country}</span>
                <a href={entry.googleMapsLink}>View on Google Maps</a>
                <h2 className="entry-title">{entry.title}</h2>
                <p className="trip-dates">{entry.dates}</p>
                <p className="entry-text">{entry.text}</p>
            </div>
        </article>
    )
}