import React from "react";
//import {Link} from 'react-router-dom';
import Products from '../Products/Products';
import '../App.css';
import '../css/main.css';
class Carts extends React.Component {
    


    render() { 

        const {details,onReset,onDelete,onIncrement,onDis,pricehandle}= this.props;
        return ( 
            <React.Fragment>
                <h1>Shopping Card</h1> 
                <button onClick={onReset} 
                className="btn btn-secondary btn-sm m-2">Reset</button>
                <div className="container">
        

                                    {details.map(one => (
                                        <Products
                                        className=""
                                        key={one.id} 
                                        onDelete={onDelete}
                                        product={one}
                                        onIncrement={onIncrement}
                                        onDis={onDis}
                                        price={pricehandle}
                                        />
                                        

                                    ))}
                </div>
                
            </React.Fragment>
        )
    }
}

export default Carts;

