const Botao=()=>{
    //criando a função handleClick
    const handleClick=()=>{
        alert('você clicou em um botão componente')
    }

    return(
        <>
        <button onClick={handleClick}>Botão do Componente</button>
        </>
    )
}

export default Botao