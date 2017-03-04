import { Observable } from 'rxjs';
import firebase from 'firebase';
import { ActionsObservable } from "redux-observable";

import { GitAction } from '../action/gitAction';
import { fbService } from '../service/fbService'

export class GitEpic {
    getAllComplains = (action$) =>
        action$.ofType(GitAction.GetComplain)
            .switchMap(({payload}) => {
                return firebase.database().ref('/complain/').once('value').then((snapshot) => {
                    return {
                        type: 'GOT-COMPLAIN',
                        payload: snapshot.val()
                    }
                })
            })
            
    getAllMissings = (action$) =>
        action$.ofType(GitAction.GetMissings)
            .switchMap(({payload}) => {
                return firebase.database().ref('/missing/').once('value').then((snapshot) => {
                    return {
                        type: 'GOT-MISSINGS',
                        payload: snapshot.val()
                    }
                })
            })

    getAllCrimes = (action$) =>
        action$.ofType(GitAction.GetCrimes)
            .switchMap(({payload}) => {
                return firebase.database().ref('/crime/').once('value').then((snapshot) => {
                    return {
                        type: 'GOT-CRIMES',
                        payload: snapshot.val()
                    }
                })
            })
            
    getUserData = (action$) =>
        action$.ofType(GitAction.GetData)
            .switchMap(({payload}) => {
                return firebase.database().ref('/posts/').once('value').then( (snapshot)=> {
                    console.log(action$)
                    return {
                        type: 'SUCCESS',
                        payload: snapshot.val()
                    }
                })
            })

    // Add Product
    addProductToDB = (action$) =>
        action$.ofType(GitAction.AddProduct)
            .switchMap(({payload}) => {
                return firebase.database().ref('/products/').push(payload).then((snapshot) => {
                    var storeNode = snapshot.path.o[1]
                    var payloadObj = {};
                    payloadObj[storeNode] = payload;
                    return {
                        type: 'PRODUCT-ADDED',
                        payload: payloadObj
                    }
                })
            })
    //get all products
    getAllProducts = (action$) =>
        action$.ofType(GitAction.GetStores)
            .switchMap(({payload}) => {
                return firebase.database().ref('/products/').once('value').then((snapshot) => {
                    return {
                        type: 'GOT-PRODUCT',
                        payload: snapshot.val()
                    }
                })
            })

    // Add Store
    addStoreToDB = (action$) =>
        action$.ofType(GitAction.AddStore)
            .switchMap(({payload}) => {
                return firebase.database().ref('/stores/').push(payload).then((snapshot) => {
                    console.log(action$)
                    var storeNode = snapshot.path.o[1]
                    var payloadObj = {};
                    payloadObj[storeNode] = payload;
                    return {
                        type: 'STORE-ADDED',
                        payload: payloadObj
                    }
                })
            })
    //get all Stores
    getAllStores = (action$) =>
        action$.ofType(GitAction.GetStores)
            .switchMap(({payload}) => {
                return firebase.database().ref('/stores/').once('value').then((snapshot) => {
                    return {
                        type: 'GOT-STORES',
                        payload: snapshot.val()
                    }
                })
            })
    // Add STOCK
    addStockToDB = (action$) =>
        action$.ofType(GitAction.AddStock)
            .switchMap(({payload}) => {
                return firebase.database().ref('/stocks/').push(payload).then((snapshot) => {
                    console.log(action$)
                    var storeNode = snapshot.path.o[1]
                    var payloadObj = {};
                    payloadObj[storeNode] = payload;
                    return {
                        type: 'STOCK-ADDED',
                        payload: payloadObj
                    }
                })
            })

 //get all Stocks
    getAllStocks = (action$) =>
        action$.ofType(GitAction.GetStock)
            .switchMap(({payload}) => {
                return firebase.database().ref('/stocks/').once('value').then((snapshot) => {
                    return {
                        type: 'GOT-STOCK',
                        payload: snapshot.val()
                    }
                })
            })

            // Add Sales
    addSalesToDB = (action$) =>
        action$.ofType(GitAction.AddSales)
            .switchMap(({payload}) => {
                return firebase.database().ref('/sales/').push(payload).then((snapshot) => {
                    console.log(action$)
                    var storeNode = snapshot.path.o[1]
                    var payloadObj = {};
                    payloadObj[storeNode] = payload;
                    return {
                        type: 'SALES-ADDED',
                        payload: payloadObj
                    }
                })
            })
            
            
 //get all Stocks
    getAllSales = (action$) =>
        action$.ofType(GitAction.GetSales)
            .switchMap(({payload}) => {
                return firebase.database().ref('/sales/').once('value').then((snapshot) => {
                    return {
                        type: 'GOT-SALES',
                        payload: snapshot.val()
                    }
                })
            })

    registerReport = (action$) =>
        action$.ofType(GitAction.FileReport)
            .switchMap(({payload}) => {
                var nodeToAddData = payload.value.toLowerCase();
                nodeToAddData = nodeToAddData.indexOf('missing')>-1?'missing': nodeToAddData;
                return firebase.database().ref(`${nodeToAddData}`).push(payload).then((userInfo)=> {
                    
                    return {
                                type: 'FILED',
                                payload: payload
                            }
                })
            })
    
    
    registerUser = (action$) =>
        action$.ofType(GitAction.Register)
            .switchMap(({payload}) => {
                return firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password).then((userInfo)=> {
                    delete payload.password;
                    payload.uid = userInfo.uid;
                   firebase.database().ref().child(`users/${userInfo.uid}`).set(payload)
                    return {
                                type: 'SUCCESSFULLY-CREATED-USER',
                                payload: payload
                            }
                })
            })
    LoginUser = (action$) =>
        action$.ofType(GitAction.Login)
            .switchMap(({payload}) => {
                return firebase.auth().signInWithEmailAndPassword(payload.email, payload.password).then((userInfo) => {
                    delete payload.password;
                    payload.uid = userInfo.uid;
                    return {
                        type: 'SUCCESSFULLY-LOGIN',
                        payload: payload
                    }
                })
            })
    getLoggedInUserData = (action$) =>
        action$.ofType('SUCCESSFULLY-LOGIN')
            .switchMap(({payload}) => {
                return firebase.database().ref('/').child(`users/${payload.uid}`).once('value').then((user) => {
                    return {
                        type: 'SUCCESSFULLY-LOGIN-WITH-DATA',
                        payload: user.val()
                    }
                })
            })


}
export let gitEpic = new GitEpic();

