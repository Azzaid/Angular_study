import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [FormsModule],
  selector: 'app-search-course',
  templateUrl: './search-course.component.html',
  styleUrls: ['./search-course.component.css'],
})

export class SearchCourseComponent {
  public searchString: string;
  constructor() {
    this.searchString = "Initial"
  }

  handleSearch () : void {
    console.log(`Current search string is ${this.searchString}`)
  }
}
