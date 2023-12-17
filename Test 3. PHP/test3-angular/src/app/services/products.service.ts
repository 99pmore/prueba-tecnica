import { Injectable } from '@angular/core';
import { Product } from '../models/product.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private url = 'http://127.0.0.1:8000/api/products';

  constructor(
    private httpClient: HttpClient
  ) { }

  public getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.url);
  }

  public getProductsByCategory(category: string): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.url}?category=${category}`);
  }

  public getSearchProducts(q: string): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.url}/search?q=${q}`);
  }

  public getProduct(id: string): Observable<Product> {
    return this.httpClient.get<Product>(`${this.url}/${id}`);
  }
}
