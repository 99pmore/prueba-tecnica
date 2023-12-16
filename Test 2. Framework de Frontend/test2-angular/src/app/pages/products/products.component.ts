import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { CardComponent } from 'src/app/components/card/card.component';
import { FiltersBtnComponent } from 'src/app/components/filters-btn/filters-btn.component';
import { FiltersComponent } from 'src/app/components/filters/filters.component';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/product.interface';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, HeaderComponent, CardComponent, FiltersBtnComponent, FiltersComponent],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products: Product[] = [];
  public filtersBtnClicked: boolean = false;

  constructor(
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((products) => this.products = products);
  }

  public toggleFilters() {
    this.filtersBtnClicked = !this.filtersBtnClicked;
  }

}
