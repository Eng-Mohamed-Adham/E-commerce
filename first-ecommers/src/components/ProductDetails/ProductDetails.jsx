import React from 'react';
import qs from 'query-string';

class ProductDetails extends React.Component {



handleSave =()=> {
    //BackEnd Save

    this.props.history.replace('/carts');
}









    render() { 
        const res = qs.parse(this.props.location.search);
        console.log(res);
        const pro = this.props.pro.filter(c=> c.id ===parseInt(this.props.match.params.id))[0];
        
        return (
            <React.Fragment>
                <h1>Details No {this.props.match.params.id}</h1>
                <h2>{pro.name}</h2>
                <h2>Count in Shopping Card: {pro.count}</h2>
                <button className="btn btn-primary btn-sm" onClick={this.handleSave}>Save</button>
            </React.Fragment>
        )
    }
}

export default ProductDetails;