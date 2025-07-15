/*
Real-life structured examples:
Flatten deeply nested objects (API response handling).
Merge configurations immutably.
Clean and transform user input data.
Chunk, reverse, or sort strings/arrays cleanly.
Visual console + small output view for testing results interactively.
*/

import { useEffect } from "react";

const StringObjectPractice = () => {
  // Case1: Flatten Object. color = Green

  const nestedObject = {
    user: {
      name: "Navin",
      age: 33,
      address: {
        city: "Ratlam",
        pincode: 457001,
      },
      preference: {
        notification: {
          email: true,
          sms: true,
        },
      },
    },
  };

  const flatten = (obj, prefix = "", res = {}) => {
    for(let key in obj){
        const newKey =  prefix ? `${prefix}.${key}` : key;
        if(typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])){
            flatten(obj[key], newKey, res);
        } else {
            res[newKey] = obj[key];
        }
    }
    return res;
  };

  const flattened = flatten(nestedObject);
  console.table("Flatend Data==>", flattened)

  return <></>;
};
export default StringObjectPractice;
