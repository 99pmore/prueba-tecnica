import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCartShopping, faMagnifyingGlass, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';
import { Product } from 'src/app/models/product.interface';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() products = new EventEmitter<Product[]>();

  public cartProducts: number = 0;

  public faCartShopping = faCartShopping;
  public faMagnifyingGlass = faMagnifyingGlass;
  public faBars = faBars;
  public faXmark = faXmark;

  public searchBarOpen: boolean = false;
  public q: string = '';

  constructor(
    private productsService: ProductsService
  ) {}

  public toggleSearchBar() {
    this.searchBarOpen = !this.searchBarOpen;
  }

  public search() {
    this.productsService.getSearchProducts(this.q).subscribe((products) => {
      this.products.emit(products);
    });
  }
}
