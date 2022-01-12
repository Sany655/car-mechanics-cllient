import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ManageSercvise = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        axios('/services')
        // fetch(`http://localhost:5000/services`)
        //     .then(res => res.json())
            .then(res => setServices(res.data));
    }, [])
    function handleDelete(id) {
        axios(`/services/${id}`,{
            method:'DELETE'
        })
        // fetch(`http://localhost:5000/services/${id}`,{
        //     method:'DELETE'
        // })
            // .then(res => res.json())
            .then(res => {
                if (res.data.deletedCount>0) {
                    setServices(services.filter(service=>service._id!=id))
                }
            });
    }
    return (
        <div>
            <h2>Manage Sercvise</h2>
            {
                services.map(service => (
                    <div key={service._id}>
                        <h3>{service.name}</h3>
                        <button onClick={()=>handleDelete(service._id)} className="btn btn-danger">Delete</button>
                    </div>
                ))
            }
        </div>
    )
}

export default ManageSercvise
