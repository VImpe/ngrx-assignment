import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Products } from './../models/products.model';
import { AppState } from './../app.state';
import * as TutorialActions from './../actions/product.actions';
@Component({
  selector: 'app-customize-products',
  templateUrl: './customize-products.component.html',
  styleUrls: ['./customize-products.component.css']
})
export class CustomizeProductsComponent implements OnInit {
	products : Observable<Products[]>
	model = new Object();
	index = -1;
	buttonTxt = 'Submit';
  constructor(private store : Store<AppState>) {
  	this.products = store.select('product');	
  }

  ngOnInit() {
  }
  addDetails(product){

  	if(this.index > -1){
  		this.store.dispatch(new TutorialActions.UpdateProduct(product,this.index));
  		this.index =-1;
  	}else{
  		this.store.dispatch(new TutorialActions.AddProducts(product));
  	}
  	this.model ={};
  	this.buttonTxt = 'Submit';
  }
  delProduct(index){
  	this.store.dispatch(new TutorialActions.RemoveProducts(index))
  }
  editProduct(product,i){
  	this.model = product;
  	this.index = i;
  	this.buttonTxt = 'Update';
  }
}
