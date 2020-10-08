import { useRouter } from "next/router";
import { formatName, formatDate, limitText } from "../lib/functions";

export default function PostArticle({
  id,
  image,
  title,
  content,
  created,
  avatar,
  name,
}) {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  const href = `/blog/${id}`;

  return (
    <article className="card-article">
      <a href={href} onClick={handleClick}>
        <img className="article-image" src={image} alt="img-post" />
      </a>
      <a href={href} onClick={handleClick}>
        <h3 className="mt-3">{title}</h3>
        <p className="text-muted">{limitText(content)}</p>
        <div className="mb-4 card-author">
          <img
            className=""
            src="https://dinkbit.com/assets/img/dinkbit/sofi.png"
            alt="avatar"
          />
          <p>
            <small className="text-secondary">{formatName(name)}</small>
            <br />
            <small className="text-muted">{formatDate(created)}</small>
          </p>
        </div>
      </a>
      <hr />
    </article>
  );
}

// html editor next js
