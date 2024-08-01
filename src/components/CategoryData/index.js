// "use client";
// import React, { useEffect, useState } from "react";
// import { getData } from "../getData";
// import GetBlogData from "../GetBlogData";
// import Home from "@/app/page";

 



// export default function CategoryData( {categoryData} ) {
//   const [categoryDatas, setCategoryData] = useState(categoryData);



//   return (
//     <div>
//       <div className="w-[85%] xl:w-[65%] bg-slate-950 mx-auto mt-2 rounded-lg p-5 grid grid-cols-2 lg:grid-cols-6">
//         <button
//           className="p-3 bg-slate-800 text-white text-center rounded-xl mx-2 hover:bg-slate-950 :bg-white mb-2 mt-2"
//           onClick={() => getBlogAll()}
//         >
//           All
//         </button>
//         {categoryDatas &&
//           categoryDatas.api.map((item) => (
//             <button
//               key={item.id}
//               className="p-3 bg-slate-800 text-white text-center rounded-xl mx-2 hover:bg-slate-950 :bg-white mb-2 mt-2"
//               onClick={() => Home(item.id)}
//             >
//               {item.name}
//             </button>
//           ))}
//       </div>
//     </div>
//   );
// }
