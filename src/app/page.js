import GetBlogData from "@/components/getBlogData";
import { getData } from "@/components/getData";

export async function getCategoryBlogF(slug){
  return await getData("category/get/" + slug);
}

export async function getBlogAllF(){
  return await getData("blog/get");
}

export default async function Home() {
  const categoryData = await getData("category/get");
  // const blogData = await getBlogAllF(); // Blog verilerini al

  return (
    <div>
      <GetBlogData categoryData={categoryData}/>
    </div>
  );
}
