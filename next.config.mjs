export default {
  reactStrictMode: false,
  env: {
    NEXT_PUBLIC_URL: "http://localhost:3000/",
    APIURL: "http://host.docker.internal:8181/api/"
  },
  images: {
    unoptimized: true,
  }
};
