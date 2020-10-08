const URL_BASE     = "https://hackthejob-blog.herokuapp.com/";
const URL_BASE_DEV = "http://localhost:8080/";

/**
 * POSTS
 */
const getAllPosts = async () => {
  const response = await fetch(`${URL_BASE}posts`, {
    method: "GET",
  });
  const data = await response.json();

  return data;
};

const getPostById = async (id) => {
  const response = await fetch(`${URL_BASE}posts/${id}`, {
    method: "GET",
  });
  const data = await response.json();

  return data;
};

const getPopularPosts = async () => {
  const response = await fetch(`${URL_BASE}posts/populars`, {
    method: "GET",
  });
  const data = await response.json();

  return data;
};

const searchPosts = async (word) => {
  let request = JSON.stringify({ needle: word });

  const response = await fetch(`${URL_BASE}posts/search`, {
    method : "GET",
    body   : request,
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
  });

  const data = await response.json();

  return data;
};

/**
 * CATEGORIES
 */
const getAllCategories = async () => {
  const response = await fetch(`${URL_BASE}categories`, {
    method: "GET",
  });
  const data = await response.json();

  return data;
};

/**
 * COUNTRIES
 */
const getCountries = async () => {
  const response = await fetch(`${URL_BASE}countries`, {
    method: "GET",
  });
  const data = await response.json();

  return data;
};

/**
 * COMMENTS
 */
const addComment = async (request) => {
  const response = await fetch(`${URL_BASE}comments`, {
    method : "POST",
    body   : JSON.stringify(request),
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
  });
  const data = await response.json();

  return data;
};

export {
  getAllPosts,
  searchPosts,
  getAllCategories,
  getPopularPosts,
  getCountries,
  addComment,
  getPostById,
};
