import axios from 'axios';

const productionURL = 'https://strapi-store-server.onrender.com/api';

const customFetch = axios.create({
    baseURL: productionURL,
});

export default customFetch;

export const formatPrice = (price) => {
    const RupeeAmount = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'PKR',
    }).format((price));
    return RupeeAmount;
  };

