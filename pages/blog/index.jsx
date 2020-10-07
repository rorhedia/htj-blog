import { useState, useEffect } from "react";
import Layout from "../../components/Layout.jsx";
import PostArticle from "../../components/PostArticle.jsx";
import InputSearch from "../../components/InputSearch";

import { getAllPosts } from "../../lib/services";
function Blog({ res }) {
  const { data: posts } = res;
  const { articles, setArticles } = useState(posts);

  const handleSearch = (data) => {
    console.log(data);
  };

  useEffect(() => {
    console.log("object");
  }, []);

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
            <div classname="aside-search">
              <InputSearch
                type="text"
                placeholder="Buscar un artículo"
                callback={handleSearch}
              />
            </div>
          </aside>
        </div>
      </section>
    </Layout>
  );
}

Blog.getInitialProps = async (ctx) => {
  const res = await getAllPosts();

  return { res };
};

export default Blog;
