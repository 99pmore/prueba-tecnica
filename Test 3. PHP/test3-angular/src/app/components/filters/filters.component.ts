import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { ProductsService } from 'src/app/services/products.service';
import { CategoryBoxComponent } from "../category-box/category-box.component";
import { Product } from 'src/app/models/product.interface';
import { FormsModule } from '@angular/forms';
import { forkJoin } from 'rxjs';

@Component({
    selector: 'app-filters',
    standalone: true,
    templateUrl: './filters.component.html',
    styleUrls: ['./filters.component.scss'],
    imports: [CommonModule, FontAwesomeModule, CategoryBoxComponent, FormsModule]
})
export class FiltersComponent implements OnInit {

  @Output() filtersBtnClicked = new EventEmitter<boolean>();
  @Output() products = new EventEmitter<Product[]>();

  public categories: string[] = [];
  public selectedCategories: string[] = [];
  
  public faXmark = faXmark;
  public faFilter = faFilter;

  constructor(
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.getCategories();
  }

  public toggleFilters() {
    this.filtersBtnClicked.emit(false);
  }

  public onCheckboxChange(category: string) {
    if (this.selectedCategories.includes(category)) {
      this.selectedCategories = this.selectedCategories.filter(c => c !== category);

    } else {
      this.selectedCategories.push(category);
    }
  }

  public filter() {
    let allProducts: Product[] = [];
    let observables = this.selectedCategories.map(category => {
      return this.productsService.getProductsByCategory(category.toLowerCase());
    });
   
    forkJoin(observables).subscribe(productsAPIs => {
      allProducts = productsAPIs.reduce((all, products) => {
        return [...all, ...products];
      }, []);
   
      this.products.emit(allProducts);
      this.filtersBtnClicked.emit(false);
    });
  }

  private getCategories() {
    let lastCategory: string = '';
    this.productsService.getProducts().subscribe((products) => {
      products.map((product) => {
        if(product.category !== lastCategory){
          this.categories.push(product.category);
        }
        lastCategory = product.category
      });
    });
  } 

}
