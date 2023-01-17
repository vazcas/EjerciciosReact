import React from "react";

const usuario1 = {
    username: 'manuel',
    email: 'manuel@email.com'
}

const ComponenteUno =(props) => {

    return(
        <>
        <p>username: {usuario1.username}</p>
        <p>email: {usuario1.email}</p>
        {console.log(props)}
        </>
    )
}

export default ComponenteUno