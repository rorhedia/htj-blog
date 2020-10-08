export default function Bullet({
  urlImg = "",
  email = "",
  children,
}) {
  let mailto = `mailto: ${email}`;
  return (
    <>
      <div className="bullet-container">
        {urlImg && <img src={urlImg} alt="bullet" />}
        {email ? (
          <a className="text-muted" href={mailto}>
            {children}
          </a>
        ) : (
          <p className="text-muted">{children}</p>
        )}
      </div>
    </>
  );
}
