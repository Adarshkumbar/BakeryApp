import React, { useEffect } from 'react'
import axios from 'axios';

const Card = () => {
    useEffect(() => {
        axios.get('http://localhost:8080/api/')
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log("Error fetching data : ", error)
            });
    }, []);

    return (
        <div>Card</div>
    );
}

export default Card;
