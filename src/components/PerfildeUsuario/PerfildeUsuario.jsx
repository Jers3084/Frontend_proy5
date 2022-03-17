import React, { useState } from 'react'

export const PerfildeUsuario = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  var token=sessionStorage.getItem("tokenUsuario")

  return (
    <div>PerfildeUsuario</div>
  )
}
