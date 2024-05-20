import "./ProductoOnly.css"
import { Link } from "react-router-dom"

export default function ProductOnly({title,img,price,idProd}){
    
    return(<>
        
        <div className="card" style={{ width: "18rem", height: "31rem"}}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">Price: {price}</p>

                    
                    <a href="#" className="btn" style={{background:"red", color:"White"}}><Link to={`/product/${idProd}`}>Details</Link></a>
                </div>
        </div>
  
    </>)
}

// <Link to={`/product/${idProd}`}>Details</Link>