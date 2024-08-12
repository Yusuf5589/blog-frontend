"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getBlogAllF, getCategoryBlogF } from "@/app/page";
import Image from "next/image";

export default function GetBlogData({ categoryData, getBlogData, params }) {
  const [blogData, setBlogData] = useState(getBlogData);
  const [categoryDatas, setCategoryData] = useState(categoryData);

  // URL parametrelerinden kategori slug' ı al
  const getCategoryFromURL = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('category');
  };

  useEffect(() => {
    const fetchData = async () => {
      const slug = getCategoryFromURL();
      if (slug) {
        await getCategoryBlog(slug);
      } else {
        await getBlogAll();
      }
    };

    fetchData();
  }, []);

  const getBlogAll = async () => {
    setBlogData(await getBlogAllF());
  };

  const getCategoryBlog = async (slug) => {
    window.history.pushState(
      null,
      "",
      `?category=${slug}`
    );
    setBlogData(await getCategoryBlogF(slug));
  };

  return (
    <div>
      <div className="w-[85%] xl:w-[65%] bg-slate-950 mx-auto mt-2 rounded-lg p-5 grid grid-cols-2 lg:grid-cols-6">
        <button
          className="p-3 bg-slate-800 text-white text-center rounded-xl mx-2 hover:bg-slate-950 :bg-white mb-2 mt-2"
          onClick={() => {
            window.history.pushState(null, "", "/");
            getBlogAll();
          }}
        >
          All
        </button>
        {categoryDatas &&
          categoryDatas.api.map((item) => (
            <button
              key={item.id}
              className="p-3 bg-slate-800 text-white text-center rounded-xl mx-2 hover:bg-slate-950 :bg-white mb-2 mt-2"
              onClick={() => getCategoryBlog(item.slug)}
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
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-3 mt-2"
            >
              <Link href={`${process.env.NEXT_PUBLIC_URL}detail/${item.slug}`}>
                <Image width={500} height={500} className="rounded-t-lg" src={item.image_url} alt={item.title} />
              </Link>
              <div className="p-5">
                <Link
                  href={`${process.env.NEXT_PUBLIC_URL}detail/${item.slug}`}
                >
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.title}
                  </h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400  w-full max-w-xs line-clamp-3">
                  {item.description}
                </p>
                <Link
                  href={`${process.env.NEXT_PUBLIC_URL}detail/${item.slug}`}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Details
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
