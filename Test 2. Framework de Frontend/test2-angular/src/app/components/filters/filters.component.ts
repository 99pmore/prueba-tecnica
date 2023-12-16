import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {

  @Output() filtersBtnClicked = new EventEmitter<boolean>();
  
  public faXmark = faXmark;
  public faFilter = faFilter;

  public toggleFilters() {
    this.filtersBtnClicked.emit(false);
  }
}
