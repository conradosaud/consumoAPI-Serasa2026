import { useState } from "react";

function App() {

    const [usuarios, alteraUsuarios] = useState([])

    async function buscarTodos(){
        const response = await fetch("https://dummyjson.com/users")
        const data = await response.json()
        console.log(data)
        alteraUsuarios(data.users)
    }

    function mostrarInformacoes(usuario){
        alert("Telefone: "+ usuario.phone +"\nEmail: "+ usuario.email+"\nMora em: "+usuario.address.city)
    }

    return (
        <div>

            <h1>Consumo de API</h1>
            <p>Buscando dados da API DummyJSON</p>
            

            <ul>
                {
                    usuarios.length == 0 ?
                        <button onClick={buscarTodos} >Carregar dados</button>
                    :
                        usuarios.map(
                            i => <li> <img width="35" src={"https://api.dicebear.com/10.x/initials/svg?seed="+i.firstName}/> {i.gender == "female" ? "Senhora" : "Senhor"} {i.firstName} tem {i.age} anos <button onClick={ ()=> mostrarInformacoes(i) } >Ver informações</button> </li>
                        )
                }                
            </ul>

        </div>
    );
}

export default App;