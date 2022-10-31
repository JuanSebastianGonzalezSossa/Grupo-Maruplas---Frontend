

 export const PeticionPost = async(url, data) => {

    const resp = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    const Respuesta = await resp.json();

    console.log(Respuesta)
}