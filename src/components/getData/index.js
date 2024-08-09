import axios from "axios";
import React from "react";


    export const getData = async (url) => {
      console.log(url);
      
      const response = await axios.get(process.env.NEXT_PUBLIC_APIURL + url);
      console.log(response);
      
      return response.data;
    };
    


