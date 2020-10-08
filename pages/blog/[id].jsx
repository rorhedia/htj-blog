import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";

import { getPostById } from "../../lib/services";
import { formatDate } from "../../lib/functions";

function PostView({ id }) {
  const [post, setPost] = useState({});
  const router = useRouter();

  useEffect(() => {
    async function fetchAPI(id) {
      const response = await getPostById(id);
      if (response.success === true) {
        setPost(response.data[0]);
      }
    }

    fetchAPI(id);
  }, [id]);

  const {
    title,
    image,
    created,
    content,
    visits,
    // user_id: { avatar, name }
  } = post;

  return (
    <>
      <Layout>
        <section className="page-detail-container">
          <p className="back-page">
            <span onClick={() => router.back()}>
              {" "}
              &lsaquo; Regresar al Blog
            </span>
          </p>

          <h3 className="detail-title">{title}</h3>

          <div>{formatDate(created)}</div>

          <img className="detail-image" src={image} alt="img" />

          <article>
            <p>{content}</p>

            <p>
              Cuando busqué cómo sería “El lugar de trabajo del futuro”, terminé
              consultando a Peter Brödner. Quizás el nombre no significa nada
              para la mayoría de nosotros; sin embargo, a mediados de la década
              de 1980, Brödner publicó el libro Factory 2000. Hay un capítulo
              titulado: "La feria de las profecías" que, en resumen, hace una
              reflexión dramática y tan actual:
            </p>

            <p>
              “Casi nunca en ninguna otra época industrial los diseños han sido
              tan trascendentales y tan audaces, los lemas son más incitantes y
              desafiantes. Casi nunca antes una batalla entre tecnología y mano
              de obra han asumido tan claramente la forma de una guerra
              religiosa". Después de 35 años parece que se refiere a la época
              actual.
            </p>

            <p>
              Hoy parte de la discusión vuelca sobre temas como la diversidad
              generacional en el mundo laboral: Jóvenes y viejos. Algunas
              empresas, principalmente de tecnología, prefieren pensar en
              ‘Mentalidad moderna’ y dejan fuera los prejuicios sobre
              apariencia, edad o preferencias.
            </p>
          </article>
        </section>
      </Layout>
    </>
  );
}

PostView.getInitialProps = async (ctx) => {
  return {
    id: ctx.query.id,
  };
};

export default PostView;
