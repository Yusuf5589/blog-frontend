"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getData } from "../getData";
import { getBlogAllF, getCategoryBlogF } from "@/app/page";

export default function GetBlogData({ categoryData, getBlogData }) {
  const [blogData, setBlogData] = useState(getBlogData);

  const [categoryDatas, setCategoryData] = useState(categoryData);

  const getBlogAll = async () => {
      setBlogData(await getBlogAllF())
  };


  const getCategoryBlog = async (id) => {
    setBlogData(await getCategoryBlogF(id));
  };

  return (
    <div>
      <div className="w-[85%] xl:w-[65%] bg-slate-950 mx-auto mt-2 rounded-lg p-5 grid grid-cols-2 lg:grid-cols-6">
        <button
          className="p-3 bg-slate-800 text-white text-center rounded-xl mx-2 hover:bg-slate-950 :bg-white mb-2 mt-2"
          onClick={() => getBlogAll()}
        >
          All
        </button>
        {categoryDatas &&
          categoryDatas.api.map((item) => (
            <button
              key={item.id}
              className="p-3 bg-slate-800 text-white text-center rounded-xl mx-2 hover:bg-slate-950 :bg-white mb-2 mt-2"
              onClick={() => getCategoryBlog(item.id)}
            >
              {item.name}
            </button>
          ))}
      </div>
      
      <div className="mt-6 font-bold text-4xl container text-center">Blogs</div>

      <div className="w-[70%] container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-4">
        {blogData &&
          blogData.api.map((item) => (
            <div
              key={item.id}
              class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-3 mt-2"
            >
              <Link href={`${process.env.NEXT_PUBLIC_URL}detail/${item.slug}`}>
                <img class="rounded-t-lg " src={item.image_url} alt="" />
              </Link>
              <div class="p-5">
                <Link
                  href={`${process.env.NEXT_PUBLIC_URL}detail/${item.slug}`}
                >
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.title}
                  </h5>
                </Link>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400  w-full max-w-xs line-clamp-3">
                  {item.description}
                </p>
                <Link
                  href={`${process.env.NEXT_PUBLIC_URL}detail/${item.slug}`}
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
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
