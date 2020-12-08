import React from 'react';

const LocationCard = ({ location }) => {
    return (
        <article className="locationCard">
            {location.name}
        </article>
    )
}

export default LocationCard