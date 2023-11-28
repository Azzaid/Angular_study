import { Component, Input } from '@angular/core';
import {Course} from "../../../../core/interfaces/Course";
import {CommonModule} from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-short-course-details',
  templateUrl: './short-course-details.component.html',
  styleUrls: ['./short-course-details.component.css'],
  imports: [CommonModule]
})
export class ShortCourseDetailsComponent {
  @Input() course : Course | null = null;

}
