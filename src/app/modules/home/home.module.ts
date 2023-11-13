import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchCourseComponent } from './components/search-course/search-course.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { ShortCourseDetailsComponent } from './components/short-course-details/short-course-details.component';



@NgModule({
  declarations: [
    SearchCourseComponent,
    AddCourseComponent,
    CoursesListComponent,
    ShortCourseDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
