import { useState, useEffect } from 'react';

export default () => {
    const [lat, setLat] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        window.navigator.geolocation.getCurrentPosition(
            position => setLat(position.coords.latitude),
            err => setErrorMessage(err.message)
        );
    }, []);
    // VVV !!! COMMUNITY CONVENTION TO RETURN ARRAY WITH HOOKS; MAY BENEFIT TO RETURN AS AN OBJECT !!!
    return [ lat, errorMessage ];
}