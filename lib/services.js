const URL_BASE = "https://hackthejob-blog.herokuapp.com/";
const URL_BASE_DEV = "http://localhost:3000/";

const getAllPosts = async () => {
  const response = await fetch(`${URL_BASE}posts`, {
    method: "GET",
  });
  const data = await response.json();

  return data;
};

export { getAllPosts };
