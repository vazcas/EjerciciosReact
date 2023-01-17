import React from "react";


const usuario2 = {
    username: 'agus',
    email: 'agus@email.com'
}

const ComponenteDos =(props) =>{

    return(
        <>
        <p>username: {usuario2.username}</p>
        <p>email: {usuario2.email}</p>
        {console.log(props)}
        </>
    )
}

export default ComponenteDos