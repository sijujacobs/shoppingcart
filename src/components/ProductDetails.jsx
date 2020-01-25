import React from 'react';
const ProductDetails = (props) => {

    return(<div className="productDetails">
            <div className="productImage">
            </div>
            <div className="productDesc">
                {props.product.title.substring(0, 10)}
            </div>
            <div className="actionButton">
            </div>
        </div>)
}

export default ProductDetails;