import React, { Component } from 'react';
import { connect } from "react-redux";
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Toggle from 'material-ui/Toggle';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import { GitAction } from '../../store/action/gitAction'
import '../../app/App.css';


function mapStateToProps(state) {
    return {
        allcomplains: state.counterReducer['missings']
    };
}

function mapDispatchToProps(dispatch) {
    return {
        callAddProduct: (prodData) => dispatch(GitAction.CallAddProduct(prodData))
    };
}

class AddProductComponent extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        name: '',
        manufacturer: '',
        description: ''
    }

    addProductForm(){
        console.log(this.state)
        this.props.callAddProduct(this.state)
    }
    handleChange(data, e) {
        if (data == 'product') {
            this.setState({
                name: e.target.value
            })
        } else if (data == 'manufacturer') {
            this.setState({
                manufacturer: e.target.value
            })
        } else {
            this.setState({
                description: e.target.value
            })
        }
    }

    render() {

        let complains = this.props.allcomplains ? Object.keys(this.props.allcomplains).map((key) => { return this.props.allcomplains[key] }) : {};
        if (complains.length > 0) {
            var complainCard = complains.map((d, i) => {
                return <div key={i} className="card">
                    <div className="container">
                        <h4><b>{d.title}</b></h4>
                        <p>{d.description}</p>
                    </div>
                </div>
            })
        }
        return (
            <div className="App">
                <div className="App-header">
                    <h1>Add Product</h1>
                </div>
                <br/>
                <Card style={{ 'width': '495px', 'display': 'inline-block', 'marginRight': '10px' }}>
                    <CardText>
                        <TextField
                            id="text-field-controlled"
                            hintText="Product Name"
                            value={this.state.name}
                            onChange={this.handleChange.bind(this,'product')} />
                        <br />
                        <TextField
                            id="text-field-controlled1"
                            hintText="Manufacturer"
                            value={this.state.manufacturer}
                            onChange={this.handleChange.bind(this,'manufacturer')} />
                        <br />
                        <TextField
                            id="text-field-controlled2"
                            hintText="Description"
                            value={this.state.description}
                            onChange={this.handleChange.bind(this,'description')} />
                    </CardText>
                    <CardActions>
                        <FlatButton label="Add" onTouchTap={this.addProductForm.bind(this)} />
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProductComponent);
