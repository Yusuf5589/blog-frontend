import { getData } from "@/components/getData";
import React from "react";

  
export const metadata = {
  title: "Contract Page",
  description: "Buras ı s ö zle ş me sayfam.",
  authors: [{name: "Yusuf Kapkiner"}]
};
 
export default async function Contract({ params }) {

  const data = await getData("contract/" + params.slug);
  console.log(data);
  return (
    <div>
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
