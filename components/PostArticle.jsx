import { useRouter } from "next/router";

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

  const limitText = (text) => {
    let textArr = text.split(" ");
    textArr = textArr.filter((word, idx) => idx <= 15);

    return textArr.join(" ") + "...";
  };

  const formatDate = (date) => {
    let dateArr = new Date(date);
    dateArr = dateArr.toString().split(" ");

    return `${dateArr[1]} ${dateArr[2]}, ${dateArr[3]}`;
  };

  const formatName = (name) => {
    let nameArr = name.split(" ");

    return nameArr[0] + " " + nameArr[1].charAt(0).toUpperCase() + ".";
  };

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
