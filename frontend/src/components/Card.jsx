import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Card = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/cookies');
                setData(response.data);
                console.log(response.data);
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            data
        </div>
    );
};

export default Card;
