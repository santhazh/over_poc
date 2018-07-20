/* eslint-env node, browser */
import React, { Component } from 'react';
/* eslint-disable import/extensions, import/no-unresolved, import/no-extraneous-dependencies */
import {Grid, Row, Col, ListGroup, ListGroupItem  } from 'react-bootstrap';
import Header from '../header/Header';
import './ContainerWrap.css';

class ProductList extends Component {

  constructor(props) {
		super(props)
		this.state = { data: [] }
  }

  loadData() {
		fetch('http://localhost:3000/products')
			.then(response => response.json() )
			.then(data => {
				this.setState({data: data })
		})
		.catch(err => console.error(this.props.url, err.toString()))
  }
  
  componentDidMount() {
		this.loadData()
	}
	

  render() {
    return (
      <div>
			<Header />
      <Grid>
        
          <Row className="forwOutWrap">

          <Col lg={12} sm={12} >
            <h2 className="title_h2">Product List</h2>
            
            <ListGroup className="ProductList" >

            { this.state.data.reverse().map((item, i) => {
              return  (
                
            <ListGroupItem key={i} className="productItem">      
              <div class="productImg">
                <a href="/"> <img src={item.ProductImg} alt={item.ProductName} /> </a>
              </div>
              <div class="productCaption">
                <div class="priceWrap">
                  <div class="offerPrice">Sale $ { item.ProductPrice -  ( (item.ProductPrice / 100) *  item.ProductDiscount) }</div>
                  <div class="originalPrice"> MSRP ${item.ProductPrice}   <span class="savedPrice"> {item.ProductDiscount}% OFF</span></div>
                  <div class="wishListCount"> <i class="fa fa-heart"></i> 4,685</div>
                </div>
                <h2 className="ProductName">
                    <a href="/"> {item.ProductName}  </a>
                    <span className="ProductBrandName"> by {item.ProductBrandName} </span>
                </h2>
                <p class="productDescription"> {item.ProductDescription} </p>
                <div class="reviewWrap">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star-half-o"></i>
                  <p>868 Reviews</p>
                </div>
                <a href="/" class="addCartBtn"> <i class="fa fa-shopping-cart"></i></a>
              </div>
            
            </ListGroupItem>    
              )
              })
            } 

              
            
            </ListGroup>
            
          </Col>

       </Row>
      
      </Grid>
      </div>
    );
  }
}


export default ProductList;