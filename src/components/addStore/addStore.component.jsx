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
        allcomplains: state.counterReducer['crimes']
    };
}

function mapDispatchToProps(dispatch) {
    return {
        callAddStore: (storeData) => dispatch(GitAction.CallAddStore(storeData))
    };
}

class AddStoreComponent extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        name: '',
        location: ''
    }
    addStoreForm(e) {
        e.preventDefault();
        console.log(this.state)
        this.props.callAddStore(this.state)
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
                    <h1>Add Store</h1>
                </div><br/>
                <Card style={{ 'width': '495px', 'display': 'inline-block', 'marginRight': '10px' }}>
                    <CardText>
                        <TextField
                            id="text-field-controlled"
                            hintText="Store Name"
                            value={this.state.name}
                            onChange={({ target }) => { this.setState({ name: target.value }) } } />
                        <br />
                        <TextField
                            id="text-field-controlled"
                            hintText="Location"
                            value={this.state.location}
                            onChange={({ target }) => { this.setState({ location: target.value }) } } />
                        <br />
                    </CardText>
                    <CardActions>
                        <FlatButton label="Add" onTouchTap={this.addStoreForm.bind(this)} />
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddStoreComponent);
