import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (id: string): Promise<Product> => {
  const uniqueURL = `${URL}/${id}?timestamp=${new Date().getTime()}`;
  
  const res = await fetch(uniqueURL, {
    headers: {
      'Cache-Control': 'no-cache',
      'Pragma': 'no-cache',
      'Expires': '0'
    }
  });

  return res.json();
};

export default getProduct;

