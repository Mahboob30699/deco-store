import axios from "axios";

const productionURL = "https://strapi-store-server.onrender.com/api";

export const customFetch = axios.create({
  baseURL: productionURL,
});

// export default customFetch;

export const formatPrice = (price) => {
  const RupeeAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "PKR",
  }).format(price);
  return RupeeAmount;
};

export const generateAmountOptions = (number) => {
  return Array.from({ length:number }, (_, index) => {
    const amount = index + 1
    return (
      <option key={amount} value={amount} >
        {amount}
      </option>
    );
  });
};

