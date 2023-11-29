import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";

import { SearchCourseComponent } from '../search-course/search-course.component';
import { AddCourseComponent } from '../add-course/add-course.component';
import { ShortCourseDetailsComponent } from '../short-course-details/short-course-details.component';
import {Course} from "../../../../core/interfaces/Course";
import mockedCourses from "../../../../../assets/mockedCourses";

@Component({
  standalone: true,
  imports: [SearchCourseComponent, AddCourseComponent, ShortCourseDetailsComponent, CommonModule],
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent {
  public coursesList : Course[]

  constructor() {
    this.coursesList = [];
  }

  ngOnInit() {
    this.coursesList = mockedCourses;
  }

  identifyById(index : number, item: Course):number {
    return item.id
  }

}
