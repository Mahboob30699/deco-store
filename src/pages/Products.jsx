import { Filters, PaginationContainer, ProductContainer } from "../component";
import { customFetch } from "../utils";

const url = "./products";

export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  const response = await customFetch(url,{ params });
  const products = response.data.data;
  const meta = response.data.meta;
  console.log(response);
  return { products, meta , params};
};

const Products = () => {
  return (
    <>
      <Filters />
      <ProductContainer />
      <PaginationContainer />
    </>
  );
};

export default Products;
