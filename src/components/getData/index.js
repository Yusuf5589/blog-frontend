import axios from "axios";
import React from "react";


    export const getData = async (url) => {
      const response = await fetch(url);
      const data = response.json();
      // if (response.data) {
      //   const loader = document.getElementById("globalLoader");
      //   if (loader){
      //     loader.remove();
      //   }
      // }
      return data;
    };
    


