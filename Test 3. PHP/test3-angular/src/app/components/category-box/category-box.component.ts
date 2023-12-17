import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-box.component.html',
  styleUrls: ['./category-box.component.scss']
})
export class CategoryBoxComponent {

  @Input() category: string = '';
  @Input() selectedCategories: string[] = [];
  @Output() checkboxChanged = new EventEmitter<boolean>();

  onCheckboxChange() {
    this.checkboxChanged.emit(true);
  }

}
