import CategoryData from "@/components/CategoryData";
import GetBlogData from "@/components/GetBlogData";
import { getData } from "@/components/getData";
import Link from "next/link";



export async function getCategoryBlogF(id){
  return await getData(process.env.APIURL + "category/get/" + id);
}

export async function getBlogAllF(){
  return await getData("http://localhost:8181/api/blog/get");
}

export default async function Home( props ) {

  const categoryData = await getData(process.env.APIURL + "category/get")
  const blogData = await getData("http://localhost:8181/api/blog/get");
  // console.log("Pageden veri geliyor",  getSlugBlogData);
  console.log(blogData);


  
  return (
    <div>
      {/* <div id="globalLoader">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
          alt=""
        />
      </div> */}


        <GetBlogData categoryData={categoryData} getBlogData={blogData}/>

    </div>
  );
}