import { useRouter } from "next/router";
import { formatDate } from "../lib/functions";

export default function PopularPosts({ id, title, created, position }) {
  const router = useRouter();

  const positionParsed = (number) => {
    number++;

    return `0${number}`;
  };

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  const href = `/blog/${id}`;
  return (
    <div className="post-container">
      <div className="post-position">
        <a href={href} onClick={handleClick}>
          <h3 className="">{positionParsed(position)}</h3>
        </a>
      </div>
      <div className="post-content">
        <a href={href} onClick={handleClick}>
          <p className="post-title">{title}</p>
        </a>
        <p>
          <small>{formatDate(created)}</small>
        </p>
      </div>
    </div>
  );
}
