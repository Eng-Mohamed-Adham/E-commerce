import React from "react";
import { Link } from 'react-router-dom';
import './product.css';

class Products extends React.Component {




        getclasses(){
            return(
            this.props.product.count === 0 
                ? "badge bg-warning m-2" 
                : "btn btn-primary m-2"
            );
        };



    render() { 
        return (
            <React.Fragment>
                
                                    <div className="card1">
                                                <img src={this.props.product.imgUrl} alt=""/>
                                                
                                                <h4 >{this.props.product.name}</h4>
                                                <h6>$ {this.props.product.price}_</h6><h6 className="dis">$300.00</h6>
                                                <div className="fun">
                                                    <button className="add" onClick={()=> this.props.onIncrement(this.props.product)}>+</button>
                                                    <span className={this.getclasses()}>{this.props.product.count}</span>
                                                    <button className="more"><Link className="h4" to={`/productdetails/${this.props.product.id}`}  style={{textDecoration:'none'}}>Read More</Link></button>
                                                </div>
                                    </div>
            
            </React.Fragment>




        );
    }
}


export default Products;


// old code 
// <div className="container">
// <div >
//     <div className=" ">
//         <div className="card" style={{width: "18rem"}}>
//                     <img className="card-img-top" src={this.props.product.imgUrl} alt=""/>
//                     <div className="card-body">
//                             <Link className="card-title" to={`/productdetails/${this.props.product.id}`}  style={{textDecoration:'none'}}>{this.props.product.name}</Link>
//                             <span className={this.getclasses()}>{this.props.product.count}  </span>
//                                 <button className="btn btn-success m-2 " onClick={()=> this.props.onIncrement(this.props.product)}>+</button>
//                                 <button className="btn btn-secondary m-2" onClick={()=> this.props.onDis(this.props.product)}>-</button>
//                             <button className="btn btn-danger m-2" onClick={()=>this.props.onDelete(this.props.product)}>Delete</button>
//                     </div>
//         </div>

//     </div>
// </div>
// </div>
