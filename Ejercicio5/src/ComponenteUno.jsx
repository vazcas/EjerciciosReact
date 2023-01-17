import React from "react";

const usuario1 = {
    username: 'manuel',
    email: 'manuel@email.com'
}

function ComponenteUno() {

    return(
        <>
        <p>username: {usuario1.username}</p>
        <p>email: {usuario1.email}</p>
        </>
    )
}

export default ComponenteUno