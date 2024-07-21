"use client";
import { getData } from "@/components/getData";
import { getCategory } from "@/components/getData";
import React, { useEffect, useState } from "react";

function Page() {
  const [categoryData, setCategoryData] = useState();
  const [blogData, setBlogData] = useState();
  const [categoryDataSlug, setCategoryDataSlug] = useState();

  useEffect(() => {
    getData(process.env.APIURL + "category/get").then((res) =>
      setCategoryData(res.data)
    );
    getData(process.env.APIURL + "blog/get").then((res) =>
      setBlogData(res.data)
    );
  }, []);

  const getCategoryF = (slug) => {
    getCategory(process.env.APIURL + "category/get/" + slug).then((res) => 
      setCategoryDataSlug(res.data)
    );
  };

  return (
    <div>
      <div id="globalLoader">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
          alt=""
        />
      </div>
      <div className="w-[85%] xl:w-[65%] bg-slate-950 mx-auto mt-2 rounded-lg p-5 grid grid-cols-2 lg:grid-cols-6">
        {categoryData &&
          categoryData.api &&
          categoryData.api.map((item) => (
            <button
              key={item.id}
              className="p-3 bg-slate-800 text-white text-center rounded-xl mx-2 hover:bg-slate-950 :bg-white mb-2 mt-2"
              onClick={() => getCategoryF(item.id)}
            >
              {item.name}
            </button>
          ))}
      </div>

      <div className="mt-6 font-bold text-4xl container text-center">Blogs</div>

      <div className="w-[70%] container grid grid-cols-2 lg:grid-cols-4 mt-4">
        {categoryDataSlug && categoryDataSlug.api
          ? categoryDataSlug &&
            categoryDataSlug.api &&
            categoryDataSlug.api.map((item) => (
              <div
                key={item.id}
                class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-3"
              >
                <a href="#">
                  <img class="rounded-t-lg " src={item.image_url} alt="" />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {item.title}
                    </h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400  w-full max-w-xs line-clamp-3">
                    {item.description}
                  </p>
                  <a
                    href="#"
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Details
                    <svg
                      class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))
          : blogData &&
            blogData.api &&
            blogData.api.map((item) => (
              <div
                key={item.id}
                class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-3"
              >
                <a href="#">
                  <img class="rounded-t-lg " src={item.image_url} alt="" />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {item.title}
                    </h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400  w-full max-w-xs line-clamp-3">
                    {item.description}
                  </p>
                  <a
                    href="#"
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Details
                    <svg
                      class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}

export default Page;
