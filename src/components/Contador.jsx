import { useState } from "react"

const Contador=()=>{

    const [contador, setContador] = useState(0);


    return(
        <>
        <p>Contador:{contador}</p>
        <button onClick={()=>setContador(contador+1)}>Aumentar</button>
        <button onClick={()=>setContador(contador-1)}>Diminuir</button>
        </>
    )
}

export default Contador