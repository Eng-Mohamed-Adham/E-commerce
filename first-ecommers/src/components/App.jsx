import React from "react";
import {Route , Switch,Redirect} from "react-router-dom";
import Home from './Home/Home';
import NotFound from './NotFound/NotFound';
import NavBar from "./NavBar/NavBar";
import Carts from './Carts/Carts';
import Login from './Login/Login';
import img1 from './imgs/01.jpg';
import img2 from './imgs/02.jpg';
import img3 from './imgs/03.jpg';
import img4 from './imgs/04.jpg';
import img5 from './imgs/05.jpg';
import ProductDetails from './ProductDetails/ProductDetails';
//import BranchProduct from "./branchProduct/branchProduct";
// import './App.css';
//  import './css/line-awesome.css';
// import './css/line-awesome.min.css';
 import Products from "./Products/Products";

import'./css/main.css';
import './css/normalize.css';


class App extends React.Component {
    
    state={
        details:[
            {id:1,name:"short",count:2,isInCart:true,imgUrl:(img1),price:200},
            {id:2,name:"jeans",count:1,imgUrl:(img2),isInCart:true,price:200},
            {id:3,name:"boot",count:4,imgUrl:(img3),isInCart:true,price:200},
            {id:4,name:"gloves",count:7,imgUrl:(img4),isInCart:true,price:200},
            {id:5,name:"T-shirt",count:3,imgUrl:(img5),isInCart:true,price:200},
            {id:6,name:"T-shirt",count:3,imgUrl:(img5),isInCart:true,price:200},

            
        ]
    };
    handleSet = (Product) => {
        const products = [...this.state.details];
        const index = products.indexOf(Product);
        products[index] = { ...products[index] };
        //Edit
        products[index].count++;
        //set
        this.setState({details:products});
    };
    discountHandler = (Product) => {
        const products = [...this.state.details];
        const index = products.indexOf(Product);
        products[index] = { ...products[index] };
        //Edit
        
        if(products[index].count > 0){
            products[index].count--;
        } else{}
        //set
        this.setState({details:products});
    };






    handleDelete = (product)=>{
        const newproduct = this.state.details.filter(p => p.id !== product.id);
        this.setState({ details:newproduct });
    };


    handelReset = () => {
        let products = [...this.state.details];

        products.map(p => {
            p.count = 0;
            return p;
        });
        this.setState({details:products})
    };

    pricehandle = () => {
        let products = [...this.state.details];

        products.map(p => {
        
            return <h6>p.price</h6> ;
        });
        // this.setState({details:products})
    };

    handleInCartChange = (product) => {
        //Clone
        const products = [...this.state.details];
        const index = products.indexOf(product);
        products[index] = { ...products[index] };
        //Edit
        products[index].isInCart = !products[index].isInCart;
        //Set State
        this.setState({ details:products });
        };

        handelPrice =()=>{
             //clone 
                let products =[...this.state.details];
                let index = products.indexOf(products);
                products[index]={...products[index]};
                <h6>
                    {this.state.details.map(one => (
                        <Products
                        price ={products[index].price}
                        
                        />
                    ))}
                </h6>
            }

    render() { 
        return(
            <React.Fragment>
                <NavBar product={this.state.details.length}></NavBar>
              
                
                <main >{/*هاد الديف الي رح تصير عليه تنسيقات الcssعشان نزبط شكل العناصر بالصفحة */ }
                        <Switch>
                        <Route path='/home' render={(props)=><Home
                        {...props} 
                        products={this.state.details} 
                        onClick={this.handleInCartChange}
                        />}/>
                        <Route path='/login' component={Login}/>
                        
                        <Route path='/carts' render={(props) => <Carts
                        {...props}
                        details={this.state.details.filter((p) => p.isInCart)}
                        onIncrement={this.handleSet}
                        onDelete={this.handleDelete}
                        onReset={this.handelReset}
                        onDis={this.discountHandler}
                        price={this.pricehandle}
                        
                        />
                        }/>
                       
                        
                        <Route path='/productdetails/:id/:name?' render={(props)=> <ProductDetails
                        pro={this.state.details}{...props}
                        />}/>
                        
                            
                            
                            <Route path='/notfound' component={NotFound}/>
                            <Redirect to='/notfound'/>
                        </Switch>
                    </main>
            </React.Fragment>
        )
    }
}
 
export default App;