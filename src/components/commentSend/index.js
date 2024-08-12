"use client";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function CommentSend({ blogData }) {
  const [successMessage, setSuccessMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleEntrySubmit = async (data) => {
    setSuccessMessage("");

    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_APIURL}comment/send`, {
        comments: data.comment,
        comments_mail: data.email,
        blog_slug: blogData.api.slug,
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

  return (
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
            type="email"
            name="email"
            className={`w-full px-4 py-3 border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded-lg focus:ring-blue-500 focus:outline-none`}
            placeholder="Your email"
            {...register("email", {
              required: "Email is required",
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
  );
}

