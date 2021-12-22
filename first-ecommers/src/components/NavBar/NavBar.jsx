import React from "react";

import {  NavLink} from 'react-router-dom';
// import '../css/line-awesome.css';
// import '../css/line-awesome.min.css';


class NavBar extends React.Component {
    render() { 
        return(
            <React.Fragment>
                
                <header className="header">
        <div className="containers">
            <div className="head1">
                <i className="lab la-facebook icons"></i>
                <i className="lab la-twitter icons"></i>
                <i className="lab la-linkedin icons"></i>
                <i className="lab la-instagram icons"></i>
            </div> 
            <div className="head2">
                <h1 className="title1"><i className="las la-shopping-bag icon2"></i>Shop</h1>
                    <div className="search1">
                    <input className="search" type="search"/>
                    <button className="btn1"><i className="las la-search"></i></button>
                    
                    </div>
                <div className="icons3">
                    <i className="las la-shopping-basket icon3"></i>
                    <span>{this.props.product}</span>
                    <i className="las la-cog icon3"></i>

                </div>
            </div>
            <div className="head3">
                <ul className="nav">
                    <li><NavLink   to="/home">Home</NavLink></li>
                    <li> <NavLink to="/carts">Shopping Card</NavLink></li>
                    <li><NavLink  to="/carts">Shopping Card</NavLink></li>
                    <li><NavLink  to="/carts">Shopping Card</NavLink></li>
                    <li><NavLink  to="/carts">Shopping Card</NavLink></li>
                    <li><NavLink  to="/carts">Shopping Card</NavLink></li>
                    <li><NavLink  to="/carts">Shopping Card</NavLink></li>
                    <li><NavLink  to="/branchproduct">Products</NavLink></li>
                    <li><NavLink  to="/login">Login</NavLink></li>
                </ul>
            </div>
        </div>

        
    </header>
            </React.Fragment>
        );
    }
}
export default NavBar;



// old code>>>
// <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
//                     <NavLink className="navbar-brand" to="/home">Navbar</NavLink>
//                     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>

//                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul className="navbar-nav mr-auto">
//                         <li className="nav-item active">
//                             <NavLink className="nav-link" to="/home">Home</NavLink>
//                         </li>
                      
//                         <li className="nav-item">
//                             <NavLink className="nav-link" to="/carts">Shopping Card</NavLink>
//                         </li>
//                         <li className="nav-item">
//                             <NavLink className="nav-link" to="/login">Login</NavLink>
//                         </li>
//                         <li className="nav-item">
//                             <NavLink className="nav-link" to="/branchproduct">Products</NavLink>
//                         </li>
                        
                        
//                         </ul>
//                         <form className="form-inline my-2 my-lg-0">
//                         <input className="form-control  mr-md-3" type="search" placeholder="Search" aria-label="Search"></input>
                       
//                         </form>
//                     </div>
//                     <span>{this.props.product}</span>
//                 </nav>