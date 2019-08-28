import { Action } from '@ngrx/store';
import { Products } from './../models/products.model';
import * as ProductsAction from './../actions/product.actions';

const initialState: Products ={
	name:'someting',
	detail:'someting like Detail',
	categories: 'someting Like Men'
}

export function reducer (state : Products[] = [initialState],action: ProductsAction.Action){
	switch(action.type){
		case ProductsAction.ProductActionTypes.LoadProducts:
			return state;
		case ProductsAction.ProductActionTypes.AddProducts:
			return [...state, action.payload];
		case ProductsAction.ProductActionTypes.RemoveProducts:
			state.splice(action.payload,1);
			return  state;
		case ProductsAction.ProductActionTypes.UpdateProduct:
			return state;//[...state, action.payload,action.id];
		default :
		return state;
	}
}