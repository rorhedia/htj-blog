import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Input from "../components/Input";

import { getCountries, addComment } from "../lib/services";

function Contacto({ countries }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country_id: "",
    message: "",
  });

  const handleChange = ({ name, value }) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const response = await addComment(formData);
    console.log(formData, response);
  };

  const { name, email, phone, country_id, message } = formData;

  return (
    <Layout>
      <div className="contact-container">
        <section className="comp-title">
          <h1 className="header-title">Te queremos escuchar</h1>
          <p className="text-muted">
            Si tienes dudas, comentarios, propuestas, proyectos o quieres
            trabajar con nosotros escríbenos.
          </p>
        </section>

        <main className="comp-form">
          <form id="comment-form" className="" onSubmit={handleFormSubmit}>
            <div className="form-row">
              <Input
                label="Nombre y Apellido"
                name="name"
                value={name}
                placeholder="Ingresa tu nombre y apellido"
                callback={handleChange}
              />

              <Input
                label="Correo electrónico"
                type="email"
                name="email"
                value={email}
                placeholder="Ingresa tu correo electrónico"
                callback={handleChange}
              />
            </div>

            <div className="form-row">
              <Input
                label="Teléfono"
                type="number"
                name="phone"
                value={phone}
                placeholder="Ingresa tu número telefónico"
                callback={handleChange}
              />

              <div className="form-group col-md-6">
                <label>País</label>
                <select
                  className="form-control"
                  name="country_id"
                  onChange={(e) => handleChange(e.target)}
                >
                  <option>Selecciona tu país</option>
                  {countries.length &&
                    countries.map(({ _id, name }) => (
                      <option key={_id} value={_id}>
                        {name}
                      </option>
                    ))}
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-12">
                <label>Mensaje</label>
                <textarea
                  className="form-control"
                  rows="3"
                  name="message"
                  value={message}
                  onChange={(e) => handleChange(e.target)}
                  placeholder="Cuéntanos de tu proyecto o comentanos tus dudas"
                />
              </div>
            </div>

            <div className="btn-container">
              <button type="submit" className="btn btn-comment-submit mb-2">
                Enviar
              </button>
            </div>
          </form>
        </main>
      </div>
    </Layout>
  );
}

Contacto.getInitialProps = async (ctx) => {
  let countries = await getCountries();

  countries = countries.success === true ? countries.data : {};

  return { countries };
};

export default Contacto;
