import React from "react";
import "../Entry.css"

export default function Entry({ entry }) {
    const handleImageError = (e) => {
        e.target.src = '/placeholder-travel.jpg';
        e.target.alt = 'Travel destination image not available';
    };

    const renderStars = (rating) => {
        return '⭐'.repeat(rating) + '☆'.repeat(5 - rating);
    };

    const getCountryFlag = (country) => {
        const flags = {
            'Egypt': '🇪🇬',
            'Turkey': '🇹🇷',
            'Italy': '🇮🇹'
        };
        return flags[country] || '🌍';
    };

    return (
        <article className="journal-entry" role="article">
            <div className="main-image-container">
                <img 
                    className="main-image"
                    src={entry.img.src}
                    alt={entry.img.alt}
                    onError={handleImageError}
                    loading="lazy"
                />
                <div className="image-overlay">
                    <span className="country-flag">{getCountryFlag(entry.country)}</span>
                </div>
            </div>
            <div className="info-container">
                <div className="location-header">
                    <div className="location-info">
                        <img 
                            className="marker"
                            src="/marker.png" 
                            alt="Location marker"
                        />
                        <span className="country" aria-label={`Country: ${entry.country}`}>
                            {entry.country}
                        </span>
                        <span className="location-detail">• {entry.location}</span>
                    </div>
                    <a 
                        href={entry.googleMapsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="maps-link"
                        aria-label={`View ${entry.title} on Google Maps`}
                    >
                        📍 View on Maps
                    </a>
                </div>
                
                <h2 className="entry-title">{entry.title}</h2>
                
                {entry.rating && (
                    <div className="rating" aria-label={`Rating: ${entry.rating} out of 5 stars`}>
                        {renderStars(entry.rating)}
                        <span className="rating-text">({entry.rating}/5)</span>
                    </div>
                )}
                
                <p className="trip-dates">
                    <span className="date-icon">📅</span>
                    <time dateTime={entry.dates}>{entry.dates}</time>
                </p>
                
                <p className="entry-text">{entry.text}</p>
                
                {entry.tags && (
                    <div className="tags">
                        {entry.tags.map((tag, index) => (
                            <span key={index} className="tag">{tag}</span>
                        ))}
                    </div>
                )}
            </div>
        </article>
    )
}