import { useEffect } from "react";
import { supabase } from "./supabaseClient";

function Teste() {


    async function testa(){
        console.log("ue")
        const { data, error } = await supabase.from('usuarios').select()
        console.log(data)
    }

    useEffect(()=> {testa()},[])

    return (
        <div>
            <h1>TEste</h1>
        </div>
    );
}

export default Teste;