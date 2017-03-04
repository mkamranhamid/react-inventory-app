import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';



import store  from './store/index';
import App from './app/App';
import AboutComponent from './components/about/about.component';
import HomeComponent from './components/home/home.component';
import ProductDetailsComponent from './components/productDetails/productDetails.component';
import AddStoreComponent from './components/addStore/addStore.component';
import AddProductComponent from './components/addProduct/addProduct.component';
import SaleDetailsComponent from './components/saleDetails/saleDetails.component';
import ViewProductComponent from './components/viewProduct/viewProduct.component';
import ViewScaleComponent from './components/viewSale/viewSale.component';

import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render((
  <Provider store={store}>
    <MuiThemeProvider>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={HomeComponent} />
          <Route path="/productDetails" component={ProductDetailsComponent} />
          <Route path="/addStore" component={AddStoreComponent} />
          <Route path="/viewProduct" component={ViewProductComponent} />
          <Route path="/viewSale" component={ViewScaleComponent} />
          <Route path="/addProduct" component={AddProductComponent} />
          <Route path="/saleDetails" component={SaleDetailsComponent} />
          <Route path="/login" component={AboutComponent} />
          <Route path="/signup" component={HomeComponent} />
        </Route>
      </Router>
    </MuiThemeProvider>
  </Provider>),
  document.getElementById('root')
);
