import React from 'react';
import { Checkbox, Input, Select, File, Textarea, Form } from 'formsy-react-components';
import {Grid, Row, Col } from 'react-bootstrap';
import Header from '../header/Header';
import './ContainerWrap.css';


const AddProductForm = props => {
  const { disabledChoice, layoutChoice } = props;

  let myform = null;
  let ProductImg;

  const previewFile = () =>{
    var file    = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();
  
    reader.addEventListener("load", function () {
      ProductImg = reader.result;
    }, false);
  
    if (file) {
      reader.readAsDataURL(file);
    }
  }


  const resetForm = () => {
    //console.log('Reset called'); // eslint-disable-line no-console
    const {formsyForm} = myform;
    formsyForm.reset();
  };


  const handleKeyUp = (event) => {
    if ( event.target.value > 100 ) {
          event.preventDefault(); // Let's stop this event.
          const thisEle = event.target;
          const resetDiscount = setTimeout(() => {
            thisEle.value = "100";
          }, 500);
          resetDiscount;
      }
  }

  const handleKeyDown = (event) => {
    if ( event.target.value > 100 ) {
          event.preventDefault(); // Let's stop this event.
         
    }
  }
  
  const submitForm = data => {
    const {formsyForm} = myform;
    
    data.ProductImg = [ProductImg]; 
    
    fetch('http://localhost:3000/products', {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body:  JSON.stringify(data) ,
    }).then(response => {
      alert('Product data successfully store in DB');
      window.location.pathname = '/product-list';
    })
    .catch(error => console.error(`Fetch Error =\n`, error));
    formsyForm.reset();
  };

  const ProductBrand = [
    {value: '', label: 'Please select…'},
    {value: 'Apple', label: 'Apple'},
    {value: 'Samsung', label: 'Samsung'},
    {value: 'OnePlus', label: 'OnePlus'},
    {value: 'Mi', label: 'Mi'},
    {value: 'Motorola', label: 'Motorola'},
    {value: 'Micromax', label: 'Micromax'},
    {value: 'Lenovo', label: 'Lenovo'},
    {value: 'Panasonic', label: 'Panasonic'}    
  ];

  const refCallback = form => {
    myform = form;
  };

  
 
  return (
    <div>
			<Header />
      <Grid>
        <Row className="forwOutWrap">
            <Col lg={12} sm={12} >
            <h2 className="title_h2">Add Product</h2>
            <div style={{ 'clear':'both' }}></div>
            <Form
              onSubmit={submitForm}
              layout={layoutChoice}
              disabled={disabledChoice}
              ref={refCallback}>
              <fieldset >
                <Input name="secret" value="productID" type="hidden" />
                <Input name="ProductName" value="" label="Product Name" type="text" placeholder="enter product name." required />
                <Select name="ProductBrandName" label="Brand Name" options={ProductBrand} required   />
                <File name="ProductImg" id="ProductImg" label="Product Image" onChange={previewFile} />
                <Input name="ProductImgHide" id="ProductImgHide" value="" type="hidden" />
                <Input name="ProductPrice" value="" label="Product Price" type="number" placeholder="enter product price." validations="isNumeric,isLength:3" required />
                <Input name="ProductDiscount" label="Product Discount" type="number" placeholder="enter product discount." validations="isNumeric,isLength:2" onKeyUp={handleKeyUp} onKeyDown={handleKeyDown} />
                <Textarea rows={3} cols={40} name="ProductDescription" label="Product Features" placeholder="This field requires 50 characters." validations="minLength:50" 
                  validationErrors={{ minLength: 'Please provide at least 50 characters.', }}/>
                <Checkbox name="ProductEMI" value label="Product EMI Option"  valueLabel="Check me out" />
              </fieldset>
              
              <fieldset className="btnFormWrap">
                <Row layout={layoutChoice}>
                  <input className="btn btn-default" onClick={resetForm} type="reset" defaultValue="Reset" />{' '}
                  <input className="btn btn-primary" type="submit"  defaultValue="Submit" />
                </Row>
              </fieldset>
            </Form>
            </Col>
          </Row>
        </Grid>
    </div>
  );
};


export default AddProductForm;