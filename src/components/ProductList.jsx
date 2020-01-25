import React from 'react';
import {connect} from 'react-redux';
import ProductDetails from './ProductDetails';
//

const ProductList = (props) => {
    console.log('ProductList  :: props : ', props);
    return(<div className="productList">
        {
            (props.photos && props.photos.length > 0) && 
            props.photos.map(p => <ProductDetails key={p.id} product={p}/>)}
    </div>)
}

const mapStateToProps = (state) => {
    console.log(' mapStateToProps :: : statePhotots ', state);
    return {
        photos : state.photoReducer.photos
    }
}

const connectedProductList = connect(mapStateToProps)(ProductList);
export default connectedProductList;