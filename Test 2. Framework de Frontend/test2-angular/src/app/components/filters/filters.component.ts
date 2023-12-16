import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { ProductsService } from 'src/app/services/products.service';
import { CategoryBoxComponent } from "../category-box/category-box.component";

@Component({
    selector: 'app-filters',
    standalone: true,
    templateUrl: './filters.component.html',
    styleUrls: ['./filters.component.scss'],
    imports: [CommonModule, FontAwesomeModule, CategoryBoxComponent]
})
export class FiltersComponent implements OnInit {

  @Output() filtersBtnClicked = new EventEmitter<boolean>();

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

  private getCategories() {
    let lastCategory: string = '';
    this.productsService.getProducts().subscribe((products) => {
      products.map((product) => {
        if(product.category !== lastCategory){
          this.categories.push(product.category)
        }
        lastCategory = product.category
      });
    });
  } 

  public onCheckboxChange(category: string) {
    if (this.selectedCategories.includes(category)) {
      this.selectedCategories = this.selectedCategories.filter(c => c !== category);

    } else {
      this.selectedCategories.push(category);
    }
  }
}
