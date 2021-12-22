import React from "react";
// import { Route,Link } from 'react-router-dom';
//import Carts from "../Carts/Carts";
// import BranchProduct from "../branchProduct/branchProduct";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {} from "@fortawesome/fontawesome-free";
import info from '../imgeas/info1.jpg';
import './Home.css';
// import { OptinMonsterIcon } from "react-line-awesome";

class Home extends React.Component {
    state={
    }
    render() { 
        return(
            <React.Fragment>
                
                

                <div className="containers">
                        <div className="perant home">
                            <div className="section1">
                                <div className="details">
                                    <ul className="nav2">
                                        <li className="options"><i className="las la-bars"></i>Options</li>
                                        <li><i className="las la-shopping-bag"></i>Clothing</li>
                                        <li><i className="las la-laptop-code"></i>     Electronics</li>
                                        <li><i className="las la-shoe-prints"></i>Shoes</li>
                                        <li><i className="las la-clock"></i>Watches</li>
                                        <li><i className="las la-gem"></i>Jewelley</li>
                                        <li><i className="las la-futbol"></i>Sport</li>
                                        <li><i className="las la-baby-carriage"></i>Kids and Babies</li>
                                    </ul>
                                </div>
                                <div className="info">
                                    <div className="img1">
                                        <img src={info} alt=""></img>
                                    </div>
                                    <div className="content">
                                        
                                        <h1>New Watch</h1>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut est, officiis libero impedit voluptas placeat nobis doloremque dolore quisquam sapiente quia eos earum tempore.</p>
                                        <button> SHOP NOW</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Home;


// old code>>>>
// <div className="home">
//                     <div className="">
//                         <h1>Home</h1>
//                                 <ul>
//                                     <li><Link to='/home/branchproduct'>Shopping Card</Link></li>
//                                     <li><Link to='/home/branchproduct'>Shopping Card</Link></li>
//                                     <li><Link to='/home/branchproduct'>Shopping Card</Link></li>
//                                     <li><Link to='/home/branchproduct'>Shopping Card</Link></li>
                                    
//                                 </ul>
//                     </div>
                
                
                
//                     <div className="">
//                         <Route path='/home/branchproduct' render={()=><BranchProduct
//                         {...this.props} 
//                         products={this.props.products} 
//                         onClick={this.props.handleInCartChange}
//                         />} />
    
//                     </div>
//                 </div>