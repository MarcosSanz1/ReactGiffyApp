import React, { useState, useEffect } from "react";
import Gif from "./Gif";
import getGifs from "../services/getGifs";

export default function ListOfGifs({ params }){

    const { keyword } = params

    const [loading, setLoading] = useState(false)

    const [gifs, setGifs] = useState([])

    useEffect(() => {
        setLoading(true)
        getGifs({ keyword })
        .then(gifs => {
            setGifs(gifs)
            setLoading(false)
        })
    }, [keyword])

    if (loading) return <i>Cargando ...</i>

    return <div>
    {
        gifs.map(({id, title, url}) => 
        <Gif 
            key={id}
            id={id}
            title={title} 
            url={url} 
        />
        )
    }
    </div>
}

// En las props no nos llega la keyword directamente, si no que nos llega un obketo params que tiene todos los parámetros que ha encontrado en la url. Entonces la keyword nos la deja
// en el objeto params y dentro de params tenemos la keyword.