import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { CardComponent } from 'src/app/components/card/card.component';
import { FiltersBtnComponent } from 'src/app/components/filters-btn/filters-btn.component';
import { FiltersComponent } from 'src/app/components/filters/filters.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/product.interface';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, HeaderComponent, CardComponent, FiltersBtnComponent, FiltersComponent, FooterComponent, FontAwesomeModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products: Product[] = [];
  public filtersBtnClicked: boolean = false;

  public faChevronRight = faChevronRight

  constructor(
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((products) => this.products = products);
  }

  public toggleFilters() {
    this.filtersBtnClicked = !this.filtersBtnClicked;
  }

  public onProductsReceived(products: Product[]) {
    this.products = products;
   }

}
