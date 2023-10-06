
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
        <div className="div-checkout">
            <h1>Finalizando la Compra</h1>
            <hr />
            <div>
                <h4>Completar Datos:</h4>
                <br /> 
            <form  style={{display: 'flex', flexDirection:"column", gap: "30px"}}>
                
                <input type="text" name="Nombre"  placeholder="Nombre" required/>
                
                <input type="text" name="Email"  placeholder="Email"  required   onChange={(event) => setEmail(event.target.value)} />
                
                <input type="text" name="Telefono"  placeholder="Telefono"  required onChange={(event) => setPhone(event.target.value)} />
                <br /> 
                <button type="submit" className="btn btn-success" onClick={crearOrden}>Finalizar compra</button>
            </form> 
            </div>
        </div>     
    )
}

