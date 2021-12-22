import React from 'react';
import ProductCard from '../productCard/productCard';
import { Link } from 'react-router-dom';




const BranchProduct = (props) => {
   
    return ( 
        
        <React.Fragment>
            <div className="container">
            {props.products.map(product => (
                <div key={product.id} className="card" style={{width:"33.3%",height:"33.3%"}}>
                <img className="card-img-top" src={product.imgUrl} alt={product.name}/>
                <div className="card-body">
                    <h5 className="card-title"><Link to={`/productdetails/${product.id}`}>{product.name}</Link></h5>
                    <p className="card-text">{product.count}</p>
                    <Link to="#" className="btn btn-primary">Go somewhere</Link>
                    <ProductCard onClick={props.onClick} product={product} />
                </div>
                </div>
            ))}
            </div>
        </React.Fragment>
     )
}
 
export default BranchProduct;