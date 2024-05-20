import "./AppMaestro.css"
import NavBar from "../NavBar/NavBar";

import { useEffect } from "react";
import { Link } from "react-router-dom";


export default function AppMaestro(){

    useEffect(()=>{
        document.body.style.backgroundColor = "#330000"; // Cambia el color '#213547'  naranja: #ff5733
      }, [])

    return(<>

        <div className="position-absolute top-0 start-0" style={{ width: "100%", height: "100px", background:"Black", border: '1px solid red' }}>
            <div className='mt-3 col'>   
             <NavBar/>
            </div>
        </div>
        
        {/* <h1 className='position-absolute start-0 tipografia' style={{top:150, marginLeft:26, color: "white"}}>Nuevos Productos y lanzamientos</h1> */}

        

    </>)
}