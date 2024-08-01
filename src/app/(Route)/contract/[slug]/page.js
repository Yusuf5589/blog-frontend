import { getData } from "@/components/getData";
import React from "react";

  

 
export default async function Contract({ params }) {

  const data = await getData(process.env.APIURL + "contract/" + params.slug);
  console.log(data);
  return (
    <div>
      {/* <div id="globalLoader">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
          alt=""
        />
      </div> */}
      <h1>
        <div className="mx-auto p-5">
          <div className="w-[100%] flex justify-center font-bold text-6xl">
            {data && data.api.title}
          </div>

          <div className="xl:w-[60%] mx-auto flex mt-3 text-lg">
            {data && data.api.description}
          </div>
        </div>
      </h1>
    </div>
  );
}
