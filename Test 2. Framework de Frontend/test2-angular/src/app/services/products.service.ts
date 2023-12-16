import { Injectable } from '@angular/core';
import { Product } from '../models/product.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('../../assets/products/products.json');
  }
}
