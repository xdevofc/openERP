import { useState } from "react"

const App = ()=> {


   const [usuarios, setUsuarios] = useState([])
   const [nombre, setNombre ] = useState("")
   const [active, setActive] = useState(false)



    const handleClick = async () =>{
      const response = await fetch('http://localhost:3000/api/users')
      const result = await response.json()
      setUsuarios(result)
    }

    function handleSubmit(){
     console.log(nombre,active) 
    }

  return (
    <>
    <h1>Obtener Datos</h1>
    <input type="text" value={nombre} onChange={e => setNombre(e.target.value)}/><br>
    </br>
    <input type="checkbox" value={active} onChange={e => setActive(e.target.checked)} /><br>
    </br>
    <button onClick={handleSubmit}>Submit</button>
    <button onClick={handleClick}>Obtener datos</button>
    { usuarios.length <= 0  ? <p>No hay datos</p> : usuarios.map( user => <p key={user.id}>{user.first_name}</p>) }
    </>
  )
}

export default App
