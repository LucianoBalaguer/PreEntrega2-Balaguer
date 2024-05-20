import "./ProductViewBig.css"
import { useParams } from "react-router-dom"

import { getBookById } from "../../array"
import { useState, useEffect } from "react"

export default function ProductViewBig(){
    const [product, setProduct]= useState({});

    const { prodId } = useParams();

    useEffect(()=>{
         getBookById("https://api.itbook.store/1.0/new",prodId).then((dato)=> setProduct(dato))
         //getBooks("https://api.itbook.store/1.0/new").then((datosRecibidos)=> setBooks(datosRecibidos.books))
    },[])

    const divStyle = {
        width: '100%',
        backgroundColor: 'black',
        height: '400px', // Altura del div
        color: 'white', // Color del texto
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:"0px",
        marginBottom:"10px",
        border: '3px solid red'
    };


    return(<>

            {/* <img className="position-absolute start-0" src={product.image} alt={product.title} style={{width:500}} />    */}

            
            
            <div style={divStyle}>
                
                <div className="row">

                <div className="col">
                <img src={product.image} class="img-fluid" style={{height:600}} alt="..."></img>
                </div>

                <div className="col" style={{marginTop:180, marginRight:230}}>
                <h1>{product.title}</h1>
                <h3 style={{marginTop:65}}>Precio:{product.price}</h3>
                </div>

                </div>
                
            </div>




            {/* <div style={}>
            <div className="row" style={{color:"White"}}>

                <div className="col" style={{marginBottom:400}}>

                    <img className="position-absolute start-0" src={product.image} alt={product.title} style={{width:500}} />

                </div>

                <div className="Col">
                    <div>
                        <h3>Nombre: {product.title}</h3>
                    </div>

                    <div>
                    <p>Precio:{product.price}</p>
                    </div>
                </div>

                </div>
                            </div> */}
                            
            
           
    </>)
}