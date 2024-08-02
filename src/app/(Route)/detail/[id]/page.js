"use client";
import { getData } from "@/components/getData";
import axios from "axios";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

function Page() {
  const [blogData, setBlogData] = useState();
  const [categoryData, setCategoryData] = useState();
  const [commentData, setCommentData] = useState();
  const [successMessage, setSuccessMessage] = useState("");
  const params = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleEntrySubmit = async (data) => {
    setSuccessMessage("");

    try {
      const response = await axios.post(process.env.APIURL + "comment/send", {
        comments: data.comment,
        comments_mail: data.email,
        blogslug: blogData.api.slug,
      });
      reset();
      setSuccessMessage("Comment submitted successfully!");

      // Hide the success message after 3 seconds
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  };

  useEffect(() => {
    getData("blog/get/" + params.id).then((res) => {
      setBlogData(res);
      getData("category/get/first/" + res.api.category_id).then((res) => {
        setCategoryData(res);
      });
    });

    getData("comment/get/" + params.id).then((res) => {
      setCommentData(res);
    });
  }, [params.id]);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {blogData && blogData.api && (
        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Blog Header */}
          <div className="relative">
            <Image
              className="w-full object-cover h-72"
              src={blogData.api.image_url}
              alt="Blog Header Image"
              width={1200}
              height={800}
              layout="responsive"
            />
            <div className="absolute top-0 left-0 p-4 bg-gradient-to-t from-black via-transparent to-transparent w-full h-full flex flex-col justify-end">
              <h1 className="text-4xl font-bold text-white mb-2">
                {blogData.api.title}
              </h1>
              <p className="text-lg text-gray-200">
                {categoryData && categoryData.api.name} |{" "}
                {blogData.api.beginning_date} | {blogData.api.view_count}
              </p>
            </div>
          </div>

          {/* Blog Content */}
          <div className="px-6 py-8">
            {/* Blog Tags */}
            <div className="mb-4">
              {blogData.api.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold mr-2"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Blog Description */}
            <div className="mb-6">
              <p className="text-lg text-gray-700">
                {blogData.api.description}
              </p>
            </div>

            {/* Comment Form */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-4">Leave a Comment</h2>
              <form className="space-y-4" onSubmit={handleSubmit(handleEntrySubmit)}>
                {successMessage && (
                  <div
                    className="p-4 mb-4 text-sm text-green-800 bg-green-200 rounded-lg"
                    role="alert"
                  >
                    {successMessage}
                  </div>
                )}
                <div>
                  <input
                    type="text"
                    name="email"
                    className={`w-full px-4 py-3 border ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-blue-500 focus:outline-none`}
                    placeholder="Your email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value:
                          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: "Please enter a valid email",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <textarea
                    name="comment"
                    className={`w-full px-4 py-3 border ${
                      errors.comment ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-blue-500 focus:outline-none`}
                    placeholder="Write your comment"
                    rows="5"
                    {...register("comment", { required: "Comment is required" })}
                  />
                  {errors.comment && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.comment.message}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  Submit Comment
                </button>
              </form>
            </div>

            {/* Comments List */}
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">All Comments</h3>
              <div className="space-y-4">
                {/* Comment 1 */}
                {commentData &&
                  commentData.api.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col md:flex-row items-start bg-white p-4 border border-gray-200 rounded-lg"
                    >
                      <div className="w-12 h-12 mb-4 md:mb-0 md:mr-4">
                        <Image
                          src="/Image/user.jpg"
                          alt="Commenter Avatar"
                          className="w-full h-full object-cover rounded-full"
                          width={48}
                          height={48}
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-bold text-gray-700">
                          {item.comments_mail}
                        </h4>
                        <p className="mt-2 text-gray-700">{item.comments}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </article>
      )}
    </div>
  );
}

export default Page;
