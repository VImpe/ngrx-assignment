import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Products } from './../models/products.model';

export enum ProductActionTypes {
  LoadProducts = '[PRODUCTS] Load Products',
  RemoveProducts = '[PRODUCTS] Remove',
  AddProducts = '[PRODUCTS] Add',
  UpdateProduct = '[PRODUCTS] Update',
  
  
}

export class LoadProducts implements Action {
  readonly type = ProductActionTypes.LoadProducts;
  constructor(public payload:Products){}
}

export class RemoveProducts implements Action{
	readonly type = ProductActionTypes.RemoveProducts;
	constructor(public payload:number){};
}
export class AddProducts implements Action{
	readonly type = ProductActionTypes.AddProducts;
	constructor(public payload:Products){};
}
export class UpdateProduct implements Action {
    readonly type = ProductActionTypes.UpdateProduct;
    constructor(
       public payload:Products,
       public id: number,
      ) { }
}
export type Action = LoadProducts|RemoveProducts|AddProducts|UpdateProduct;
