import { Size } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

const getSizes = async (): Promise<Size[]> => {
  const uniqueURL = `${URL}?timestamp=${new Date().getTime()}`;
  
  const res = await fetch(uniqueURL, {
    headers: {
      'Cache-Control': 'no-cache',
      'Pragma': 'no-cache',
      'Expires': '0'
    }
  });

  return res.json();
};

export default getSizes;