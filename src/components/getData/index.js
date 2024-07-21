import React, { useEffect, useState } from 'react'
import axios from "axios";



    export const getData = async (url) => {
      const response = await axios.get(url);
      if (response.data) {
        const loader = document.getElementById("globalLoader");
        if (loader){
          loader.remove();
        }
      }
      return response;
    };


    export const getCategory = async (url) => {
      const response = await axios.get(url);
      if (response.data) {
        const loader = document.getElementById("globalLoader");
        if (loader){
          loader.remove();
        }
      }
      return response;
    };
    


