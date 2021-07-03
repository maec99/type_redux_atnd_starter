import { applyMiddleware, combineReducers, createStore, Store } from "redux";
import thunk from "redux-thunk";


export interface IApplicationState {
}

const rootReducer = combineReducers<IApplicationState>({

});


export default function configureStore(): Store<IApplicationState> {
  const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
  /* store.subscribe(
    ()=>{
      console.log("state",store.getState());
      
    }
  ) */
  return store;
}
