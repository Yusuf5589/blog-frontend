"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

function Page() {
  const [data, setData] = useState();

  const getPrivacy = async () => {
    const response = await axios.get("http://localhost:8181/api/privacy/get");
    console.log(response);
    setData(response.data);
    if (response.data) {
      const loader = document.getElementById("globalLoader");
      if (loader) {
        loader.remove();
      }
    }
  };

  useEffect(() => {
    getPrivacy();
  }, []);

  return (
    <div>
      <div id="globalLoader">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
          alt=""
        />
      </div>
      <h1>
        <div className="mx-auto p-5">
          <div className="w-[100%] flex justify-center font-bold text-6xl">
            {data && data.api[0].title}
          </div>

          <div className="xl:w-[60%] mx-auto flex mt-3 text-lg">
            {data && data.api[0].description}
          </div>
        </div>
      </h1>
    </div>
  );
}

export default Page;
