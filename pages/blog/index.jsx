import { useState } from "react";
import Layout from "../../components/Layout.jsx";
import PostArticle from "../../components/PostArticle.jsx";
import InputSearch from "../../components/InputSearch";
import InputCheckbox from "../../components/InputCheckbox";
import PopularPosts from "../../components/PopularPosts";

import {
  getAllPosts,
  getAllCategories,
  getPopularPosts,
} from "../../lib/services";
function Blog({ posts, categories, popularPosts }) {
  const { articles, setArticles } = useState(posts);

  const handleSearch = async (data) => {
    console.log(data);
    // let result = await searchPosts(data);
    // console.log(result);
  };

  return (
    <Layout>
      <header className="blog-header">
        <div className="header-text-container">
          <h5 className="text-secondary">BLOG</h5>
          <h1 className="header-title">
            Compartimos <br /> cosas increibles
          </h1>
        </div>
      </header>

      <section className="container-fluid blog-content">
        <div className="row">
          <main className="col-12 col-md-8">
            {posts.length &&
              posts.map(
                ({
                  _id,
                  image,
                  title,
                  content,
                  created,
                  user_id: { avatar, name },
                }) => (
                  <PostArticle
                    key={_id}
                    id={_id}
                    image={image}
                    title={title}
                    content={content}
                    created={created}
                    avatar={avatar}
                    name={name}
                  />
                )
              )}
          </main>

          <aside className="col-12 col-md-4 aside-container">
            <div className="aside-search">
              <InputSearch
                type="text"
                placeholder="Buscar un artículo"
                callback={handleSearch}
              />
            </div>
            <br />
            <hr />

            <div className="aside-filter">
              <p className="font-weight-bold">Filtros</p>
              {categories.length &&
                categories.map(({ _id, name }, idx) => (
                  <InputCheckbox key={idx} id={_id} name={name} />
                ))}
            </div>
            <br />
            <hr />

            <div className="aside-popular-posts">
              <p className="font-weight-bold">Top 5 destacados</p>
              {popularPosts.length &&
                popularPosts.map(({ _id, title, created }, idx) => (
                  <PopularPosts
                    key={_id}
                    id={_id}
                    position={idx}
                    title={title}
                    created={created}
                  />
                ))}
            </div>
          </aside>
        </div>
      </section>
    </Layout>
  );
}

Blog.getInitialProps = async (ctx) => {
  let posts = await getAllPosts();
  let categories = await getAllCategories();
  let popularPosts = await getPopularPosts();

  posts = posts.success === true ? posts.data : {};
  categories = categories.success === true ? categories.data : {};
  popularPosts = popularPosts.success === true ? popularPosts.data : {};

  return { posts, categories, popularPosts };
};

export default Blog;
