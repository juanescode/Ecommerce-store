import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (id: string): Promise<Billboard> => {
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

export default getBillboard;

// import { Billboard } from "@/types";

// const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

// const getBillboard= async (id: string): Promise<Billboard> => {
//     const res = await fetch(`${URL}/${id}`);

//   return res.json();
// };

// export default getBillboard;