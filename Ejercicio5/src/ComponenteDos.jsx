import React from "react";


const usuario2 = {
    username: 'agus',
    email: 'agus@email.com'
}

function ComponenteDos() {

    return(
        <>
        <p>username: {usuario2.username}</p>
        <p>email: {usuario2.email}</p>
        </>
    )
}

export default ComponenteDos