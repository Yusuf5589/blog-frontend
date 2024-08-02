import GetBlogData from "@/components/GetBlogData";
import { getData } from "@/components/getData";
import Link from "next/link";



export async function getCategoryBlogF(id){
  return await getData("category/get/" + id);
}

export async function getBlogAllF(){
  return await getData("blog/get");
}

export default async function Home( props ) {

  const categoryData = await getData("category/get")
  const blogData = await getData("blog/get");
  // console.log("Pageden veri geliyor",  getSlugBlogData);
  console.log(blogData);


  
  return (
    <div>



        <GetBlogData categoryData={categoryData} getBlogData={blogData}/>

    </div>
  );
}