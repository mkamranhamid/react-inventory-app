import React, { Component } from 'react';
import { connect } from "react-redux";
import { browserHistory } from 'react-router';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';

const styles = {
  customWidth: {
    width: 200,
  },
};


import { GitAction } from '../../store/action/gitAction'
import '../../app/App.css';
import './productDetails.component.css';


function mapStateToProps(state) {
    return {
        reported: state.counterReducer['report'],
        allstores: state.counterReducer['stores'],
        allproducts: state.counterReducer['products']
    };
}

function mapDispatchToProps(dispatch) {
    return {
        callAddStock: (somedata) => dispatch(GitAction.CallAddStock(somedata)),
        getallStores: () => dispatch(GitAction.CallAllStores()),
        getallProducts: () => dispatch(GitAction.CallAllProducts())
    };
}

class ProductDetailsComponent extends Component {
    constructor(props) {
        super(props);
        this.OnSubmitLogin = this.OnSubmitLogin.bind(this);
        this.props.getallStores();
        this.props.getallProducts();
    }
    state = {
        purchaseDate: '',
        selectedStore: 'Neden Kullanırız',
        selectedProduct:'Lorem',
        quantity: '',
        unitPrice: ''
    }
    OnSubmitLogin(e) {
        e.preventDefault();
        console.log(this.state)
        this.props.callAddStock(this.state)
    }
        handleChangeDate(e,d){
        console.log(d)
        this.setState({
            purchaseDate:d.toString()
        })
    }
    
    render() {
        const buttonStyle = { width: '100%' };
        let allStoresData = this.props.allstores ? Object.keys(this.props.allstores).map((key) => { return this.props.allstores[key] }) : {};
        if (allStoresData.length > 0) {
            // this.props.getallProducts();
            var createMenusForDropDown = allStoresData.map((d, i) => {
                return <MenuItem key={i} value={d.name} primaryText={d.name} />
            })
        }
        let allProductsData = this.props.allproducts ? Object.keys(this.props.allproducts).map((key) => { return this.props.allproducts[key] }) : {};
        if (allProductsData.length > 0) {
            var createMenusForDropDownProduct = allProductsData.map((d, i) => {
                return <MenuItem key={i} value={d.name} primaryText={d.name} />
            })
        }
        return (
            <div className="App">
                <div className="App-header">
                    <h1>Add Purchase Details</h1>
                </div>
                <div style={{ marginLeft: '340px', marginTop: '67px', width: '50%' }}>
                    <Paper className='Login-Panel'>
                        <form style={{ padding: '16px', margin: '0px' }} className='LoginForm' onSubmit={this.OnSubmitLogin}>


                            <div>
                                <DropDownMenu value={this.state.selectedStore} onChange={({target}) => { this.setState({ selectedStore: target.innerText }) } }>
                                    {createMenusForDropDown}
                                </DropDownMenu>
                            </div>

                            <div>
                                <DropDownMenu value={this.state.selectedProduct} onChange={({target}) => { this.setState({ selectedProduct: target.innerText }) } }>
                                    {createMenusForDropDownProduct}
                                </DropDownMenu>
                            </div>
                            <div>
                                <DatePicker hintText="Purchase Date" onChange={this.handleChangeDate.bind(this)} />
                            </div>
                            <TextField
                                id="text-field-controlled"
                                hintText="Quantity"
                                type="number"   
                                value={this.state.quantity}
                                onChange={({ target }) => { this.setState({ quantity: target.value }) } } />
                            <br />
                            <TextField
                                id="text-field-controlled1"
                                hintText="UnitPrice"
                                type="number"
                                value={this.state.unitPrice}
                                onChange={({ target }) => { this.setState({ unitPrice: target.value }) } } />
                            <br />

                            <div className='LoginForm-Submit'>
                                <RaisedButton
                                    label='Add'
                                    primary
                                    type='submit'
                                    style={buttonStyle}
                                    />
                            </div>
                        </form>
                    </Paper>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailsComponent);
