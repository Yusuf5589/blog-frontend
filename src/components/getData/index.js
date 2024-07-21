import React, { useEffect, useState } from 'react'
import axios from "axios";



    export const getData = async (url) => {
      const response = await axios.get(url);
      console.log(response);
      if (response.data) {
        const loader = document.getElementById("globalLoader");
        if (loader){
          loader.remove();
        }
      }
      return response;
    };


    export const getCategory = async (url) => {
      console.log(url);
      const response = await axios.get(url);
      console.log(response);
      if (response.data) {
        const loader = document.getElementById("globalLoader");
        if (loader){
          loader.remove();
        }
      }
      return response;
    };
    


