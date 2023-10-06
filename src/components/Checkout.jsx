
import { useState } from "react";

/* formulario para ingresar datos del comprador y boton finalizar compra
pasos
1. crear la instancia de la BD
2. crear el objeto order con los datos del buyer
3. crear una funcion para el boton de finalizr compra q al hacer clik mande la order a firesotre
*/

export default function Checkout () {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState(""); 

    function crearOrden () {
        const db=getFirestore();
        const order = {
            buyer: {
                name,
                email,
                phone,
            },
        };

        const ordenesRef = collection(db, "ordenes");
        addDoc(ordenesRef, order).then(result=> setOrderId(result.id));
    }




     return ( 
        <form  style={{display: 'flex', flexDirection:"column", gap: "30px"}}>
            <label>Name</label>  
            <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
            <label>Email</label>  
            <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} />
            <label>Phone</label>  
            <input type="text" value={phone} onChange={(event) => setPhone(event.target.value)} />
            <button onClick={crearOrden}>Finalizar compra</button>
        </form>      
    )
}

