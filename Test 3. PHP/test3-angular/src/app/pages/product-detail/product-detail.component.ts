import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/product.interface';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FontAwesomeModule, RouterLink],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  public product!: Product;

  public faChevronLeft = faChevronLeft

  private id!: string

  constructor(
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute
  ) {}

  async ngOnInit(): Promise<void> {
    this.id = this.activatedRoute.snapshot.paramMap.get('id') || ''
    await this.getProduct(this.id);
  }

  private async getProduct(id: string) {
    this.productsService.getProduct(this.id).subscribe((product) => {
      this.product = product;
    })
  }

}
