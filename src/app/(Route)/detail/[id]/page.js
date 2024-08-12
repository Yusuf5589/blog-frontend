import axios from "axios";
import Image from "next/image";
import CommentSend from "@/components/commentSend/index"; // Yorum g ö nderme bile ş eni
import { getData } from "@/components/getData";



export const metadata = {
  title: "Detail Page",
  description: "Buras ı bloglar ı n detail sayfas ı .",
  authors: [{name: "Yusuf Kapkiner"}]
};

async function Page({ params }) {
  const blogData = await getData(`blog/get/${params.id}`);
  const categoryData = blogData ? await getData(`category/get/first/${blogData.api.category_id}`) : null;
  const commentData = await getData(`comment/get/${params.id}`);

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

            {/* Comment Form (Client-Side Component) */}
            <CommentSend blogData={blogData} />

            {/* Comments List */}
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">All Comments</h3>
              <div className="space-y-4">
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
