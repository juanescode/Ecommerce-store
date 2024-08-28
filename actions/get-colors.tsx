import { Color } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

const getColors = async (): Promise<Color[]> => {
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

export default getColors;