import React, { Component } from 'react';
import { connect } from "react-redux";
import { browserHistory } from 'react-router';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';


import {GitAction} from '../../store/action/gitAction'
import '../../app/App.css';
const styles = {
  propContainer: {
    width: 200,
    overflow: 'hidden',
    margin: '20px auto 0',
  },
  propToggleHeader: {
    margin: '20px auto 10px',
  },
};

const tableData = [
  {
    name: 'John Smith',
    status: 'Employed',
    selected: true,
  },
  {
    name: 'Randal White',
    status: 'Unemployed',
  },
  {
    name: 'Stephanie Sanders',
    status: 'Employed',
    selected: true,
  },
  {
    name: 'Steve Brown',
    status: 'Employed',
  },
  {
    name: 'Joyce Whitten',
    status: 'Employed',
  },
  {
    name: 'Samuel Roberts',
    status: 'Employed',
  },
  {
    name: 'Adam Moore',
    status: 'Employed',
  },
];


function mapStateToProps(state) {
    return {
        allsales: state.counterReducer['sales']
    };
}

function mapDispatchToProps(dispatch) {
    return {
      callAllSales: () => dispatch(GitAction.CallAllSales())
    };
}


class ViewScaleComponent extends Component {
  constructor(props) {
    super(props);
    this.props.callAllSales();
    this.state = {
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: false,
      showRowHover: false,
      selectable: true,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: true,
      showCheckboxes: true,
      height: '300px',
    };
    }
    handleToggle = (event, toggled) => {
        this.setState({
            [event.target.name]: toggled,
        });
    };

    handleChange = (event) => {
        this.setState({ height: event.target.value });
    };


  state = {
    email: '',
    password: ''
  }
  render() {
    if (this.props.currentUser && this.props.currentUser.email) {
      browserHistory.push('/productDetails')
    }
    const buttonStyle = { width: '100%' }
    if (this.props.allsales.length > 0) {
        this.props.allsales.map((d, i) => {
            if(d.purchaseDate){
              var splittedDate = d.purchaseDate.split(' ');
               var splicedDate = splittedDate.splice(0,4);
               d.purchaseDate = splicedDate.join(' ');
            }
        })
    }
    return (
      <div className="App">
        <div>
                <Table
                    height={this.state.height}
                    fixedHeader={this.state.fixedHeader}>
                    <TableHeader
                        displaySelectAll={false}
                        adjustForCheckbox={this.state.showCheckboxes}
                        enableSelectAll={this.state.enableSelectAll}>
                        <TableRow>
                            <TableHeaderColumn colSpan="3" tooltip="Product Details" style={{ textAlign: 'center' }}>
                                Product Details
                            </TableHeaderColumn>
                        </TableRow>
                        <TableRow>
                            <TableHeaderColumn tooltip="Date">Date</TableHeaderColumn>
                            <TableHeaderColumn tooltip="Product Name">Product Name</TableHeaderColumn>
                            <TableHeaderColumn tooltip="Quantity">Quantity</TableHeaderColumn>
                            <TableHeaderColumn tooltip="Price Sold">Price Sold</TableHeaderColumn>
                            <TableHeaderColumn tooltip="Total Ammount">Total Ammount</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody
                        displayRowCheckbox={false}
                        deselectOnClickaway={this.state.deselectOnClickaway}
                        showRowHover={true}
                        stripedRows={true}
                        >
                        {this.props.allsales ? this.props.allsales.map((d, i) => (
                <TableRow key={i} selected={d.selected}>
                  <TableRowColumn>{d.purchaseDate}</TableRowColumn>
                  <TableRowColumn>{d.selectedProduct}</TableRowColumn>
                  <TableRowColumn>{d.quantity}</TableRowColumn>
                  <TableRowColumn>{d.unitPrice}</TableRowColumn>
                  <TableRowColumn>{+d.quantity * +d.unitPrice}</TableRowColumn>
                </TableRow>
                        )):''}
                    </TableBody>
                </Table>

      </div>

      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewScaleComponent);
