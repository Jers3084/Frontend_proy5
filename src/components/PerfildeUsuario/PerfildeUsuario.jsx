import React, { useState, useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import styles from "./PerfildeUsuario.module.css";

export const PerfildeUsuario = () => {
  var id = sessionStorage.getItem("idUsuario");
  var nombreU = sessionStorage.getItem("nombreUsuario");
  var usernameU = sessionStorage.getItem("cuentaUsuario");
  var correoU = sessionStorage.getItem("correoUsuario");
  var token = sessionStorage.getItem("tokenUsuario");
  const { userc } = useContext(UserContext);
  const [editar, setEditar] = useState(false);
  const [nombre, setNombre] = useState(nombreU);
  const [email, setEmail] = useState(correoU);
  const [password, setPassword] = useState("");

  const handleSubmitr = async (e) => {
    e.preventDefault();

    await updateRegistro();
    setNombre(nombreU);
    setEmail(correoU);
    setPassword("");
    setEditar(false);
    alert("Registro Actualizado");
  };

  const updateRegistro = async () => {
    try {
      return fetch("http://35.192.83.171:9000/api/usuarios/actualizar", {
        method: "POST",
        body: JSON.stringify({ id, nombre, email }), // data {object}
        headers: {
          "Content-Type": "application/json",
          authorization: token,
        },
      })
        .then((response) => response.json())
        .then((response) => {
          nombreU = response.data.nombre;
          sessionStorage.setItem("nombreUsuario", nombreU);
          correoU = response.data.email;
          sessionStorage.setItem("correoUsuario", correoU);
        });
    } catch (e) {
      console.log("hubo un error");
      console.log(e);
    }
  };

  const editarUsuario = () => {
    return setEditar(true);
  };

  const cancel = () => {
    return setEditar(false);
  };
  return (
    <>
      {!editar ? (
        <div className={styles.contenedor}>
          <h2 className={styles.titulo}>Perfil del Usuario</h2>
          <form className={styles.formato}>
            <div className={styles.fullentry}>
              <label htmlFor="validationCustom01" className={styles.formlabel}>
                Nombre
              </label>
              <input
                readOnly
                type="text"
                className={styles.formcontrol}
                id="inputNombre"
                value={nombreU}
              />
            </div>

            <div className={styles.fullentry}>
              <label htmlFor="validationCustom02" className={styles.formlabel}>
                E-mail
              </label>
              <input
                readOnly
                type="email"
                className={styles.formcontrol}
                id="inputEmail"
                value={correoU}
              />
            </div>

            <div className={styles.fullentry}>
              <label
                htmlFor="validationCustomUsername"
                className={styles.formlabel}>
                Username
              </label>
              <input
                readOnly
                type="text"
                className={styles.formcontrol}
                id="inputUsername"
                aria-describedby="inputGroupPrepend"
                placeholder="Username"
                required
                value={usernameU}
              />
            </div>

            <div className={styles.contenBoton}>
              <button
                className={styles.boton}
                type="button"
                onClick={editarUsuario}>
                Editar
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className={styles.contenedor}>
          <h2 className={styles.titulo}>Perfil del Usuario</h2>
          <form className={styles.formato} onSubmit={handleSubmitr}>
            <div className={styles.fullentry}>
              <label htmlFor="validationCustom01" className={styles.formlabel}>
                Nombre
              </label>
              <input
                type="text"
                className={styles.formcontrol}
                id="inputNombre"
                value={nombre}
                onChange={(e) => {
                  setNombre(e.target.value);
                }}
              />
            </div>

            <div className={styles.fullentry}>
              <label htmlFor="validationCustom02" className={styles.formlabel}>
                E-mail
              </label>
              <input
                type="email"
                className={styles.formcontrol}
                id="inputEmail"
                value={email}
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <div className={styles.fullentry}>
              <label
                htmlFor="validationCustomUsername"
                className={styles.formlabel}>
                Username
              </label>
              <input
                readOnly
                type="text"
                className={styles.formcontrol}
                id="inputUsername"
                aria-describedby="inputGroupPrepend"
                placeholder="Username"
                required
                value={usernameU}
              />
            </div>

            <div className={styles.contenBoton}>
              <button className={styles.boton} type="button" onClick={cancel}>
                Cancelar
              </button>
              <button className={styles.boton} type="submit">
                Actualizar
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};
