import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategory = async (id: string): Promise<Category> => {
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

export default getCategory;

