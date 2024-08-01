// "use client";
// import { getData } from "@/components/getData";
// import axios from "axios";
// import { useParams } from "next/navigation";
// import React, { useEffect, useState } from "react";

// function Page() {
//   const [blogData, setBlogData] = useState();
//   const [categoryData, setCategoryData] = useState();
//   const [commentData, setCommentData] = useState();
//   const [email, setEmail] = useState("");
//   const [comment, setComment] = useState("");
//   const [emailError, setEmailError] = useState("");
//   const [commentError, setCommentError] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");
//   const params = useParams();

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setEmailError("");
//     setCommentError("");
//     setSuccessMessage("");

//     try {
//       const response = await axios.post(process.env.APIURL + "comment/send", {
//         comments_mail: email,
//         comments: comment,
//         blogslug: blogData.api.slug,
//       });
//       setEmail("");
//       setComment("");
//       setSuccessMessage("Comment submitted successfully!");

//       // Hide the success message after 3 seconds
//       setTimeout(() => {
//         setSuccessMessage("");
//       }, 3000);
//     } catch (error) {
//       if (error.response && error.response.data && error.response.data.errors) {
//         const errors = error.response.data.errors;
//         if (errors.comments_mail) {
//           setEmailError(errors.comments_mail[0]);
//         }
//         if (errors.comments) {
//           setCommentError(errors.comments[0]);
//         }
//       } else {
//         console.error("Error submitting comment:", error);
//       }
//     }
//   };

//   useEffect(() => {
//     getData(process.env.APIURL + "blog/get/" + params.id).then((res) => {
//       setBlogData(res.data);
//       // axios.get(process.env.APIURL + "category/view/" + res.data.api.id);
//       getData(
//         process.env.APIURL + "category/get/first/" + res.data.api.category_id
//       ).then((res) => {
//         setCategoryData("");
//         setCategoryData(res.data);
//       });
//     });

//     getData(process.env.APIURL + "comment/get/" + params.id).then((res) => {
//       setCommentData(res.data);
//       console.log(res.data);
//       console.log(params.id);
//     });
//   }, [params.id]);

//   return (
//     <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//       <div id="globalLoader">
//         <img
//           src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
//           alt="Loading"
//         />
//       </div>
//       {blogData && blogData.api && (
//         <article className="bg-white rounded-lg shadow-lg overflow-hidden">
//           {/* Blog Header */}
//           <div className="relative">
//             <img
//               className="w-full object-cover h-72"
//               src={blogData.api.image_url}
//               alt="Blog Header Image"
//               width={1200}
//               height={800}
//               layout="responsive"
//             />
//             <div className="absolute top-0 left-0 p-4 bg-gradient-to-t from-black via-transparent to-transparent w-full h-full flex flex-col justify-end">
//               <h1 className="text-4xl font-bold text-white mb-2">
//                 {blogData.api.title}
//               </h1>
//               <p className="text-lg text-gray-200">
//                 {categoryData && categoryData.api.name} |{" "}
//                 {blogData.api.beginning_date} | {blogData.api.view_count}
//               </p>
//             </div>
//           </div>

//           {/* Blog Content */}
//           <div className="px-6 py-8">
//             {/* Blog Tags */}
//             <div className="mb-4">
//               {blogData.api.tags.map((tag, index) => (
//                 <span
//                   key={index}
//                   className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold mr-2"
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div>

//             {/* Blog Description */}
//             <div className="mb-6">
//               <p className="text-lg text-gray-700">
//                 {blogData.api.description}
//               </p>
//             </div>

//             {/* Comment Form */}
//             <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
//               <h2 className="text-2xl font-bold mb-4">Leave a Comment</h2>
//               <form className="space-y-4" onSubmit={handleSubmit}>
//                 {successMessage && (
//                   <div
//                     className="p-4 mb-4 text-sm text-green-800 bg-green-200 rounded-lg"
//                     role="alert"
//                   >
//                     {successMessage}
//                   </div>
//                 )}
//                 <div>
//                   <input
//                     type="text"
//                     name="email"
//                     className={`w-full px-4 py-3 border ${
//                       emailError ? "border-red-500" : "border-gray-300"
//                     } rounded-lg focus:ring-blue-500 focus:outline-none`}
//                     placeholder="Your email"
//                     value={email}
//                     onChange={(e) => {
//                       setEmail(e.target.value);
//                       setEmailError("");
//                     }}
//                   />
//                   {emailError && (
//                     <p className="text-red-500 text-sm mt-1">{emailError}</p>
//                   )}
//                 </div>
//                 <div>
//                   <textarea
//                     name="comment"
//                     className={`w-full px-4 py-3 border ${
//                       commentError ? "border-red-500" : "border-gray-300"
//                     } rounded-lg focus:ring-blue-500 focus:outline-none`}
//                     placeholder="Write your comment"
//                     rows="5"
//                     value={comment}
//                     onChange={(e) => {
//                       setComment(e.target.value);
//                       setCommentError("");
//                     }}
//                   />
//                   {commentError && (
//                     <p className="text-red-500 text-sm mt-1">{commentError}</p>
//                   )}
//                 </div>
//                 <button
//                   type="submit"
//                   className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
//                 >
//                   Submit Comment
//                 </button>
//               </form>
//             </div>

//             {/* Comments List */}
//             <div className="bg-gray-100 p-6 rounded-lg">
//               <h3 className="text-2xl font-bold mb-4">All Comments</h3>
//               <div className="space-y-4">
//                 {/* Comment 1 */}
//                 {commentData &&
//                   commentData.api.map((item) => (
//                     <div
//                       key={item.id}
//                       className="flex flex-col md:flex-row items-start bg-white p-4 border border-gray-200 rounded-lg"
//                     >
//                       <div className="w-12 h-12 mb-4 md:mb-0 md:mr-4">
//                         <img
//                           src="/Image/user.jpg"
//                           alt="Commenter Avatar"
//                           className="w-full h-full object-cover rounded-full"
//                           width={48}
//                           height={48}
//                         />
//                       </div>
//                       <div className="flex-1">
//                         <h4 className="text-sm font-bold text-gray-700">
//                           {item.comments_mail}
//                         </h4>
//                         <p className="mt-2 text-gray-700">{item.comments}</p>
//                       </div>
//                     </div>
//                   ))}
//               </div>
//             </div>
//           </div>
//         </article>
//       )}
//     </div>
//   );
// }

// export default Page;
