import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState([])
    useEffect(() => {
        // fetch(`http://localhost:5000/services/${serviceId}`)
        //     .then(res => res.json())
        axios(`/services/${serviceId}`)
            .then(res => setService(res.data));
    }, [])
    return (
        <div>
            <h2>this is booking: {serviceId}</h2>
        </div>
    );
};

export default Booking;