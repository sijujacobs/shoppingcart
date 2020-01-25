import React from 'react';
import {connect} from 'react-redux';
import {getPhotosByThunkAxios} from './redux/actions/index';
import Header from './components/Header';
import Cart from './components/Cart';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import './css/style.css';


class App extends React.Component{
  componentDidMount(){
	// this.props.getPhotos();
	this.props.getPhotosByThunkAxios();
  }
  render(){
    return(<div className="appContainer">
			<Header/>
			<ProductList/>
			<Cart/>
			<Footer />
		 </div>)
  }
}

const mapDispatchToProps = (dispatch) => {
	return{
		getPhotosByThunkAxios : () => dispatch(getPhotosByThunkAxios()),
		
	}  
}

const connectedApp = connect(null, mapDispatchToProps)(App);

export default connectedApp;
