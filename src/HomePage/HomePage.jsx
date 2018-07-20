import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// import ContainerWrap from '../containerwrap/ContainerWrap';
import ProductList from '../containerwrap/ProductList';
//import { BrowserRouter as Router, Route } from 'react-router-dom';


class HomePage extends React.Component {
    
	render() {
       
        return (
            <ProductList />
		);
    }
}

function mapStateToProps(state) {
    console.info('HomepageState', state);
    const { users } = state;
    return {
        users
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };