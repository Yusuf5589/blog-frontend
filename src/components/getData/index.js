import axios from "axios";
import React from "react";


    export const getData = async (url) => {
      console.log(url);
      
      const response = await axios.get(process.env.APIURL + url);
      return response.data;
    };
    


