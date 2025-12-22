function SayYourName({setName}){
    return(
        <div>
            <h1>Digite seu nome</h1>
            <input type="text" placeholder="Digite seu nome" onChange={(e) => setName(e.target.value)}/>
        </div>
    )
}

export default SayYourName