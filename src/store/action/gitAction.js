import { createAction } from 'redux-actions';

export class GitAction {
    
    static GetData = 'GETDATA';
    static Success = 'SUCCESS';
    static Failure = 'FAILURE';
    // Signup
    static Register = 'REGISTER';
    static UserRegistered = 'SUCCESSFULLY-CREATED-USER';

    // Login
    static Login = 'LOGIN';
    static UserLoggedIn = 'SUCCESSFULLY-LOGIN';
    static UserLoggedInWithData = 'SUCCESSFULLY-LOGIN-WITH-DATA';
    
    //==================PRODUCT==========================//

    // Add Product
    static AddProduct = 'ADD-PRODUCT';
    static ProductAdded = 'PRODUCT-ADDED';

    //Get All Products
    static GetProduct = 'GET-PRODUCT';
    static GotProduct = 'GOT-PRODUCT';
    //=================STORE=============================//
    // Add Store
    static AddStore = 'ADD-STORE';
    static StoreAdded = 'STORE-ADDED';

    //Get All Stores
    static GetStores = 'GET-STORES';
    static GotStores = 'GOT-STORES';

    // Stock
    static AddStock = 'ADD-STOCK';
    static StockAdded = 'STOCK-ADDED';

    // GET Stock
    static GetStock = 'GET-STOCK';
    static GotStock = 'GOT-STOCK';

    // Sales
    static AddSales = 'ADD-SALES';
    static SalesAdded = 'SALES-ADDED';

    // GET Sales
    static GetSales = 'GET-SALES';
    static GotSales = 'GOT-SALES';

    // MISSINGS
    static GetMissings = 'GET-MISSINGS';
    static GotMissings = 'GOT-MISSINGS';

    // CRIMES
    static GetCrimes = 'GET-CRIMES';
    static GotCrimes = 'GOT-CRIMES';

    // REPORT
    static FileReport = 'File-REPORT';
    static Filed = 'FILED';

    static CallGetData(somedata) {
        return {
            type: GitAction.GetData,
            payload: somedata
        }
    }


    static CallAddProduct(prodData) {
        return {
            type: GitAction.AddProduct,
            payload: prodData
        }
    }
      
    static CallAllProducts() {
        return {
            type: GitAction.GetProduct
        }
    }

    static CallAddStore(storeData) {
        return {
            type: GitAction.AddStore,
            payload: storeData
        }
    }

    static CallAllStores() {
        return {
            type: GitAction.GetStores
        }
    }

    static CallAddStock(stockData) {
        return {
            type: GitAction.AddStock,
            payload: stockData
        }
    }
    static CallAllStock() {
        return {
            type: GitAction.GetStock
        }
    }
    
    static CallAllSales() {
        return {
            type: GitAction.GetSales
        }
    }
    
    static CallAddSale(saleData) {
        return {
            type: GitAction.AddSales,
            payload: saleData
        }
    }

    static CallSignup(credentials) {
        return {
            type: GitAction.Register,
            payload: credentials
        }
    }
    
    static CallLogin(credentials) {
        return {
            type: GitAction.Login,
            payload: credentials
        }
    }
  
}