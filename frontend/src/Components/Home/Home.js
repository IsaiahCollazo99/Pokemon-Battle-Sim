import React from 'react';
import locations from '../../util/locations';
import LocationCard from './LocationCard';

const Home = () => {
    return (
        <main className="homeContainer">
            <section className="locations">
                {locations.map(location => {
                    return (
                        <LocationCard 
                            location={location} 
                            key={location.name}
                        />
                    )
                })}
            </section>
        </main>
    )
}

export default Home;