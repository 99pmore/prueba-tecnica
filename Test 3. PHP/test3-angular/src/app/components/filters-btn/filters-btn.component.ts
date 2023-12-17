import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-filters-btn',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './filters-btn.component.html',
  styleUrls: ['./filters-btn.component.scss']
})
export class FiltersBtnComponent {

  @Output() filtersBtnClicked = new EventEmitter<boolean>();

  public faFilter = faFilter;

  public toggleFilters() {
    this.filtersBtnClicked.emit(true);
  }
}
