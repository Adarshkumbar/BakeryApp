import React, { useEffect, useState } from 'react';
import axios from 'axios';
import InventoryCard from './InventoryCard';

const InventoryData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/ingredients');
            setData(response.data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleUpdate = async (id) => {
        fetchData()
    };

    const handleDelete = async (id) => {

        fetchData()
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return <InventoryCard ingredients={data} onDelete={handleDelete} onUpdate={handleUpdate} />;
};

export default InventoryData;
