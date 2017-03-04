import {GitAction} from '../action/gitAction'


const INITIAL_STATE = {
    gitData:{},
    loading: true,
    currentUser:{},
    stores:{},
    products:{},
    stocks:[],
    sales:[]
};

export function counterReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case GitAction.GetData:
            return Object.assign({}, state, { loading: true });
            
        //register user
        case GitAction.Register:
            return Object.assign({}, state, { loading: true });
        case GitAction.UserRegistered:
            return Object.assign({}, state, { loading: false, currentUser: action.payload });
        //==============

        //Login user
        case GitAction.Login:
            return Object.assign({}, state, { loading: true });
        case GitAction.UserLoggedInWithData:
            return Object.assign({}, state, { loading: false, currentUser: action.payload });
        //==============
        //=======================PRODUCT========================//
        //ADD PRODUCT
        case GitAction.AddProduct:
            return Object.assign({}, state, { loading: true });
        case GitAction.ProductAdded:
            var newProdObj = Object.assign({}, state);
            newProdObj.loading = false;
            for(var key in action.payload){
                newProdObj.products[key] = action.payload[key]
            }
            return newProdObj;

             //GET PRODUCT
        case GitAction.GetProduct:
            return Object.assign({}, state, { loading: true });
        case GitAction.GotProduct:
            return Object.assign({}, state, { loading: false, products: action.payload });

        //=======================STORE========================//
        //ADD STORE
        case GitAction.AddStore:
            return Object.assign({}, state, { loading: true });
        case GitAction.StoreAdded:
         var newStoreObj = Object.assign({}, state);
            newStoreObj.loading = false;
            for(var key in action.payload){
                if (key) {
                    newStoreObj.stores[key] = action.payload[key]
                }
            }
            return newStoreObj;
        
        //GET STORE
        case GitAction.GetStores:
            return Object.assign({}, state, { loading: true });
        case GitAction.GotStores:
            return Object.assign({}, state, { loading: false, stores: action.payload });
            
        //ADD STOCK
        case GitAction.AddStock:
            return Object.assign({}, state, { loading: true });
        case GitAction.StockAdded:
         var newStoreObj = Object.assign({}, state);
            newStoreObj.loading = false;
            for(var key in action.payload){
                if (key) {
                    newStoreObj.stocks[key] = action.payload[key]
                }
            }
            return newStoreObj;
     
        //ADD SALES
        case GitAction.AddSales:
            return Object.assign({}, state, { loading: true });
        case GitAction.SalesAdded:
         var newStoreObj = Object.assign({}, state);
            newStoreObj.loading = false;
            for(var key in action.payload){
                if (key) {
                    newStoreObj.sales[key] = action.payload[key]
                }
            }
            return newStoreObj;
        //ALL STOCKS
        case GitAction.GetStock:
            return Object.assign({}, state, { loading: true });
        case GitAction.GotStock:
        var newStockArr = Object.keys(action.payload).map((key) => { return action.payload[key] })
            return Object.assign({}, state, { loading: false, stocks: newStockArr });

            
        //ALL SALES
        case GitAction.GetSales:
            return Object.assign({}, state, { loading: true });
        case GitAction.GotSales:
        var newStockArr = Object.keys(action.payload).map((key) => { return action.payload[key] })
            return Object.assign({}, state, { loading: false, sales: newStockArr });
        //==============

        //ALL MISSINGS
        case GitAction.GetMissings:
            return Object.assign({}, state, { loading: true });
        case GitAction.GotMissings:
            return Object.assign({}, state, { loading: false, missings: action.payload });
        //==============

        //ALL CRIMES
        case GitAction.GetCrimes:
            return Object.assign({}, state, { loading: true });
        case GitAction.GotCrimes:
            return Object.assign({}, state, { loading: false, crimes: action.payload });
        //==============

        //FILE A REPORT
        case GitAction.FileReport:
            return Object.assign({}, state, { loading: true });
        case GitAction.Filed:
            return Object.assign({}, state, { loading: false, report: action.payload });
        //==============

        case GitAction.Success:
            return Object.assign({}, state, { loading: false, gitData: action.payload });
        case GitAction.Failure:
            return Object.assign({}, state, { loading: true })
        default:
            return state
    }
}