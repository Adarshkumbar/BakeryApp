import axios from 'axios';

 const fetchData = async () => {
  try {
    const [inventoryResponse, cookiesResponse] = await Promise.all([
      axios.get('http://localhost:8080/api/ingredients'),
      axios.get('http://localhost:8080/api/cookies')
      
    ]);
  
    const inventory = inventoryResponse.data;
    const cookies = cookiesResponse.data;

    const bakeryData = [ inventory , cookies]
    return bakeryData;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [ [], [] ];
  }
  
};
export default fetchData ;
