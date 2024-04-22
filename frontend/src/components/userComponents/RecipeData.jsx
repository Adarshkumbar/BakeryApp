
import React, { useEffect, useState } from 'react';
import RecipeCard from './RecipeCard';
import fetchData from '../../data';
const RecipeData = () => {
    const [data, setData] = useState([]);
    const [inventory , setInventory] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetchData();
                setData(response[1].data);
                setInventory(response[0]);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        })();
    }, []);


    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <>
        {console.log(data[1])}
         { data &&  <RecipeCard recipes={data} inventory = {inventory}/>}
        </>
       
    )
};

export default RecipeData;
