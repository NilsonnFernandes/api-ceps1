import axios from "axios"
import React, { useState } from "react"
import ImgBrasil from './assets/brasil-postal-codes6.jpg';

export default function App() {

  const [cep, setCep] = useState("")
  const [address, setAddress] = useState("")

  async function handleCep(){

    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      setAddress(response.data)
      
      } catch (err) {
        console.log(err)
    }
   
  }

  return (
    <div>

      <img className="imagem-brasil" height={350} width={440} src={ImgBrasil}/>

      <div style={{
        display: "flex",
        flexDirection:"column",
        justifyContent:"center",
        alignContent:"center",
        gap: "15px"
        }}>

        <h1>Busque seu CEP</h1>
        <input type="text"  onChange={(e) => setCep(e.target.value)}/>
        <button type="button" onClick={handleCep}>Buscar</button>

        {
          address && <div>

              <p>{address.logradouro}</p>
              <p>{address.bairro}</p>
              <p>{address.ddd}</p>

          </div>
        }

      </div>
    </div>
  )
}