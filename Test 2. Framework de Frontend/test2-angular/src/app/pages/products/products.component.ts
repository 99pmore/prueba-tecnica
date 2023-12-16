import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { CardComponent } from 'src/app/components/card/card.component';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/product.interface';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, HeaderComponent, CardComponent],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products: Product[] = []

  constructor(
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((products) => this.products = products)
  }

}
