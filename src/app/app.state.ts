import { Products } from './models/products.model';

export interface AppState{
	readonly products : Products[];
}